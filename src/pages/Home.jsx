import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="min-h-screen px-4 py-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Profile Banner Section */}
        <div className="relative mb-6">
          <div className="h-32 md:h-48 bg-gradient-to-r from-[#9146ff] via-[#772ce8] to-[#2563eb] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-4 left-6 flex items-end gap-4">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-[#0e0e10] border-4 border-white overflow-hidden flex items-center justify-center">
                <img 
                  src={`${import.meta.env.BASE_URL}IMG_7594 (1).jpeg`} 
                  alt="Tom Mulamoottil" 
                  className="w-full h-full object-cover object-center object-[center_top] scale-110"
                />
              </div>
              <div className="pb-2">
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">Tom Mulamoottil</h1>
                <p className="text-gray-300 text-sm md:text-base">Software engineer intern at Hitachi</p>
                <p className="text-gray-400 text-xs md:text-sm">M.S. in Software Engineering, UMBC (Expected 2026)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-6">
          <div className="bg-[#0e0e10] rounded-lg p-4 border border-gray-800 text-center">
            <div className="text-2xl font-bold text-[#9146ff]">50+</div>
            <div className="text-xs text-gray-400 mt-1">Projects</div>
          </div>
          <div className="bg-[#0e0e10] rounded-lg p-4 border border-gray-800 text-center">
            <div className="text-2xl font-bold text-[#2563eb]">2026</div>
            <div className="text-xs text-gray-400 mt-1">Graduation</div>
          </div>
          <div className="bg-[#0e0e10] rounded-lg p-4 border border-gray-800 text-center">
            <div className="text-2xl font-bold text-white">100%</div>
            <div className="text-xs text-gray-400 mt-1">User-Focused</div>
          </div>
          <div className="hidden md:block bg-[#0e0e10] rounded-lg p-4 border border-gray-800 text-center">
            <a href="mailto:tomm1@umbc.edu" className="block hover:opacity-80 transition-opacity">
              <div className="text-sm font-medium text-[#9146ff] break-all">tomm1@umbc.edu</div>
              <div className="text-xs text-gray-400 mt-1">Email</div>
            </a>
          </div>
          <div className="hidden md:block bg-[#0e0e10] rounded-lg p-4 border border-gray-800 text-center">
            <div className="text-2xl font-bold text-yellow-500">Expert</div>
            <div className="text-xs text-gray-400 mt-1">Algorithms</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Featured Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Featured Project - Acquire AI */}
            <div className="bg-[#0e0e10] rounded-lg border border-gray-800 overflow-hidden">
              <div className="relative aspect-video bg-[#1a4a5c] flex items-center justify-center p-8 overflow-hidden">
                {/* Apple Maps-style background pattern */}
                <div className="absolute inset-0 opacity-30">
                  <svg className="w-full h-full" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
                    {/* Roads/Streets */}
                    <path d="M0,150 Q200,100 400,150 T800,150" stroke="#4a90a4" strokeWidth="2" fill="none" opacity="0.6"/>
                    <path d="M0,250 Q200,200 400,250 T800,250" stroke="#4a90a4" strokeWidth="2" fill="none" opacity="0.6"/>
                    <path d="M150,0 Q150,100 150,225 T150,450" stroke="#4a90a4" strokeWidth="2" fill="none" opacity="0.6"/>
                    <path d="M350,0 Q350,100 350,225 T350,450" stroke="#4a90a4" strokeWidth="2" fill="none" opacity="0.6"/>
                    <path d="M550,0 Q550,100 550,225 T550,450" stroke="#4a90a4" strokeWidth="2" fill="none" opacity="0.6"/>
                    <path d="M650,0 Q650,100 650,225 T650,450" stroke="#4a90a4" strokeWidth="2" fill="none" opacity="0.6"/>
                    
                    {/* Buildings/Blocks */}
                    <rect x="100" y="100" width="80" height="60" fill="#5aa5b8" opacity="0.3" rx="2"/>
                    <rect x="220" y="180" width="100" height="70" fill="#5aa5b8" opacity="0.3" rx="2"/>
                    <rect x="480" y="120" width="90" height="65" fill="#5aa5b8" opacity="0.3" rx="2"/>
                    <rect x="620" y="200" width="75" height="55" fill="#5aa5b8" opacity="0.3" rx="2"/>
                    <rect x="250" y="320" width="110" height="80" fill="#5aa5b8" opacity="0.3" rx="2"/>
                    <rect x="450" y="300" width="85" height="70" fill="#5aa5b8" opacity="0.3" rx="2"/>
                    
                    {/* Houses/Properties */}
                    {/* House 1 */}
                    <g transform="translate(180, 130)">
                      <path d="M0,20 L10,10 L20,20 L20,25 L0,25 Z" fill="#e8c4a0" opacity="0.7"/>
                      <rect x="5" y="20" width="10" height="10" fill="#d4a574" opacity="0.7"/>
                      <rect x="7" y="22" width="3" height="5" fill="#8b6f47" opacity="0.8"/>
                      <rect x="12" y="22" width="2" height="2" fill="#654321" opacity="0.6"/>
                      <polygon points="0,20 10,10 20,20" fill="#c49b6d" opacity="0.8"/>
                    </g>
                    
                    {/* House 2 */}
                    <g transform="translate(300, 200)">
                      <path d="M0,20 L10,10 L20,20 L20,25 L0,25 Z" fill="#e8c4a0" opacity="0.7"/>
                      <rect x="5" y="20" width="10" height="10" fill="#d4a574" opacity="0.7"/>
                      <rect x="7" y="22" width="3" height="5" fill="#8b6f47" opacity="0.8"/>
                      <rect x="12" y="22" width="2" height="2" fill="#654321" opacity="0.6"/>
                      <polygon points="0,20 10,10 20,20" fill="#c49b6d" opacity="0.8"/>
                    </g>
                    
                    {/* House 3 */}
                    <g transform="translate(520, 150)">
                      <path d="M0,20 L10,10 L20,20 L20,25 L0,25 Z" fill="#e8c4a0" opacity="0.7"/>
                      <rect x="5" y="20" width="10" height="10" fill="#d4a574" opacity="0.7"/>
                      <rect x="7" y="22" width="3" height="5" fill="#8b6f47" opacity="0.8"/>
                      <rect x="12" y="22" width="2" height="2" fill="#654321" opacity="0.6"/>
                      <polygon points="0,20 10,10 20,20" fill="#c49b6d" opacity="0.8"/>
                    </g>
                    
                    {/* House 4 */}
                    <g transform="translate(150, 280)">
                      <path d="M0,18 L9,9 L18,18 L18,23 L0,23 Z" fill="#e8c4a0" opacity="0.7"/>
                      <rect x="4" y="18" width="9" height="9" fill="#d4a574" opacity="0.7"/>
                      <rect x="6" y="20" width="3" height="4" fill="#8b6f47" opacity="0.8"/>
                      <polygon points="0,18 9,9 18,18" fill="#c49b6d" opacity="0.8"/>
                    </g>
                    
                    {/* House 5 */}
                    <g transform="translate(420, 280)">
                      <path d="M0,20 L10,10 L20,20 L20,25 L0,25 Z" fill="#e8c4a0" opacity="0.7"/>
                      <rect x="5" y="20" width="10" height="10" fill="#d4a574" opacity="0.7"/>
                      <rect x="7" y="22" width="3" height="5" fill="#8b6f47" opacity="0.8"/>
                      <rect x="12" y="22" width="2" height="2" fill="#654321" opacity="0.6"/>
                      <polygon points="0,20 10,10 20,20" fill="#c49b6d" opacity="0.8"/>
                    </g>
                    
                    {/* House 6 */}
                    <g transform="translate(680, 240)">
                      <path d="M0,18 L9,9 L18,18 L18,23 L0,23 Z" fill="#e8c4a0" opacity="0.7"/>
                      <rect x="4" y="18" width="9" height="9" fill="#d4a574" opacity="0.7"/>
                      <rect x="6" y="20" width="3" height="4" fill="#8b6f47" opacity="0.8"/>
                      <polygon points="0,18 9,9 18,18" fill="#c49b6d" opacity="0.8"/>
                    </g>
                    
                    {/* Location Pins/Markers */}
                    <g transform="translate(200, 180)">
                      <circle cx="0" cy="0" r="4" fill="#ff6b6b" opacity="0.9"/>
                      <path d="M0,0 L-3,8 L3,8 Z" fill="#ff6b6b" opacity="0.9"/>
                    </g>
                    <g transform="translate(380, 140)">
                      <circle cx="0" cy="0" r="4" fill="#ff6b6b" opacity="0.9"/>
                      <path d="M0,0 L-3,8 L3,8 Z" fill="#ff6b6b" opacity="0.9"/>
                    </g>
                    <g transform="translate(550, 220)">
                      <circle cx="0" cy="0" r="4" fill="#ff6b6b" opacity="0.9"/>
                      <path d="M0,0 L-3,8 L3,8 Z" fill="#ff6b6b" opacity="0.9"/>
                    </g>
                    <g transform="translate(280, 320)">
                      <circle cx="0" cy="0" r="4" fill="#4ecdc4" opacity="0.9"/>
                      <path d="M0,0 L-3,8 L3,8 Z" fill="#4ecdc4" opacity="0.9"/>
                    </g>
                    <g transform="translate(500, 340)">
                      <circle cx="0" cy="0" r="4" fill="#4ecdc4" opacity="0.9"/>
                      <path d="M0,0 L-3,8 L3,8 Z" fill="#4ecdc4" opacity="0.9"/>
                    </g>
                    
                    {/* Property Dots/Markers */}
                    <circle cx="240" cy="160" r="3" fill="#9146ff" opacity="0.8"/>
                    <circle cx="400" cy="190" r="3" fill="#9146ff" opacity="0.8"/>
                    <circle cx="480" cy="260" r="3" fill="#9146ff" opacity="0.8"/>
                    <circle cx="620" cy="180" r="3" fill="#9146ff" opacity="0.8"/>
                    <circle cx="160" cy="240" r="3" fill="#9146ff" opacity="0.8"/>
                    <circle cx="320" cy="270" r="3" fill="#9146ff" opacity="0.8"/>
                    <circle cx="580" cy="300" r="3" fill="#9146ff" opacity="0.8"/>
                    
                    {/* Green Spaces/Lawns */}
                    <ellipse cx="120" cy="160" rx="25" ry="20" fill="#5c8a4f" opacity="0.3"/>
                    <ellipse cx="450" cy="180" rx="30" ry="25" fill="#5c8a4f" opacity="0.3"/>
                    <ellipse cx="600" cy="250" rx="20" ry="18" fill="#5c8a4f" opacity="0.3"/>
                    <ellipse cx="280" cy="280" rx="35" ry="28" fill="#5c8a4f" opacity="0.3"/>
                    
                    {/* Water/Park features */}
                    <ellipse cx="700" cy="100" rx="60" ry="40" fill="#3d7a8c" opacity="0.2"/>
                    <path d="M50,350 Q150,330 250,350 Q350,370 450,350" stroke="#3d7a8c" strokeWidth="3" fill="none" opacity="0.2"/>
                  </svg>
                </div>
                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#9146ff]/10 via-transparent to-[#2563eb]/10"></div>
                
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    IN DEVELOPMENT
                  </span>
                </div>
                <div className="text-center max-w-2xl relative z-10 bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                  <div className="w-20 h-20 rounded-full bg-[#9146ff] flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">Acquire AI</h3>
                  <p className="text-lg text-gray-300 mb-4">
                    A real estate acquisition platform inspired by TerraScout, designed to help investors 
                    discover, analyze, and acquire properties with AI-powered insights and intelligent 
                    property scouting capabilities.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#9146ff]/20 text-[#9146ff] text-xs font-medium">Real Estate</span>
                    <span className="px-3 py-1 rounded-full bg-[#2563eb]/20 text-[#2563eb] text-xs font-medium">AI-Powered</span>
                    <span className="px-3 py-1 rounded-full bg-[#9146ff]/20 text-[#9146ff] text-xs font-medium">Property Scouting</span>
                    <span className="px-3 py-1 rounded-full bg-[#2563eb]/20 text-[#2563eb] text-xs font-medium">Investment Tools</span>
                  </div>
                  <p className="text-sm text-gray-400 italic">
                    Currently in active development - Building the future of property acquisition
                  </p>
                </div>
              </div>
              <div className="p-6 bg-[#0e0e10] border-t border-gray-800">
                <Link 
                  to="/casestudy"
                  className="block w-full px-6 py-3 bg-[#9146ff] hover:bg-[#772ce8] text-white rounded-lg font-medium transition-all duration-200 text-center"
                >
                  View Portfolio Case Study →
                </Link>
              </div>
            </div>

            {/* Recent Projects Grid */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#9146ff]"></span>
                Recent Projects
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <a 
                  href="https://devpost.com/software/digitext" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0e0e10] rounded-lg border border-gray-800 p-4 hover:border-[#9146ff]/50 transition-colors block"
                >
                  <div className="aspect-video bg-gradient-to-br from-[#003e52] to-[#005a73] rounded mb-3 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white mb-1">D</div>
                      <div className="text-xs text-white/80 font-medium">DEVPOST</div>
                    </div>
                  </div>
                  <h3 className="text-white font-semibold mb-1">DigiText</h3>
                  <p className="text-gray-400 text-sm">Devpost • Hackathon Winner 2025</p>
                </a>
                <a 
                  href="https://github.com/tom116" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0e0e10] rounded-lg border border-gray-800 p-4 hover:border-[#2563eb]/50 transition-colors block"
                >
                  <div className="aspect-video bg-gray-900 rounded mb-3 flex items-center justify-center">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" fill="#fff"/>
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold mb-1">GitHub Projects</h3>
                  <p className="text-gray-400 text-sm">Code • Open Source • 2025</p>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions Card */}
            <div className="bg-[#0e0e10] rounded-lg border border-gray-800 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link 
                  to="/about"
                  className="block w-full px-4 py-3 bg-[#2563eb] hover:bg-blue-600 text-white rounded-lg font-medium transition-all duration-200 text-center"
                >
                  About Me
                </Link>
                <a 
                  href={`${import.meta.env.BASE_URL}resume.pdf`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-all duration-200 text-center border border-gray-700"
                >
                  View Resume
                </a>
                <a 
                  href="https://www.linkedin.com/in/tom-mulamoottil-71620114b/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-all duration-200 border border-gray-700"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/tom116" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-all duration-200 border border-gray-700"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>

            {/* Skills/Expertise Card */}
            <div className="bg-[#0e0e10] rounded-lg border border-gray-800 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Expertise</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-[#9146ff]/20 text-[#9146ff] text-xs font-medium">UI/UX</span>
                <span className="px-3 py-1 rounded-full bg-[#2563eb]/20 text-[#2563eb] text-xs font-medium">React</span>
                <span className="px-3 py-1 rounded-full bg-[#9146ff]/20 text-[#9146ff] text-xs font-medium">Design</span>
                <span className="px-3 py-1 rounded-full bg-[#2563eb]/20 text-[#2563eb] text-xs font-medium">Code</span>
                <span className="px-3 py-1 rounded-full bg-[#9146ff]/20 text-[#9146ff] text-xs font-medium">UX Research</span>
              </div>
            </div>

            {/* Bio Card */}
            <div className="bg-[#0e0e10] rounded-lg border border-gray-800 p-6">
              <h3 className="text-lg font-bold text-white mb-3">About</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Passionate about creating intuitive user experiences through thoughtful interaction design, 
                combining software engineering expertise with user-centered design principles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
