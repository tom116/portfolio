import { Link, useLocation } from 'react-router-dom'
import Footer from './Footer'

function Layout({ children }) {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-[#0e0e10] border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-[900px] mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-bold text-white hover:text-[#2563eb] transition-colors">
              Tom Mulamoottil
            </Link>
            <div className="flex gap-6">
              <Link 
                to="/" 
                className={`text-sm font-medium transition-colors ${
                  location.pathname === '/' 
                    ? 'text-[#2563eb]' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`text-sm font-medium transition-colors ${
                  location.pathname === '/about' 
                    ? 'text-[#2563eb]' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                About
              </Link>
              <Link 
                to="/casestudy" 
                className={`text-sm font-medium transition-colors ${
                  location.pathname === '/casestudy' 
                    ? 'text-[#2563eb]' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Case Study
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Layout

