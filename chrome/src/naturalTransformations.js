import { create } from '@most/create';
import { isFunction } from 'crocks/predicates';
import Async from 'crocks/Async';

export const overloadForFunctions = (nt) => (x) => (isFunction(x) ? (...args) => nt(x(...args)) : nt(x));

// ioToStream :: (IO a | * -> IO a) -> (Stream a | * -> Stream a)
export const ioToStream = overloadForFunctions((io) =>
	create((next, end, error) => {
		try {
			next(io.run());
		} catch (e) {
			error(e);
		}
		end();
	})
);

// asyncToStream :: (Async Error a | * -> Async Error a) -> (Stream a | * -> Stream a)
export const asyncToStream = overloadForFunctions((async) => {
	return create((next, end, error) => {
		async.fork(
			(e) => error(e),
			(x) => {
				next(x);
				end();
			}
		);
	});
});

// ioToAsync  (IO a | * -> IO a) -> (Async Error a | * -> Async Error a)
export const ioToAsync = overloadForFunctions((io) =>
	Async((reject, resolve) => {
		try {
			resolve(io.run());
		} catch (e) {
			reject(e);
		}
	})
);
