import { useState, type ReactElement } from "react";

type LinkProps = {
    title: string;
    url: string;
    primary?: string;
    secondary?: string;
    primaryTxt?: string;
    secondaryTxt?: string;
    buttonHoverScale?: number;
    icon?: ReactElement;
    bgImg?: string;
}

function Link(props: LinkProps) {
    const {
        title,
        url,
        primary = "var(--color-primary)",
        secondary = "var(--color-secondary)",
        primaryTxt = "var(--color-primary-txt)",
        secondaryTxt = "var(--color-secondary-txt)",
        buttonHoverScale = 0.95, 
        icon = null,
        bgImg = null
    } = props;

    const [hovered, setHovered] = useState(false);
    const handleMouseEnter = () => setHovered(true);
    const handleMouseExit = () => setHovered(false);

    const scale = hovered ? buttonHoverScale : 1;

    const backgroundStyle = bgImg ? {
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: hovered ? secondary : primary,
    } : {
        backgroundColor: hovered ? secondary : primary,
    };

    return (
        <>
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center font-semibold py-3 rounded-xl shadow-sm"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseExit}
                style={{
                    color: hovered ? secondaryTxt : primaryTxt,
                    transition: "transform 0.15s ease-in-out, color 0.15s ease-in-out",
                    transform: `scale(${scale})`,
                    ...backgroundStyle,
                }}
            >
                <div className="flex items-center justify-center gap-2">
                    {icon}
                    {title}
                </div>
            </a>
        </>
    );
}


export default Link;