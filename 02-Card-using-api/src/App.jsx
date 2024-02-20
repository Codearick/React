import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'

function App() {
  const [posts, setPosts] = useState([])

  const fetchData = async () => {
    try{
      const request = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      const data = await request.json();
      setPosts(data);
      console.log(data);
    }
    catch(error){
      console.error("Error while fetching: ",error)
    }
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <div className="container h-[100%] w-full flex flex-wrap justify-center border border-black bg-black text-white">
        <Navbar/>
        {posts.map((post) => (
          <Card key={post.id} id={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </>
  )
}
export default App
