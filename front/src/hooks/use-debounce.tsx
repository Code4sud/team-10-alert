import {useEffect, useState} from "react";

export function useDebounce(callback, delay) {
    const [timer, setTimer] = useState(null);

    const debouncedCallback = (...args) => {
        if (timer) clearTimeout(timer);

        const newTimer = setTimeout(() => {
            callback(...args);
        }, delay);

        setTimer(newTimer);
    };

    useEffect(() => {
        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [timer]);

    return debouncedCallback;
}
