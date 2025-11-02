import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import CaseStudy from './pages/CaseStudy'

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/casestudy" element={<CaseStudy />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}

export default App
