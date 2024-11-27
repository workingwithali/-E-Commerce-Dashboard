'use client';
import { useState, useEffect } from "react";

export const ModalProvider = () => {
    const [isMount, setIsMount] = useState(false); // Fixed destructuring

    useEffect(() => {
        setIsMount(true);
    }, []); // Runs only once when the component is mounted

    if (!isMount) {
        return null; // Render nothing until the component is mounted
    }

    return (
        <div>
            {/* Replace with your actual modal logic or content */}
            Modal content goes here!
        </div>
    );
};
