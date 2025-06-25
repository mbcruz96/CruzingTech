import Header from "./header"
import { Link } from "react-router-dom"

export default function Blog() {
    return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <Header type="blog" />
        <div className="flex flex-col justify-center items-center mt-25">
            <h1 className="text-xl mb-20">Blog</h1>
            <p>Welcome to the blog section! Here you will find articles and updates about our latest projects, technologies, and insights.</p>
            <p>Content coming soon...</p>
        </div>
    </div>
    );
}