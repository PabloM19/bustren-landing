import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Company } from './pages/Company'
import { Services } from './pages/Services'
import { Building } from './pages/Building'
import { Projects } from './pages/Projects'
import { ProjectDetail } from './pages/ProjectDetail'
import { Contact } from './pages/Contact'
import { Legal } from './pages/Legal'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/empresa" element={<Company />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/edificacion" element={<Building />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/proyectos/:slug" element={<ProjectDetail />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/aviso-legal" element={<Legal />} />
          <Route path="/privacidad" element={<Legal />} />
          <Route path="/cookies" element={<Legal />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
