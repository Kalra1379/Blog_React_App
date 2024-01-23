import React from 'react'

function Home(props,handleDelete,title) {
  const blogs=props.blogs;
  const titles=props.title;
    return (
    <div>
        <h1>{titles}</h1>
    {
        blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Auther of this blog is {blog.title}</p>
                <button onClick={()=>handleDelete(blog.id)} >Delete This Blog</button>
            </div>
        ))
    }
    </div>
  )
}

export default Home
