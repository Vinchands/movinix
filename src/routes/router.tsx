import { BrowserRouter, Routes, Route } from 'react-router'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" />
      </Routes>
    </BrowserRouter>
  )
}
