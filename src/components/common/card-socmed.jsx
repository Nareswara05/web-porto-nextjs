import React from 'react';
import Link from 'next/link';

const CardSocmed = ({ logo: Logo, socmed }) => {
    return (
        
            <Link href={socmed} passHref className="p-2 rounded-xl border-2 border-[#27272A] bg-transparent text-lg text-white">
                <Logo className="text-xl" />
            </Link>
    );
};

export default CardSocmed;
