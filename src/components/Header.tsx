

type HeaderProps = {
    title: string,
    txtColor?: string
}

function Header(props: HeaderProps) {
    const {
        title,
        txtColor = "var(--color-header)"
    } = props;

    return (
        <>
            <div className="text-center font-bold text-lg uppercase tracking-wide" style={{color: txtColor}}>
                {title}
            </div>
        </>
    );
}

export default Header;