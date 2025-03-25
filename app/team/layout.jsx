import Link from "next/link";

export default function TeamLayout({ children }) {
  return (
    <div className="flex h-screen">
        <nav className="w-1/4 bg-gray-900 text-white p-8">
            <ul className="space-y-4">
                <li><Link href="#">Fulanito</Link></li>
                <li><Link href="#">Sutanito</Link></li>
                <li><Link href="#">Menganito</Link></li>
                <li><Link href="#">Perencejito</Link></li>
            </ul>
        </nav>
      {children}
    </div>
  );

}