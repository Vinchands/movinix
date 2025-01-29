import { BrowserRouter, Routes, Route } from 'react-router'
import { Home } from '@/pages'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
