function About() {
  return (
    <main className="min-h-screen px-4 py-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Profile Banner */}
        <div className="relative mb-6">
          <div className="h-40 md:h-56 bg-gradient-to-r from-[#9146ff] via-[#772ce8] to-[#2563eb] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-6 left-6 flex items-end gap-6">
              {/* Profile Picture */}
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#0e0e10] border-4 border-white overflow-hidden flex items-center justify-center">
                  <img 
                    src={`${import.meta.env.BASE_URL}IMG_7594 (1).jpeg`} 
                    alt="Tom Mulamoottil" 
                    className="w-full h-full object-cover object-center object-[center_top] scale-110"
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-6 h-6 md:w-8 md:h-8 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              
              {/* Profile Info */}
              <div className="pb-2">
                <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">Tom Mulamoottil</h1>
                <p className="text-gray-300 text-sm md:text-base mb-1">Software Engineering Student • Interaction Designer</p>
                <p className="text-gray-400 text-xs md:text-sm">University of Maryland, Baltimore County (UMBC)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-[#0e0e10] rounded-lg p-4 border border-gray-800">
            <div className="text-2xl font-bold text-[#9146ff] mb-1">2026</div>
            <div className="text-xs text-gray-400">Expected Graduation</div>
          </div>
          <div className="bg-[#0e0e10] rounded-lg p-4 border border-gray-800">
            <div className="text-2xl font-bold text-[#2563eb] mb-1">M.S.</div>
            <div className="text-xs text-gray-400">Software Engineering</div>
          </div>
          <div className="bg-[#0e0e10] rounded-lg p-4 border border-gray-800">
            <div className="text-2xl font-bold text-green-500 mb-1">At Work</div>
            <div className="text-xs text-gray-400">Status</div>
          </div>
          <div className="bg-[#0e0e10] rounded-lg p-4 border border-gray-800">
            <div className="text-2xl font-bold text-yellow-500 mb-1">Expert</div>
            <div className="text-xs text-gray-400">Algorithms</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Bio Card */}
            <div className="bg-[#0e0e10] rounded-lg border border-gray-800 p-6">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-[#9146ff]"></span>
                About
              </h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  I'm a graduate student pursuing my Master's in Software Engineering at the 
                  University of Maryland, Baltimore County (UMBC), with an expected graduation in 2026. 
                  My academic journey combines technical expertise with a deep passion for creating 
                  intuitive, user-centered digital experiences.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My experience spans both software development and interaction design, allowing me 
                  to bridge the gap between engineering and user experience. I'm particularly interested 
                  in usability research and AI-backed design solutions that enhance how users interact 
                  with digital products.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Through my work, I aim to create designs that are not only visually appealing but 
                  also highly functional and accessible, ensuring that technology serves users effectively 
                  and intuitively.
                </p>
              </div>
            </div>

            {/* Education Card */}
            <div className="bg-[#0e0e10] rounded-lg border border-gray-800 p-6">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-[#2563eb]"></span>
                Education
              </h2>
              <div className="space-y-4">
                <div className="border-l-2 border-[#9146ff] pl-4">
                  <h3 className="text-lg font-semibold text-white mb-1">Master of Science in Software Engineering</h3>
                  <p className="text-gray-400 text-sm mb-1">University of Maryland, Baltimore County</p>
                  <p className="text-gray-500 text-xs">Expected 2026</p>
                </div>
              </div>
            </div>

            {/* Experience Card */}
            <div className="bg-[#0e0e10] rounded-lg border border-gray-800 p-6">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-[#9146ff]"></span>
                Experience
              </h2>
              <div className="space-y-6">
                {/* Current Role */}
                <div className="border-l-2 border-[#9146ff] pl-4">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">AI Engineer Intern</h3>
                      <p className="text-gray-400 text-sm mb-1">Hitachi</p>
                    </div>
                    <span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-medium">Current</span>
                  </div>
                  <p className="text-gray-500 text-xs mb-2">2025 - Present</p>
                </div>

                {/* Previous Role */}
                <div className="border-l-2 border-[#9146ff] pl-4">
                  <h3 className="text-lg font-semibold text-white mb-1">Software Engineer</h3>
                  <p className="text-gray-400 text-sm mb-1">Qburst</p>
                  <p className="text-gray-500 text-xs">2021 - 2024</p>
                </div>
              </div>
            </div>

            {/* Achievements Card */}
            <div className="bg-[#0e0e10] rounded-lg border border-gray-800 p-6">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-yellow-500"></span>
                Achievements
              </h2>
              <div className="space-y-4">
                <div className="border-l-2 border-yellow-500 pl-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">First Place Winner</h3>
                      <p className="text-gray-400 text-sm mb-1">MorganHacks 2025</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-500 text-xs font-bold">🏆 WINNER</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">
                    <strong className="text-white">DigiText:</strong> A React + Gemini-powered application that converts 
                    handwritten notes and audio recordings into Markdown + KaTeX format for digital note-taking apps 
                    like Joplin and Obsidian.
                  </p>
                  <a 
                    href="https://devpost.com/software/digitext" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#9146ff] hover:text-[#772ce8] transition-colors"
                  >
                    View Project on Devpost
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Skills & Expertise */}
            <div className="bg-[#0e0e10] rounded-lg border border-gray-800 p-6">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-[#9146ff]"></span>
                Skills & Expertise
              </h2>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-[#9146ff]/20 text-[#9146ff] text-sm font-medium">React</span>
                <span className="px-3 py-1 rounded-full bg-[#2563eb]/20 text-[#2563eb] text-sm font-medium">JavaScript</span>
                <span className="px-3 py-1 rounded-full bg-[#9146ff]/20 text-[#9146ff] text-sm font-medium">TypeScript</span>
                <span className="px-3 py-1 rounded-full bg-[#2563eb]/20 text-[#2563eb] text-sm font-medium">NestJS</span>
                <span className="px-3 py-1 rounded-full bg-[#9146ff]/20 text-[#9146ff] text-sm font-medium">LLMs</span>
                <span className="px-3 py-1 rounded-full bg-[#2563eb]/20 text-[#2563eb] text-sm font-medium">Prompt Engineering</span>
                <span className="px-3 py-1 rounded-full bg-[#9146ff]/20 text-[#9146ff] text-sm font-medium">AI/ML</span>
                <span className="px-3 py-1 rounded-full bg-[#2563eb]/20 text-[#2563eb] text-sm font-medium">Gemini API</span>
                <span className="px-3 py-1 rounded-full bg-[#9146ff]/20 text-[#9146ff] text-sm font-medium">Machine Learning</span>
                <span className="px-3 py-1 rounded-full bg-[#2563eb]/20 text-[#2563eb] text-sm font-medium">Natural Language Processing</span>
                <span className="px-3 py-1 rounded-full bg-[#9146ff]/20 text-[#9146ff] text-sm font-medium">UI/UX Design</span>
                <span className="px-3 py-1 rounded-full bg-[#2563eb]/20 text-[#2563eb] text-sm font-medium">User Research</span>
                <span className="px-3 py-1 rounded-full bg-[#9146ff]/20 text-[#9146ff] text-sm font-medium">Interaction Design</span>
                <span className="px-3 py-1 rounded-full bg-[#2563eb]/20 text-[#2563eb] text-sm font-medium">Prototyping</span>
                <span className="px-3 py-1 rounded-full bg-[#9146ff]/20 text-[#9146ff] text-sm font-medium">Figma</span>
                <span className="px-3 py-1 rounded-full bg-[#2563eb]/20 text-[#2563eb] text-sm font-medium">TailwindCSS</span>
                <span className="px-3 py-1 rounded-full bg-[#9146ff]/20 text-[#9146ff] text-sm font-medium">Vite</span>
                <span className="px-3 py-1 rounded-full bg-[#2563eb]/20 text-[#2563eb] text-sm font-medium">Git</span>
                <span className="px-3 py-1 rounded-full bg-[#9146ff]/20 text-[#9146ff] text-sm font-medium">Accessibility</span>
                <span className="px-3 py-1 rounded-full bg-[#2563eb]/20 text-[#2563eb] text-sm font-medium">AI Integration</span>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-[#0e0e10] rounded-lg border border-gray-800 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Get in Touch</h3>
              <div className="space-y-3">
                <a 
                  href="mailto:tomm1@umbc.edu"
                  className="flex items-center gap-3 p-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#2563eb]/20 flex items-center justify-center group-hover:bg-[#2563eb]/30 transition-colors">
                    <svg className="w-5 h-5 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="text-sm font-medium text-white truncate">tomm1@umbc.edu</div>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/tom-mulamoottil-71620114b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#9146ff]/20 flex items-center justify-center group-hover:bg-[#9146ff]/30 transition-colors">
                    <svg className="w-5 h-5 text-[#9146ff]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-gray-400">LinkedIn</div>
                    <div className="text-sm font-medium text-white truncate">tom-mulamoottil</div>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/tom116"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-700/50 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-gray-400">GitHub</div>
                    <div className="text-sm font-medium text-white truncate">tom116</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-[#0e0e10] rounded-lg border border-gray-800 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <a 
                  href={`${import.meta.env.BASE_URL}resume.pdf`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#2563eb] hover:bg-blue-600 text-white rounded-lg font-medium transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Resume
                </a>
                <a 
                  href="/casestudy"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#9146ff] hover:bg-[#772ce8] text-white rounded-lg font-medium transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View Case Study
                </a>
              </div>
            </div>

            {/* Interests Card */}
            <div className="bg-[#0e0e10] rounded-lg border border-gray-800 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Interests</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#9146ff]"></span>
                  Usability Research
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#2563eb]"></span>
                  AI-Backed Design
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#9146ff]"></span>
                  Interaction Design
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#2563eb]"></span>
                  User Experience
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#9146ff]"></span>
                  Frontend Development
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About
