import React,{useState, useEffect} from 'react' 
import {Container, PostCard} from '../components/index'
import appwriteService from '../appwrite/conf'
function AllPost() {

  const [posts, setPosts] = useState([])
  useEffect(()=>{
    appwriteService.getPosts([]).then((posts)=> {
      console.log(posts)
      if(posts) {
        setPosts(posts.documents)
      }
    })
  },[])
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts && posts.map((post)=>(
            <div className="p-2 w-1/2" key={post.$id}>
              <PostCard {...post}/>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPost