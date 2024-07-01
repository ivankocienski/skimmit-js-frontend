import postData from './PostResponse';
import PostCard from './PostCard';

function App() {
  return (
    <>
      <h1>Skimmit</h1>
      <p>Found {postData.count}</p>
      {postData.posts.map( (post: any) => {
        return (
          <PostCard post={post} />
        )

      })}
    </>
  )
}

export default App
