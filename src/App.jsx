import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Main from "./components/main"
import Blog from "./components/blog"

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