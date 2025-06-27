import { useEffect, useState } from "react";

export default function ScreenWidthDisplay() {
    const [width, setWidth] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 0);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div style={{
            position: "fixed",
            bottom: 16,
            right: 16,
            background: "rgba(0,0,0,0.7)",
            color: "#fff",
            padding: "8px 16px",
            borderRadius: "8px",
            zIndex: 1000,
            fontFamily: "monospace"
        }}>
            Width: {width}px
        </div>
    );
}
