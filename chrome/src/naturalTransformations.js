import { create } from '@most/create';
import { isFunction } from 'crocks/predicates';

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
