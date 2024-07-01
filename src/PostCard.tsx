

import { FC } from 'react';

const PostCard:FC<{ post: any, onread: any }> = ({post, onread}) => {
  return (
    <div className="post_card">
      <h2>{post.title}</h2>
      <div>
        <button onClick={onread}>Hide</button>
      </div>
    </div>
  );
}

export default PostCard;