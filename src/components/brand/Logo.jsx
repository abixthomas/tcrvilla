import React from 'react';
import { cn } from "@/lib/utils";

const ThrissurVillasLogo = ({ variant = 'default', className = '' }) => {
    const variants = {
        default: 'h-12 w-auto',
        header: 'h-16 md:h-20', // Explicitly requested size for header alignement
        footer: 'h-16 w-auto',  // Matches the footer sizing we settled on
        mobile: 'h-12 w-auto',
        hero: 'h-16 md:h-24',
        favicon: 'h-6 w-6'
    };

    const selectedClass = variants[variant] || variants.default;

    return (
        <img
            src="/logo-final-v6-script.png"
            alt="Thrissur Villas - Premium Real Estate"
            className={cn(
                selectedClass,
                className,
                "object-contain transition-all duration-300 select-none"
            )}
            style={{
                filter: 'none !important',
                mixBlendMode: 'normal',
                backgroundColor: 'transparent',
            }}
            loading="eager"
            decoding="sync"
        />
    );
};

export default ThrissurVillasLogo;
