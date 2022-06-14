import type { NextPage } from 'next'
import React from 'react'

interface TernaryButtonProps {
    children: React.ReactNode,
    type: "button" | "submit" | "reset",
    disabled?: boolean,
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    className?: string,
}

const TernaryButton: NextPage<TernaryButtonProps> = ({ children, type, disabled = false, onClick, className }) => {
    return (
        <button onClick={onClick} type={type} disabled={disabled} className={className}>
            { children }
        </button>
    )
}

export default TernaryButton;