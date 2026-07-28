import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed z-50 top-4 landscape:top-5 w-[90%] md:w-[85%] h-16 md:h-18 px-6 flex items-center justify-between 
    bg-[#2222]/90 backdrop-blur-xl border border-white/20 text-foreground rounded-full">

      <h1 className="text-lg font-bold tracking-wide bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 bg-clip-text text-transparent">
        Marcos
      </h1>

      <ul className="flex gap-4 text-sm md:text-base font-medium">
        <li className="hover:text-gray-400 transition"><Link href="/">Sobre</Link></li>
        <li><Link href="#projetos" className="hover:text-gray-400 transition">Projetos</Link></li>
        <li><Link href="#contato" className="hover:text-gray-400 transition">Contato</Link></li>
      </ul>
    </nav>
  );
}