export function Header() {

	return (
		<header className="bg-black fixed left-0 right-0 h-14 top-0 z-[10] px-4 py-4 shadow-lg">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <h1 className="text-white font-bold text-xl">
              Future <span className="text-cyan-300">Trades</span>
            </h1>
          </div>
        </div>
      </header>
	)
}