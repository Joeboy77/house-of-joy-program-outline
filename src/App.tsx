import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import ProgramOutlinePage from './pages/ProgramOutlinePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<ProgramOutlinePage />} />
      </Route>
    </Routes>
  )
}

export default App 