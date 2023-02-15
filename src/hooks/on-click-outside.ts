import { useEffect } from 'react';

const useOnClickOutside = (refs: unknown, handler: unknown) => {
    useEffect(() => {
        const listener = (event: { target: any }) => {
            // @ts-ignore
            const refCheck = refs.some((ref) => !ref.current || ref.current.contains(event.target));
            if (refCheck) {
                return;
            }
            // @ts-ignore
            handler(event);
        };
        document.addEventListener('mousedown', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
        };
    }, [refs, handler]);
};

export default useOnClickOutside;
