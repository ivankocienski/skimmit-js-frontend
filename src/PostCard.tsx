

import { FC } from 'react';

const PostCard:FC<{ post: any }> = ({post}) => {
  return (
    <div className="post_card">
      {post.title}
    </div>
  );
}

export default PostCard;