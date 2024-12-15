import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch data
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data); 
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // search
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* <button onClick={handleSearch}>Search</button> */}
      <br />
      <br />

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;