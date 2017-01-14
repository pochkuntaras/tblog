const BlogList = ({ posts, likePost }) => (
  <div>
  {
    _.map(posts, (post) => (
      <BlogItem key={post.id} like={() => likePost(post.id)} {...post} />
    ))
  }
  </div>
);

BlogList.defaultProps = {
  posts: {
    meta: {
      author: 'Username',
      createdAt: new Date(),
      updatedAt: new Date(),
      likes: 0
    },
    image: {
      alt: 'Image',
      width: '100px',
      height: '100px'
    },
    text: 'New post'
  }
};

BlogList.propTypes = {
  posts: React.PropTypes.arrayOf(
    React.PropTypes.shape(BlogItem.propTypes)
  )
};
