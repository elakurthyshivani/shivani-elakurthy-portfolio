import {useState, useEffect} from "react";

export function useIntersectionObserver(refElement) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const current = refElement?.current;
        // console.log(current);
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {threshold : 1}
        );
        current && observer?.observe(current);
        return () => current && observer.unobserve(current);
    });

    return isVisible;
}