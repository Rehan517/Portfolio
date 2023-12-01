import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
    bgColor?: string | undefined;
}

function SocialButton({ children, bgColor = "black" }: Props) {

    let bgHoverColorClass;

    switch (bgColor) {
        case "linkedin":
            bgHoverColorClass = "hover:bg-linkedin";
            break;
        case "instagram":
            bgHoverColorClass = "hover:bg-instagram";
            break;
        case "default":
            bgHoverColorClass = "hover:bg-black";
            break;
    }

    return (
        <button className={`group h-12 w-12 bg-white ${bgHoverColorClass} rounded-full transition-colors duration-200 ease-in-out flex justify-center items-center`}>
            <div className='fill-black group-hover:fill-white transition-colors duration-200 ease-in-out'>
                {children}
            </div>
        </button>
    )


}

export default SocialButton