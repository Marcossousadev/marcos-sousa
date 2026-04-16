
interface ButtonProps {
    text: string;
    transparent?: boolean;
    download?: boolean;
    href: string;
}


export function LinkAction({ text, transparent, href, download }: ButtonProps) {
    return (
        <a
            href={href}
            download={download}
            className={`${transparent ? "bg-transparent text-foreground" : "bg-white text-black"} px-4 md:px-6 py-2 md:py-3 lg:px-8 lg:py-4
            rounded-3xl lg:rounded-4xl font-semibold text-sm md:text-sm lg:text-lg border-2 border-white`}>
            {text}
        </a>
    );
}