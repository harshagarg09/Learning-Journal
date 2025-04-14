export default function Blog({blog}) {
    return (

        <div className="blog">
            <img className="blog-img" src={blog.img} />
            <p className="date">{blog.date}</p>
            <h2>{blog.title}</h2>
            <p className="blog-text">{blog.text}</p>
        </div>
          
    )
}