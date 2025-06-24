import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Main from "/src/components/main"
import Blog from "/src/components/blog"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  )
};