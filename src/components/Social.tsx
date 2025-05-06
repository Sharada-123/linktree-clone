import React, { useState, type ReactElement } from "react"

type SocialProps = {
    icon: ReactElement<React.SVGProps<SVGSVGElement>>;
    url: string;
    tooltip: string;
    iconSize?: number;
    iconHoverScale?: number;
    iconColour?: string;
    iconHoverColour?: string;
}

function Social(props: SocialProps) {
    const {
        icon,
        url,
        tooltip,
        iconSize = 24,
        iconHoverScale = 0.85,
        iconColour = "var(--color-social-icons)",
        iconHoverColour = "var(--color-social-icons)"
    } = props;

    const [hovered, setHovered] = useState(false);
    const handleMouseEnter = () => setHovered(true);
    const handleMouseExit = () => setHovered(false);
    
    const scale = hovered ? iconHoverScale : 1;

    return (
        <>
            <a
                href={url}
                title={tooltip}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseExit}
                style={{
                    color: hovered ? iconHoverColour : iconColour,
                    transition: "transform 0.15s ease-in-out, color 0.15s ease-in-out",
                    transform: `scale(${scale})`
                }}
            >
                { React.cloneElement(icon, {
                    style: {
                        width: iconSize,
                        height: iconSize,
                        color: hovered ? iconHoverColour : iconColour
                    }
                })}
            </a>
        </>
    );
}

export default Social;