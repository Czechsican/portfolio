import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { photography, print, websites } from './content/projects'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { ProjectDetail } from './pages/ProjectDetail'
import { SectionIndex } from './pages/SectionIndex'

/** Routes only. The router is supplied by main.tsx */
export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="websites"
          element={<SectionIndex sectionId="websites" projects={websites} linked />}
        />
        <Route
          path="websites/:slug"
          element={<ProjectDetail sectionId="websites" projects={websites} />}
        />
        <Route
          path="photography"
          element={<SectionIndex sectionId="photography" projects={photography} linked />}
        />
        <Route
          path="photography/:slug"
          element={<ProjectDetail sectionId="photography" projects={photography} />}
        />
        <Route
          path="print"
          element={<SectionIndex sectionId="print" projects={print} linked />}
        />
        <Route
          path="print/:slug"
          element={<ProjectDetail sectionId="print" projects={print} />}
        />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
