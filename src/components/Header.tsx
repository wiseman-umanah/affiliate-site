export function Header() {

	return (
		<header className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-4 shadow-lg">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-purple-600 font-bold text-sm">⚡</span>
            </div>
            <h1 className="text-white font-bold text-xl">
              PropFirm<span className="text-cyan-300">Nation</span>
            </h1>
          </div>

          {/* Desktop Navigation
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#" className="text-white hover:text-cyan-300 transition-colors">
              Home
            </a>
            <a href="#" className="text-white hover:text-cyan-300 transition-colors">
              Firms
            </a>
            <a href="#" className="text-white hover:text-cyan-300 transition-colors">
              Brokers
            </a>
            <a href="#" className="text-white hover:text-cyan-300 transition-colors">
              Reviews
            </a>
          </nav> */}
        </div>
      </header>
	)
}