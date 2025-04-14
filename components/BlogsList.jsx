import Blog from './Blog'
import blogsData from '/blogsData.js'

export default function BlogsList({display}) {
    
    const data = blogsData.slice(0, display)
    
    const blogElements = data.map(blog => (
        <Blog blog={blog} key={blog.id}/>
    ))
        
    return (
        <section>
            <div className="container blog-section">
                {blogElements}
            </div>
            <button className="view-more-btn">View More</button>
        </section>
        
    )
}