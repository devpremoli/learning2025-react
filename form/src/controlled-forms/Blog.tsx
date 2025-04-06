import { useState } from "react";

export default function Blog() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("yoshi");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const blog = { title, body, author };
    console.log(blog);

    fetch("http://localhost:5001/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
    });
  };

  return (
    <div className="blog">
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <label htmlFor="">Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          name=""
          id=""
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button>Add Blog</button>
      </form>

      <p>title: {title}</p>
      <p>body: {body}</p>
      <p>author: {author}</p>
    </div>
  );
}
