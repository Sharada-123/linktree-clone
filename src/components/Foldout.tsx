import { useState, type ReactElement, type ReactNode } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

type FoldoutProps = {
    title: string;
    children: ReactNode;
    dontShrink?: boolean;
    icon?: ReactElement;
    primary?: string;
    secondary?: string;
    primaryTxt?: string;
    secondaryTxt?: string;
    bgImg?: string;
}

function Foldout(props: FoldoutProps) {
    const {
        title,
        children,
        dontShrink = false,
        icon = null,
        primary = "var(--color-primary)",
        secondary = "var(--color-secondary)",
        primaryTxt = "var(--color-primary-txt)",
        secondaryTxt = "var(--color-secondary-txt)",
        bgImg = null,
    } = props;

    const [open, setOpen] = useState(false);
    const [hover, setHover] = useState(false);

    const backgroundStyle = bgImg
        ? {
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }
        : {
            backgroundColor: hover ? secondary : primary,
        };

    return (
        <>
            <div>
            <button
                onClick={() => setOpen(prev => !prev)}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="w-full flex justify-between items-center font-semibold cursor-pointer py-3 px-4 rounded-xl shadow-sm transition-transform duration-150 ease-in-out hover:scale-95"
                style={{
                    color: hover ? secondaryTxt : primaryTxt,
                    ...backgroundStyle,
                }}
            >
                <div className="flex items-center gap-2">
                    {icon}
                    {title}
                </div>
                {open ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            <div
            className="mt-2 space-y-2"
            style={{
                paddingLeft: dontShrink ? '0' : '3%',
                paddingRight: dontShrink ? '0' : '3%',
                color: secondaryTxt,
            }}
            >
                {open && children}
            </div>
        </div>
        </>
    );
}

export default Foldout;