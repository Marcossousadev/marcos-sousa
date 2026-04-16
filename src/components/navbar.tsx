import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-4 w-[90%] h-16 px-6 flex items-center justify-between 
    bg-[#222222]/80 rounded-full backdrop-blur-xs border-b border-white/10 text-foreground">

      <h1 className="text-lg font-bold tracking-wide bg-gradient-to-r from-orange-500 via-pink-400 to-purple-300 bg-clip-text text-transparent">
        Marcos
      </h1>

      <ul className="flex gap-4 text-sm font-medium">
        <li><Link href="/" className="hover:text-gray-300 transition">Sobre</Link></li>
        <li><Link href="#projetos" className="hover:text-gray-300 transition">Projetos</Link></li>
        <li><Link href="#contato" className="hover:text-gray-300 transition">Contato</Link></li>
      </ul>
    </nav>
  );
}