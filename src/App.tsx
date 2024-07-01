import { useReducer } from 'react';

import postData from './PostResponse';
import PostCard from './PostCard';

function App() {
  // let [postList, setPostList] = useState(postData["posts"].filter( post => !post.has_read ));
  let [postList, dispatch] = useReducer(postReducer, postData["posts"]);

  let markPostAsRead = (postRedditId: string) => {
    return function(e) {
      e.preventDefault();

      //console.log("markPostAsRead: postRedditId=", postRedditId);
      // setPostList(postList.filter( post => (post.reddit_id != postRedditId)));
      dispatch({
        type: 'hidePost',
        redditId: postRedditId
      })
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

function postReducer(postList, action) {
  switch(action.type) {
    case 'hidePost': {
      const postRedditId = action.redditId;
      console.log("dispatch.hidePost: postRedditId=", postRedditId);
      return postList.filter( post => (post.reddit_id != postRedditId));
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
