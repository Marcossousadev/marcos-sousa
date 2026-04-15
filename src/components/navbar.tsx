import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full h-16 px-6 flex items-center justify-between 
    bg-[#222222]/80 backdrop-blur border-b border-white/10 text-foreground">

      <h1 className="text-lg font-bold tracking-wide">
        Marcos Sousa
      </h1>

      <ul className="flex gap-4 text-sm font-medium">
        <li><Link href="/" className="hover:text-gray-300 transition">Sobre</Link></li>
        <li><Link href="#projetos" className="hover:text-gray-300 transition">Projetos</Link></li>
        <li><Link href="#contato" className="hover:text-gray-300 transition">Contato</Link></li>
      </ul>
    </nav>
  );
}