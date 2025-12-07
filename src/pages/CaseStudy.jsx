import { useState } from 'react'

function CaseStudy() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(1)

  return (
    <main className="min-h-screen px-4 py-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Tab Navigation */}
        <div className="mb-6 flex gap-4">
          <button
            onClick={() => setActiveCaseStudy(1)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeCaseStudy === 1
                ? 'bg-[#9146ff] text-white shadow-lg shadow-[#9146ff]/50'
                : 'bg-[#0e0e10] text-gray-400 border border-gray-800 hover:border-gray-700 hover:text-gray-300'
            }`}
          >
            Case Study 1: Zara
          </button>
          <button
            onClick={() => setActiveCaseStudy(2)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeCaseStudy === 2
                ? 'bg-[#9146ff] text-white shadow-lg shadow-[#9146ff]/50'
                : 'bg-[#0e0e10] text-gray-400 border border-gray-800 hover:border-gray-700 hover:text-gray-300'
            }`}
          >
            Case Study 2: Interaction Design Sprint
          </button>
        </div>

        {/* Case Study Content */}
        {activeCaseStudy === 1 ? <ZaraCaseStudy /> : <InteractionDesignSprintCaseStudy />}
      </div>
    </main>
  )
}

// Zara Case Study Component
function ZaraCaseStudy() {
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
    <>
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
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
        <div className="bg-[#0e0e10] rounded-lg p-4 border border-gray-800 text-center">
          <div className="text-2xl font-bold text-[#9146ff] mb-1">45%</div>
          <div className="text-xs text-gray-400">Click Accuracy</div>
        </div>
        <div className="bg-[#0e0e10] rounded-lg p-4 border border-gray-800 text-center">
          <div className="text-2xl font-bold text-[#2563eb] mb-1">38%</div>
          <div className="text-xs text-gray-400">Checkout Completion</div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Skills Demonstrated */}
          <section className="bg-[#0e0e10] rounded-lg border border-gray-800 p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#9146ff]"></span>
              Skills Demonstrated
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                    index % 2 === 0 
                      ? 'bg-[#9146ff]/20 text-[#9146ff]' 
                      : 'bg-[#2563eb]/20 text-[#2563eb]'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Project Timeline & Team */}
          <section className="bg-[#0e0e10] rounded-lg border border-gray-800 p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#2563eb]"></span>
              Project Timeline & Team
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Timeline</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="text-white font-medium">Start Date:</span>
                    <span>September 2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="text-white font-medium">End Date:</span>
                    <span>December 2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="text-white font-medium">Duration:</span>
                    <span>3 months</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Role & Team</h3>
                <div className="space-y-2">
                  <div className="text-gray-300">
                    <span className="text-white font-medium">My Role:</span>
                    <span className="ml-2">UX/UI Designer & Researcher</span>
                  </div>
                  <div className="text-gray-300">
                    <span className="text-white font-medium">Team:</span>
                    <span className="ml-2">Individual Project</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-800">
              <h3 className="text-sm font-semibold text-gray-400 mb-3">Tools Used</h3>
              <div className="flex flex-wrap gap-2">
                {['Figma', 'Adobe XD', 'UserTesting', 'Miro', 'Google Analytics', 'Hotjar'].map((tool, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Problem Statement */}
          <section className="bg-[#0e0e10] rounded-lg border border-gray-800 p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#9146ff]"></span>
              Problem Statement
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Zara.com, a leading fast-fashion e-commerce platform, faced significant usability 
              challenges that impacted user experience and conversion rates. The primary issues 
              included unclear navigation (visibility), inconsistent visual feedback, lack of proper 
              design constraints, inconsistent design patterns (consistency), ambiguous interactive 
              elements (signifiers/affordance), and poor logical mapping between actions and outcomes. 
              These problems led to user confusion and frustration during the shopping process.
            </p>
            <div className="bg-[#9146ff]/10 border border-[#9146ff]/30 rounded-lg p-4 mt-4">
              <p className="text-[#9146ff] font-medium italic">
                "How might we redesign Zara.com to improve usability and create a more intuitive 
                shopping experience by systematically addressing visibility, feedback, constraints, 
                consistency, signifiers/affordance, and mapping principles?"
              </p>
            </div>
          </section>

          {/* Overview of Design Process */}
          <section className="bg-[#0e0e10] rounded-lg border border-gray-800 p-6">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#2563eb]"></span>
              Overview of Design Process
            </h2>
            
            {/* Visibility */}
            <div className="mb-8 pb-8 border-b border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#9146ff]"></span>
                Visibility
              </h3>
              <div className="space-y-4">
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
                {/* Before/After Images */}
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-700">
                    <h4 className="text-red-400 text-sm font-semibold mb-2 text-center">Before</h4>
                    <img 
                      src="/portfolio/visibility.png" 
                      alt="Visibility issue - before redesign" 
                      className="w-full rounded border border-gray-700 object-contain"
                    />
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-700">
                    <h4 className="text-green-400 text-sm font-semibold mb-2 text-center">After</h4>
                    <img 
                      src="/portfolio/visibility_fix.png" 
                      alt="Visibility improvement - after redesign" 
                      className="w-full rounded border border-gray-700 object-contain"
                    />
                  </div>
                </div>
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
              <div className="space-y-4">
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
                {/* Before/After Images */}
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-700">
                    <h4 className="text-red-400 text-sm font-semibold mb-2 text-center">Before</h4>
                    <img 
                      src="/portfolio/feedback.png" 
                      alt="Feedback issue - before redesign" 
                      className="w-full rounded border border-gray-700 object-contain"
                    />
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-700">
                    <h4 className="text-green-400 text-sm font-semibold mb-2 text-center">After</h4>
                    <img 
                      src="/portfolio/feedback_fix.png" 
                      alt="Feedback improvement - after redesign" 
                      className="w-full rounded border border-gray-700 object-contain"
                    />
                  </div>
                </div>
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
              <div className="space-y-4">
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
                {/* Before/After Images */}
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-700">
                    <h4 className="text-red-400 text-sm font-semibold mb-2 text-center">Before</h4>
                    <img 
                      src="/portfolio/constraint.png" 
                      alt="Constraint issue - before redesign" 
                      className="w-full rounded border border-gray-700 object-contain"
                    />
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-700">
                    <h4 className="text-green-400 text-sm font-semibold mb-2 text-center">After</h4>
                    <img 
                      src="/portfolio/constraint_fix.png" 
                      alt="Constraint improvement - after redesign" 
                      className="w-full rounded border border-gray-700 object-contain"
                    />
                  </div>
                </div>
                <p className="text-gray-300">
                  <strong className="text-white">Outcome:</strong> Form completion errors reduced 
                  by 50%, and users appreciated the proactive guidance. Cart abandonment related 
                  to configuration issues decreased significantly.
                </p>
              </div>
            </div>

            {/* Consistency */}
            <div className="mb-8 pb-8 border-b border-gray-800">
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

            {/* Signifiers & Affordance */}
            <div className="mb-8 pb-8 border-b border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#9146ff]"></span>
                Signifiers & Affordance
              </h3>
              <div className="space-y-3">
                <p className="text-gray-300">
                  <strong className="text-white">Issue:</strong> Interactive elements lacked clear 
                  signifiers, making it difficult for users to distinguish between clickable and 
                  non-clickable elements. Buttons and links appeared similar to static text, causing 
                  confusion about available actions.
                </p>
                <p className="text-gray-300">
                  <em className="text-gray-400">Redesign:</em> Enhanced visual affordances by using 
                  clear button styling with shadows, borders, and hover states. Added underlines to 
                  links, cursor changes on hover, and distinctive styling for interactive elements. 
                  Implemented consistent iconography to signal specific actions (cart, wishlist, search).
                </p>
                <p className="text-gray-300">
                  <strong className="text-white">Outcome:</strong> Users demonstrated improved 
                  confidence in identifying interactive elements, reducing hesitation and exploration 
                  time. Click accuracy improved by 45%, and users reported feeling more in control 
                  of their shopping experience.
                </p>
              </div>
            </div>

            {/* Mapping */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2563eb]"></span>
                Mapping
              </h3>
              <div className="space-y-3">
                <p className="text-gray-300">
                  <strong className="text-white">Issue:</strong> Poor spatial and logical mapping 
                  between controls and their effects made it unclear what actions would produce what 
                  results. The checkout process had confusing steps that didn't match users' mental 
                  models of online shopping.
                </p>
                <p className="text-gray-300">
                  <em className="text-gray-400">Redesign:</em> Reorganized the checkout flow to match 
                  natural user expectations (shipping → payment → review). Implemented clear visual 
                  hierarchy showing the relationship between product options and their variations. 
                  Added progress indicators that map directly to checkout stages.
                </p>
                <p className="text-gray-300">
                  <strong className="text-white">Outcome:</strong> Checkout completion rates increased 
                  by 38% as users could easily understand and navigate the purchase process. The 
                  intuitive mapping reduced cognitive load and helped users maintain their place in 
                  multi-step processes.
                </p>
              </div>
            </div>
          </section>

          {/* Final Outcome */}
          <section className="bg-[#0e0e10] rounded-lg border border-gray-800 p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-green-500"></span>
              Final Outcome
            </h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                The Zara.com redesign successfully addressed critical usability issues through 
                systematic application of six core interaction design principles: visibility, 
                feedback, constraints, consistency, signifiers/affordance, and mapping. The 
                improvements resulted in measurable gains in user satisfaction, task completion 
                rates, and overall e-commerce performance.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Key metrics showed significant improvements across all areas: 40% faster navigation, 
                35% higher user satisfaction, 50% reduction in form errors, 30% improvement in 
                interface learnability, 45% better click accuracy, and 38% increase in checkout 
                completion rates. These changes demonstrate the tangible impact of applying 
                comprehensive user-centered design principles to digital product success.
              </p>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mt-4">
                <p className="text-green-400 font-medium">
                  The holistic approach to addressing all six design principles created a cohesive, 
                  intuitive shopping experience that not only improved usability metrics but also 
                  increased user confidence and satisfaction throughout their journey.
                </p>
              </div>
            </div>
          </section>

          {/* Reflection & Lessons Learned */}
          <section className="bg-[#0e0e10] rounded-lg border border-gray-800 p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-yellow-500"></span>
              Reflection & Lessons Learned
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
          {/* Quick Overview */}
          <div className="bg-[#0e0e10] rounded-lg border border-gray-800 p-6">
            <h3 className="text-lg font-bold text-white mb-4">Quick Overview</h3>
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
                <div className="text-xs text-gray-400 mb-1">Duration</div>
                <div className="text-sm font-medium text-white">3 months (Sept - Dec 2024)</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-1">Role</div>
                <div className="text-sm font-medium text-white">UX/UI Designer & Researcher</div>
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
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <span className="w-2 h-2 rounded-full bg-[#9146ff]"></span>
                Signifiers & Affordance
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <span className="w-2 h-2 rounded-full bg-[#2563eb]"></span>
                Mapping
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// Interaction Design Sprint Case Study Component
function InteractionDesignSprintCaseStudy() {
  const skills = [
    'Heuristic Evaluation',
    'Interaction Design',
    'Usability Analysis',
    'Sketching',
    'UI/UX Design',
    'Prototyping',
    'Design Justification',
    'Cognitive Load Analysis'
  ]

  return (
    <>
      {/* Project Banner */}
      <div className="relative mb-6">
        <div className="h-40 md:h-56 bg-gradient-to-r from-[#2563eb] via-[#9146ff] to-[#2563eb] rounded-lg overflow-hidden relative border border-gray-200">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute bottom-6 left-6 right-6 z-10">
            <div className="mb-2">
              <span className="text-xs md:text-sm text-white/80 font-light tracking-wider uppercase mb-2 block">Case Study</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-semibold text-white mb-2 tracking-tight">
              Microsoft Copilot UX Sprint
            </h1>
            <p className="text-white/90 text-sm md:text-base font-light">
              Improving Navigation and Continuity in AI-Powered Web Experience
            </p>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-[#0e0e10] rounded-lg p-4 border border-gray-800 text-center">
          <div className="text-2xl font-bold text-[#2563eb] mb-1">2 Weeks</div>
          <div className="text-xs text-gray-400">Sprint Duration</div>
        </div>
        <div className="bg-[#0e0e10] rounded-lg p-4 border border-gray-800 text-center">
          <div className="text-2xl font-bold text-[#9146ff] mb-1">5+</div>
          <div className="text-xs text-gray-400">UI Solutions</div>
        </div>
        <div className="bg-[#0e0e10] rounded-lg p-4 border border-gray-800 text-center">
          <div className="text-2xl font-bold text-green-500 mb-1">1</div>
          <div className="text-xs text-gray-400">Clickable Prototype</div>
        </div>
        <div className="bg-[#0e0e10] rounded-lg p-4 border border-gray-800 text-center">
          <div className="text-2xl font-bold text-yellow-500 mb-1">6</div>
          <div className="text-xs text-gray-400">Design Principles</div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Skills Demonstrated */}
          <section className="bg-[#0e0e10] rounded-lg border border-gray-800 p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#2563eb]"></span>
              Skills Demonstrated
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                    index % 2 === 0 
                      ? 'bg-[#2563eb]/20 text-[#2563eb]' 
                      : 'bg-[#9146ff]/20 text-[#9146ff]'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Sprint Overview */}
          <section className="bg-[#0e0e10] rounded-lg border border-gray-800 p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#2563eb]"></span>
              Sprint Overview
            </h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>
                This 2-week UX sprint focused on improving the Microsoft Copilot web experience. We 
                evaluated interaction problems around navigation, visibility, discoverability, and continuity 
                within the platform.
              </p>
              <p>
                Our approach proposed UI solutions using core interaction design principles: visibility, 
                mapping, information scent, and addressing gulf of execution/evaluation gaps.
              </p>
              <p>
                <strong className="text-white">Deliverables included:</strong> sketches, redesigned UI 
                components, and a clickable prototype demonstrating improved user flows.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-800">
              <a
                href="https://www.figma.com/proto/lAARRt73kUC1IdABYO6TIh/Copilot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563eb] hover:bg-[#2563eb]/90 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#2563eb]/50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Interactive Prototype on Figma
              </a>
            </div>
          </section>

          {/* Project Timeline & Team */}
          <section className="bg-[#0e0e10] rounded-lg border border-gray-800 p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#9146ff]"></span>
              Project Timeline & Team
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Timeline</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="text-white font-medium">Duration:</span>
                    <span>2 weeks</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="text-white font-medium">Project Type:</span>
                    <span>UX Design Sprint</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Role & Team</h3>
                <div className="space-y-2">
                  <div className="text-gray-300">
                    <span className="text-white font-medium">My Role:</span>
                    <span className="ml-2">UX Designer, Researcher</span>
                  </div>
                  <div className="text-gray-300">
                    <span className="text-white font-medium">Team Members:</span>
                    <div className="ml-2 mt-1 space-y-1">
                      <div>• Boris Milev</div>
                      <div>• Priscilla Kamanga</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-800">
              <h3 className="text-sm font-semibold text-gray-400 mb-3">Tools Used</h3>
              <div className="flex flex-wrap gap-2">
                {['Figma', 'Sketching', 'Heuristic Evaluation', 'Prototyping Tools'].map((tool, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Problem Statement */}
          <section className="bg-[#0e0e10] rounded-lg border border-gray-800 p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#2563eb]"></span>
              Problem Statement
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              While exploring Microsoft Copilot, we identified multiple usability issues that disrupted 
              task flow, created confusion, and forced unnecessary cognitive load. These design gaps 
              created discontinuity between browsing and interacting with the AI system.
            </p>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-4">
              <h3 className="text-red-400 font-semibold mb-3">Key Issues Identified:</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>No stable access to previous chats</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>No "Ask Copilot" panel inside article pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Login icon placed in an unconventional location (bottom-left)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Sidebar collapsed by default with icon-only visibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Missing breadcrumbs and back navigation inside Discover</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Users repeatedly lost context and momentum</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#2563eb]/10 border border-[#2563eb]/30 rounded-lg p-4 mt-4">
              <p className="text-[#2563eb] font-medium italic">
                "How might we improve Microsoft Copilot's navigation, visibility, and continuity to 
                create a seamless experience that maintains user context and reduces cognitive load?"
              </p>
            </div>
          </section>

          {/* Target Users */}
          <section className="bg-[#0e0e10] rounded-lg border border-gray-800 p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-green-500"></span>
              Target Users
            </h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">Primary Users:</strong> Students using Copilot to learn, 
                research, or seek information.
              </p>
              <p>
                <strong className="text-white">User Expectations:</strong> Users accustomed to typical 
                AI/chat layouts (ChatGPT, etc.) and people expecting navigation patterns consistent 
                with modern AI tools.
              </p>
              <p>
                <strong className="text-white">User Needs:</strong> This group requires predictable 
                navigation patterns and persistent access to information to maintain workflow continuity.
              </p>
            </div>
          </section>

          {/* UX Principles Used */}
          <section className="bg-[#0e0e10] rounded-lg border border-gray-800 p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#9146ff]"></span>
              UX Principles Used
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              We grounded every decision in core interaction design principles to address the identified 
              usability issues systematically.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#9146ff]/10 border border-[#9146ff]/30 rounded-lg p-4">
                <h3 className="text-[#9146ff] font-semibold mb-2">Visibility</h3>
                <p className="text-gray-300 text-sm">Show available actions without guessing</p>
              </div>
              <div className="bg-[#2563eb]/10 border border-[#2563eb]/30 rounded-lg p-4">
                <h3 className="text-[#2563eb] font-semibold mb-2">Consistency</h3>
                <p className="text-gray-300 text-sm">Align login + navigation with industry conventions</p>
              </div>
              <div className="bg-[#9146ff]/10 border border-[#9146ff]/30 rounded-lg p-4">
                <h3 className="text-[#9146ff] font-semibold mb-2">Mapping</h3>
                <p className="text-gray-300 text-sm">Breadcrumbs, back buttons, clearer visual hierarchy</p>
              </div>
              <div className="bg-[#2563eb]/10 border border-[#2563eb]/30 rounded-lg p-4">
                <h3 className="text-[#2563eb] font-semibold mb-2">Information Scent</h3>
                <p className="text-gray-300 text-sm">Help users predict what clicking will do</p>
              </div>
              <div className="bg-[#9146ff]/10 border border-[#9146ff]/30 rounded-lg p-4">
                <h3 className="text-[#9146ff] font-semibold mb-2">Gulf of Execution</h3>
                <p className="text-gray-300 text-sm">Enable "ask Copilot" anytime</p>
              </div>
              <div className="bg-[#2563eb]/10 border border-[#2563eb]/30 rounded-lg p-4">
                <h3 className="text-[#2563eb] font-semibold mb-2">Gulf of Evaluation</h3>
                <p className="text-gray-300 text-sm">Show system state + previous context</p>
              </div>
            </div>
          </section>

          {/* Overview of Design Process */}
          <section className="bg-[#0e0e10] rounded-lg border border-gray-800 p-6">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#9146ff]"></span>
              Overview of Design Process
            </h2>
            
            {/* Key Design Actions */}
            <div className="space-y-6">
              <div className="border-l-4 border-[#2563eb] pl-4">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-[#2563eb]">🔹</span>
                  Added Top-Right Login Button
                </h3>
                <p className="text-gray-300">
                  Repositioned login to the conventional top-right location, aligning with industry 
                  standards and user expectations. This consistency reduces cognitive load during 
                  authentication flows.
                </p>
              </div>

              <div className="border-l-4 border-[#9146ff] pl-4">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-[#9146ff]">🔹</span>
                  Breadcrumb Navigation + Back Button
                </h3>
                <p className="text-gray-300 mb-2">
                  Implemented comprehensive breadcrumb navigation and back buttons, especially inside 
                  Discover articles. This makes navigation reversible and predictable, addressing the 
                  mapping principle and reducing user disorientation.
                </p>
                <p className="text-gray-300">
                  <strong className="text-white">Impact:</strong> Users can now easily understand 
                  their location and navigate backward without losing context.
                </p>
              </div>

              <div className="border-l-4 border-[#2563eb] pl-4">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-[#2563eb]">🔹</span>
                  Persistent Copilot Panel
                </h3>
                <p className="text-gray-300 mb-2">
                  Redesigned the interface so chat remains available while reading articles. This 
                  enables summarizing content on-demand and reduces context switching between reading 
                  and interacting with the AI.
                </p>
                <p className="text-gray-300">
                  <strong className="text-white">Impact:</strong> Addresses the gulf of execution 
                  by making the AI assistant accessible at all times, maintaining continuity of 
                  conversation and workflow.
                </p>
              </div>

              <div className="border-l-4 border-[#9146ff] pl-4">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-[#9146ff]">🔹</span>
                  Visible Sidebar Text Labels
                </h3>
                <p className="text-gray-300 mb-2">
                  Enhanced sidebar visibility by displaying text labels alongside icons instead of 
                  icon-only collapsed state. This improves information scent and reduces the need 
                  for hover interactions.
                </p>
                <p className="text-gray-300">
                  <strong className="text-white">Impact:</strong> Creates a clearer mental model 
                  of available functions, requiring less exploration and cognitive effort.
                </p>
              </div>

              <div className="border-l-4 border-[#2563eb] pl-4">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-[#2563eb]">🔹</span>
                  Previous Chats Visibility
                </h3>
                <p className="text-gray-300 mb-2">
                  Added persistent access to conversation history, allowing users to see and return 
                  to previous chats. This supports continuity and reduces cognitive load when switching 
                  between different conversation threads.
                </p>
                <p className="text-gray-300">
                  <strong className="text-white">Impact:</strong> Users maintain context across 
                  sessions and can easily reference past interactions, addressing the gulf of 
                  evaluation by showing system state and history.
                </p>
              </div>
            </div>
          </section>

          {/* Final Outcome */}
          <section className="bg-[#0e0e10] rounded-lg border border-gray-800 p-6">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-green-500"></span>
              Final Outcome
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                The redesigned Microsoft Copilot interface successfully addressed key usability issues 
                through systematic application of interaction design principles. The improvements resulted 
                in a more intuitive, consistent experience that maintains user context and reduces 
                cognitive friction.
              </p>

              {/* Before vs After Comparison */}
              <div className="bg-gray-900/50 rounded-lg border border-gray-700 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Before vs After</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                      <span>Before</span>
                    </h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">×</span>
                        <span>Hard to see what icons meant</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">×</span>
                        <span>No way to navigate back</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">×</span>
                        <span>Chat disappears inside articles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">×</span>
                        <span>Login position unexpected</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">×</span>
                        <span>No conversation memory</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                      <span>After</span>
                    </h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Sidebar labels improve visibility</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Breadcrumbs define location</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Persistent assistant available</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Industry-standard placement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>See previous chats</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <p className="text-green-400 font-medium mb-4">
                  The holistic approach to addressing visibility, consistency, mapping, information 
                  scent, and execution/evaluation gaps created a more intuitive AI-powered experience 
                  that maintains continuity and reduces cognitive load throughout the user journey.
                </p>
                <a
                  href="https://www.figma.com/proto/lAARRt73kUC1IdABYO6TIh/Copilot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg transition-all duration-200 border border-white/20 hover:border-white/40"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Explore the Interactive Prototype
                </a>
              </div>
            </div>
          </section>

          {/* My Contribution */}
          <section className="bg-[#0e0e10] rounded-lg border border-gray-800 p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#9146ff]"></span>
              My Contribution
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#9146ff]/10 border border-[#9146ff]/30 rounded-lg p-4">
                <h3 className="text-[#9146ff] font-semibold mb-2">Research & Analysis</h3>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Conducted heuristic evaluation</li>
                  <li>• Mapped usability issues to interaction design principles</li>
                </ul>
              </div>
              <div className="bg-[#2563eb]/10 border border-[#2563eb]/30 rounded-lg p-4">
                <h3 className="text-[#2563eb] font-semibold mb-2">Design & Prototyping</h3>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Created alternative sketches</li>
                  <li>• Selected final interaction improvements</li>
                  <li>• Built prototype elements in Figma</li>
                </ul>
              </div>
              <div className="bg-[#9146ff]/10 border border-[#9146ff]/30 rounded-lg p-4 md:col-span-2">
                <h3 className="text-[#9146ff] font-semibold mb-2">Design Justification</h3>
                <p className="text-gray-300 text-sm">
                  Performed design justification relating to cognitive load and execution/evaluation gaps, 
                  ensuring all solutions were grounded in interaction design principles.
                </p>
              </div>
            </div>
          </section>

          {/* Reflection & Lessons Learned */}
          <section className="bg-[#0e0e10] rounded-lg border border-gray-800 p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-yellow-500"></span>
              Reflection & Lessons Learned
            </h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                This sprint taught me how much cognitive friction happens when an AI system breaks a 
                user's mental flow. The smallest visibility change (like login placement or sidebar labels) 
                completely changes the onboarding experience.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I also realized that continuity matters more in AI tools than typical interfaces—losing 
                the chat context breaks the user's entire purpose for being there. Maintaining conversation 
                history and persistent access to the AI assistant isn't just a nice-to-have feature; it's 
                essential for the core functionality of the product.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Through this project, I learned that applying interaction design principles systematically 
                can identify and solve seemingly complex usability problems. The connection between visibility, 
                mapping, and information scent creates a predictable experience that reduces cognitive load 
                and supports user goals effectively.
              </p>
            </div>
          </section>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Quick Overview */}
          <div className="bg-[#0e0e10] rounded-lg border border-gray-800 p-6">
            <h3 className="text-lg font-bold text-white mb-4">Quick Overview</h3>
            <div className="space-y-3">
              <div>
                <div className="text-xs text-gray-400 mb-1">Client</div>
                <div className="text-sm font-medium text-white">Microsoft Copilot</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-1">Project Type</div>
                <div className="text-sm font-medium text-white">UX Design Sprint</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-1">Duration</div>
                <div className="text-sm font-medium text-white">2 weeks</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-1">Role</div>
                <div className="text-sm font-medium text-white">UX Designer & Researcher</div>
              </div>
            </div>
          </div>

          {/* Design Principles */}
          <div className="bg-[#0e0e10] rounded-lg border border-gray-800 p-6">
            <h3 className="text-lg font-bold text-white mb-4">Design Principles</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <span className="w-2 h-2 rounded-full bg-[#9146ff]"></span>
                Visibility
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <span className="w-2 h-2 rounded-full bg-[#2563eb]"></span>
                Consistency
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <span className="w-2 h-2 rounded-full bg-[#9146ff]"></span>
                Mapping
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <span className="w-2 h-2 rounded-full bg-[#2563eb]"></span>
                Information Scent
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <span className="w-2 h-2 rounded-full bg-[#9146ff]"></span>
                Gulf of Execution
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <span className="w-2 h-2 rounded-full bg-[#2563eb]"></span>
                Gulf of Evaluation
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CaseStudy
