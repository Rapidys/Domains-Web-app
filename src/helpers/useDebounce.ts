import { useCallback, useRef } from "react";

type DebouncedFunction<T extends any[]> = (...args: T) => void;

const useDebouncedCallback = <T extends any[]>(
    func: DebouncedFunction<T>,
    wait: number
) => {
    const timeout = useRef<NodeJS.Timeout | null>(null);

    return useCallback(
        (...args: T) => {
            if (timeout.current !== null) {
                clearTimeout(timeout.current);
            }

            timeout.current = setTimeout(() => {
                func(...args);
            }, wait);
        },
        [func, wait]
    );
};

export default useDebouncedCallback;
