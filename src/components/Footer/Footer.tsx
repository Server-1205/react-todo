export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white shadow-lg p-6">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0">
          <a href="/" className="flex items-center">
            <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
          </a>
        </div>
        <nav className="flex flex-wrap gap-4">
          <a
            href="/"
            className="transition-all duration-300 text-sm font-medium py-2 px-6 hover:text-blue-400 hover:bg-gray-800 border border-gray-700 rounded-lg"
          >
            Home
          </a>
          <a
            href="/about"
            className="transition-all duration-300 text-sm font-medium py-2 px-6 hover:text-blue-400 hover:bg-gray-800 border border-gray-700 rounded-lg"
          >
            About
          </a>
        </nav>
      </div>
    </footer>
  );
};
