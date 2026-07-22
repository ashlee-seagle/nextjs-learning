export default function CategoriesNav() {
  return (
    <aside className="sticky top-0 z-10 w-full bg-white border-b border-gray-200 md:fixed md:w-64 md:top-1/2 md:-translate-y-1/2 md:border-none">
      <div className="relative">
        <nav className="w-full overflow-x-auto md:overflow-visible scrollbar-hide">
          <ul className="flex px-4 py-3 whitespace-nowrap md:flex-col md:p-0 md:space-x-0 md:space-y-3">
            <li className="text-sm uppercase">
              <a
                className="px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-orange-400 text-gray-700 text-orange-400"
                href="3d-models.html"
              >
                All
              </a>
            </li>

            <li className="text-sm uppercase">
              <a
                className="px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-orange-400 text-gray-700"
                href="category.html"
              >
                3D Printer
              </a>
            </li>

            <li className="text-sm uppercase">
              <a
                className="px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-orange-400 text-gray-700"
                href="category.html"
              >
                Art
              </a>
            </li>

            <li className="text-sm uppercase">
              <a
                className="px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-orange-400 text-gray-700"
                href="category.html"
              >
                Education
              </a>
            </li>

            <li className="text-sm uppercase">
              <a
                className="px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-orange-400 text-gray-700"
                href="category.html"
              >
                Fashion
              </a>
            </li>

            <li className="text-sm uppercase">
              <a
                className="px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-orange-400 text-gray-700"
                href="category.html"
              >
                Hobby & DIY
              </a>
            </li>

            <li className="text-sm uppercase">
              <a
                className="px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-orange-400 text-gray-700"
                href="category.html"
              >
                Household
              </a>
            </li>

            <li className="text-sm uppercase">
              <a
                className="px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-orange-400 text-gray-700"
                href="category.html"
              >
                Miniatures
              </a>
            </li>

            <li className="text-sm uppercase">
              <a
                className="px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-orange-400 text-gray-700"
                href="category.html"
              >
                Props & Cosplay
              </a>
            </li>

            <li className="text-sm uppercase">
              <a
                className="px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-orange-400 text-gray-700"
                href="category.html"
              >
                Tools
              </a>
            </li>

            <li className="text-sm uppercase">
              <a
                className="px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-orange-400 text-gray-700"
                href="category.html"
              >
                Toys & Games
              </a>
            </li>
          </ul>
        </nav>
        {/* <!--Fading edge/gradient for horizontal scroll hint on mobile--> */}
        <div className="absolute top-0 right-0 w-8 h-full pointer-events-none bg-gradient-to-l from-white to-transparent md:hidden" />
      </div>
    </aside>
  );
}
