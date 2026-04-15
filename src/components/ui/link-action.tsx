
interface ButtonProps {
    text: string;
    transparent?: boolean;
    download?: boolean;
    href: string;
}


export function LinkAction({ text, transparent, href, download } : ButtonProps) {
    return <a href={href} download={download} className={`${transparent ? "bg-transparent text-foreground" : "bg-white text-black"} px-4 py-2 rounded-3xl font-semibold text-sm border-2 border-white`}>{text}</a>;
}