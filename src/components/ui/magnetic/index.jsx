import gsap from "gsap";
import { useEffect, useRef } from "react";

const Magnetic = ({ children }) => {
    const magnetic = useRef(null);

    useEffect(() => {
        const element = magnetic.current;

        if (!element) return;

        const xTo = gsap.quickTo(element, "x", {
            duration: 1,
            ease: "elastic.out(1, 0.3)",
        });

        const yTo = gsap.quickTo(element, "y", {
            duration: 1,
            ease: "elastic.out(1, 0.3)",
        });

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { width, height, left, top } =
                element.getBoundingClientRect();

            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);

            xTo(x * 0.5);
            yTo(y * 0.5);
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        element.addEventListener("mousemove", handleMouseMove);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            element.removeEventListener("mousemove", handleMouseMove);
            element.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    //return cloneElement(children, { ref: magnetic });
    return (
        <div ref={magnetic}>
            {children}
        </div>
    );
};

export default Magnetic;