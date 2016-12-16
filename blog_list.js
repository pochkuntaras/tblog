const BlogList = ({ posts }) => (
  <div>
  {
    _.map(posts, (post, key) => (
      <BlogItem key={key} image={post.image} text={post.text}/>
    ))
  }
  </div>
);

