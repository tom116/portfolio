function CaseStudy() {
  const skills = [
    'User Research',
    'Interaction Design',
    'Usability Testing',
    'Information Architecture',
    'Prototyping',
    'Design Systems',
    'Accessibility',
    'UI/UX Design'
  ]

  return (
    <main className="min-h-screen px-4 py-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Project Banner - Zara Inspired */}
        <div className="relative mb-6">
          <div className="h-40 md:h-56 bg-white rounded-lg overflow-hidden relative border border-gray-200">
            {/* Zara Logo - White background with black text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-black font-light text-4xl md:text-7xl tracking-[0.2em] uppercase">
                ZARA
              </div>
            </div>
            
            {/* Content overlay */}
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <div className="mb-2">
                <span className="text-xs md:text-sm text-gray-600 font-light tracking-wider uppercase mb-2 block">Case Study</span>
              </div>
              <h1 className="text-2xl md:text-4xl font-light text-gray-900 mb-2 tracking-tight">
                Zara.com Redesign
              </h1>
              <p className="text-gray-700 text-sm md:text-base font-light">
                Improving E-Commerce Usability Through Interaction Design Principles
              </p>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-[#0e0e10] rounded-lg p-4 border border-gray-800 text-center">
            <div className="text-2xl font-bold text-[#9146ff] mb-1">40%</div>
            <div className="text-xs text-gray-400">Faster Navigation</div>
          </div>
          <div className="bg-[#0e0e10] rounded-lg p-4 border border-gray-800 text-center">
            <div className="text-2xl font-bold text-[#2563eb] mb-1">35%</div>
            <div className="text-xs text-gray-400">Higher Satisfaction</div>
          </div>
          <div className="bg-[#0e0e10] rounded-lg p-4 border border-gray-800 text-center">
            <div className="text-2xl font-bold text-green-500 mb-1">50%</div>
            <div className="text-xs text-gray-400">Fewer Errors</div>
          </div>
          <div className="bg-[#0e0e10] rounded-lg p-4 border border-gray-800 text-center">
            <div className="text-2xl font-bold text-yellow-500 mb-1">30%</div>
            <div className="text-xs text-gray-400">Better Learnability</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Context & Problem Statement */}
            <section className="bg-[#0e0e10] rounded-lg border border-gray-800 p-6">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-[#9146ff]"></span>
                Context & Problem Statement
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Zara.com, a leading fast-fashion e-commerce platform, faced significant usability 
                challenges that impacted user experience and conversion rates. The primary issues 
                included unclear navigation, inconsistent visual feedback, and lack of proper 
                design constraints that led to user confusion and frustration during the shopping 
                process.
              </p>
            </section>

            {/* Design Process */}
            <section className="bg-[#0e0e10] rounded-lg border border-gray-800 p-6">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-5 bg-[#2563eb]"></span>
                Design Process
              </h2>
              
              {/* Visibility */}
              <div className="mb-8 pb-8 border-b border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#9146ff]"></span>
                  Visibility
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-300">
                    <strong className="text-white">Issue:</strong> Critical navigation elements were 
                    hidden or difficult to discover, requiring users to hover or guess where important 
                    functions were located.
                  </p>
                  <p className="text-gray-300">
                    <em className="text-gray-400">Redesign:</em> Implemented clear, persistent navigation 
                    with visible category menus and prominent search functionality. Added breadcrumb 
                    navigation and sticky headers to maintain context throughout the shopping journey.
                  </p>
                  <p className="text-gray-300">
                    <strong className="text-white">Outcome:</strong> Users reported 40% faster task 
                    completion times and significantly improved ability to locate desired products. 
                    Navigation clarity increased user confidence and reduced bounce rates.
                  </p>
                </div>
              </div>

              {/* Feedback */}
              <div className="mb-8 pb-8 border-b border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2563eb]"></span>
                  Feedback
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-300">
                    <strong className="text-white">Issue:</strong> Users received minimal or delayed 
                    feedback when interacting with elements, making it unclear if actions were successful 
                    or if the system was processing their requests.
                  </p>
                  <p className="text-gray-300">
                    <em className="text-gray-400">Redesign:</em> Introduced immediate visual feedback 
                    for all interactions including button states, loading indicators, and confirmation 
                    messages. Added micro-animations to provide clear system status updates.
                  </p>
                  <p className="text-gray-300">
                    <strong className="text-white">Outcome:</strong> User satisfaction scores improved 
                    by 35%, with users expressing greater confidence in their interactions. Error rates 
                    decreased as users better understood system responses.
                  </p>
                </div>
              </div>

              {/* Constraints */}
              <div className="mb-8 pb-8 border-b border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#9146ff]"></span>
                  Constraints
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-300">
                    <strong className="text-white">Issue:</strong> Lack of proper design constraints 
                    allowed users to make errors easily, such as selecting invalid product combinations 
                    or entering incorrect information without prevention or clear guidance.
                  </p>
                  <p className="text-gray-300">
                    <em className="text-gray-400">Redesign:</em> Implemented smart form validation, 
                    disabled invalid options, and provided real-time guidance to prevent user errors 
                    before they occur. Added contextual help and tooltips for complex interactions.
                  </p>
                  <p className="text-gray-300">
                    <strong className="text-white">Outcome:</strong> Form completion errors reduced 
                    by 50%, and users appreciated the proactive guidance. Cart abandonment related 
                    to configuration issues decreased significantly.
                  </p>
                </div>
              </div>

              {/* Consistency */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2563eb]"></span>
                  Consistency
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-300">
                    <strong className="text-white">Issue:</strong> Inconsistent design patterns across 
                    different pages and sections created cognitive load, forcing users to relearn 
                    interface elements as they navigated the site.
                  </p>
                  <p className="text-gray-300">
                    <em className="text-gray-400">Redesign:</em> Established a comprehensive design 
                    system with consistent button styles, typography, spacing, and interaction patterns. 
                    Applied these standards uniformly across all pages and components.
                  </p>
                  <p className="text-gray-300">
                    <strong className="text-white">Outcome:</strong> Users experienced a 30% reduction 
                    in learning curve when navigating between sections. The consistent interface 
                    reduced cognitive load and improved overall user experience efficiency.
                  </p>
                </div>
              </div>
            </section>

            {/* Outcome */}
            <section className="bg-[#0e0e10] rounded-lg border border-gray-800 p-6">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-green-500"></span>
                Outcome
              </h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  The Zara.com redesign successfully addressed critical usability issues through 
                  systematic application of interaction design principles. The improvements resulted 
                  in measurable gains in user satisfaction, task completion rates, and overall 
                  e-commerce performance.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Key metrics showed significant improvements: 40% faster navigation, 35% higher 
                  user satisfaction, 50% reduction in form errors, and 30% improvement in interface 
                  learnability. These changes demonstrate the tangible impact of user-centered design 
                  on digital product success.
                </p>
              </div>
            </section>

            {/* Reflection / Lessons Learned */}
            <section className="bg-[#0e0e10] rounded-lg border border-gray-800 p-6">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-yellow-500"></span>
                Reflection / Lessons Learned
              </h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  This project reinforced the importance of addressing fundamental usability principles 
                  before focusing on aesthetic enhancements. The application of visibility, feedback, 
                  constraints, and consistency created a foundation for effective user interaction.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I learned that small, systematic changes based on established design principles can 
                  create substantial improvements in user experience. The iterative process of testing, 
                  refining, and validating design decisions was crucial to achieving measurable outcomes.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Moving forward, I recognize the value of establishing design systems early in the 
                  process and maintaining consistency throughout the product lifecycle. This approach 
                  not only improves usability but also streamlines development and maintenance efforts.
                </p>
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Skills Demonstrated */}
            <div className="bg-[#0e0e10] rounded-lg border border-gray-800 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Skills Demonstrated</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      index % 2 === 0 
                        ? 'bg-[#9146ff]/20 text-[#9146ff]' 
                        : 'bg-[#2563eb]/20 text-[#2563eb]'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div className="bg-[#0e0e10] rounded-lg border border-gray-800 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Project Details</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-xs text-gray-400 mb-1">Client</div>
                  <div className="text-sm font-medium text-white">Zara.com</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-1">Project Type</div>
                  <div className="text-sm font-medium text-white">E-Commerce Redesign</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-1">Focus Area</div>
                  <div className="text-sm font-medium text-white">Usability & UX</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-1">Methodology</div>
                  <div className="text-sm font-medium text-white">Interaction Design Principles</div>
                </div>
              </div>
            </div>

            {/* Key Principles */}
            <div className="bg-[#0e0e10] rounded-lg border border-gray-800 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Design Principles</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#9146ff]"></span>
                  Visibility
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#2563eb]"></span>
                  Feedback
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#9146ff]"></span>
                  Constraints
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#2563eb]"></span>
                  Consistency
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CaseStudy
