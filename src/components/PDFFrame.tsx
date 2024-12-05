"use client"
import { useRef } from "react";

export default function PDFFrame() {
    const frameRef = useRef<null | HTMLDivElement>(null);
    const scrollToFrame = () => {
        if (frameRef.current) {
            frameRef.current.scrollIntoView({
                behavior: "smooth"
            });
        }
    };

    return (
        <>
            {/* <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full absolute right-6 bottom-14"
                onClick={scrollToFrame}>
                Center PDF
            </button> */}
            <div className="h-screen" ref={frameRef}>
                <iframe src="Devang Ray Resume.pdf" width="100%" height="100%"/>
            </div>
        </>
    );
}