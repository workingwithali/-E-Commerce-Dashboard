'use client';
import { StoreModal } from "@/components/modals/store-modal";

import { useState, useEffect } from "react";

export const ModalProvider = () => {
    const [isMount, setIsMount] = useState(false); 

    useEffect(() => {
        setIsMount(true);
    }, []); 

    if (!isMount) {
        return null; 
    }

    return (
        
        <>
        <StoreModal/>
        </>
    );
};
