import React from "react";

export default function AuthLayout({
    children
}:{
    children: React.ReactNode
}): JSX.Element {
    return (
        <div className="flex pt-14 items-center justify-center h-full">
            {children}
        </div>
    );
}