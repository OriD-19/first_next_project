import Link from "next/link";

export default function TeamLayout({ children }) {
  return (
    <div className="flex h-screen">
        <nav className="w-1/4 bg-gray-900 text-white p-8">
            <ul className="space-y-4">
                <li><Link href="#" className="block p-2">Fulanito</Link></li>
                <li><Link href="#" className="block p-2">Sutanito</Link></li>
                <li><Link href="#" className="block p-2">Menganito</Link></li>
                <li><Link href="#" className="block p-2">Perencejito</Link></li>
            </ul>
        </nav>
        <main className="flex-1 p-10">
          {children}
        </main>
    </div>
  );

}