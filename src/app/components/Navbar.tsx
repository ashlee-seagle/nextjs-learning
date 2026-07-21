/*
CHALLENGE - Navbar Component
Create a Navbar component using the `<header>` element
in the `index.html` mockup and import/use in `layout.tsx`

DOCS: 
- https://react.dev/learn/your-first-component#defining-a-component
- https://nextjs.org/docs/app/getting-started/layouts-and-pages#creating-a-layout
*/
export default function Navbar() {
  return (
    <header className="w-full bg-white">
      <nav className="flex justify-between px-6 py-4 pr-2">
        <a href="index.html">
          <div className="relative cursor-pointer">
            <img
              src="/img/printforge-logo.svg"
              alt="PrintForge Logo"
              className="w-[200px] h-auto hidden md:block"
            />

            <img
              src="/img/printforge-logo-icon.svg"
              alt="PrintForge Logo"
              className="w-[40px] h-auto block md:hidden"
            />
          </div>
        </a>
        <ul className="flex items-center gap-1.5">
          <li className="text-sm uppercase">
            <a
              className="px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-orange-400 text-gray-700"
              href="3d-models.html"
            >
              3D Models
            </a>
          </li>
          <li className="text-sm uppercase">
            <a
              className="px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-orange-400 text-gray-700"
              href="about.html"
            >
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
