import { useState } from 'react';

import postData from './PostResponse';
import PostCard from './PostCard';

function App() {
  let [postList, setPostList] = useState(postData["posts"].filter( post => !post.has_read ));

  let markPostAsRead = (postRedditId: string) => {
    return function() {
      console.log("markPostAsRead: postRedditId=", postRedditId);
      setPostList(postList.filter( post => (post.reddit_id != postRedditId)));
    }
  };

  return (
    <>
      <h1>Skimmit</h1>
      <p>Found {postList.length}</p>
      <div className='postList'>
        {postList.map( (post: any) => {
          return (
            <PostCard post={post} key={post.reddit_id} onread={markPostAsRead(post.reddit_id)}/>
          )

        })}
      </div>
    </>
  )
}

export default App
