import { useEffect, useRef } from "react";

export const useDebounceEffect = (
    request: () => void,
    onReturn: () => void,
    props: any[],
    timeout: number = 500
) => {
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            request();
        }, timeout);
        if (onReturn) {
            return onReturn;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, props);
};
