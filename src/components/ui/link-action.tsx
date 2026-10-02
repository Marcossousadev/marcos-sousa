
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
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`${
                transparent 
                    ? "bg-transparent text-white border border-zinc-700 hover:bg-zinc-800" 
                    : "bg-white text-black hover:bg-zinc-200 font-semibold"
            } px-5 py-2.5 rounded-lg text-sm transition-colors inline-flex items-center justify-center`}
        >
            {text}
        </a>
    );
}