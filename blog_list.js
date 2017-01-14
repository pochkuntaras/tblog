const BlogList = ({ posts }) => (
  <div>
  {
    _.map(posts, (post, key) => (
      <BlogItem key={key} {...post}/>
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
    React.PropTypes.shape({
      meta: React.PropTypes.shape({
        author: React.PropTypes.string.isRequired,
        createdAt: React.PropTypes.oneOfType([
          React.PropTypes.string,
          React.PropTypes.instanceOf(Date)
        ]),
        updatedAt: React.PropTypes.oneOfType([
          React.PropTypes.string,
          React.PropTypes.instanceOf(Date)
        ]),
        likes: PropTypes.number
      }),
      image: React.PropTypes.shape({
        src: React.PropTypes.string,
        alt: React.PropTypes.string.isRequired,
        width: React.PropTypes.string,
        height: React.PropTypes.string
      }),
      text: React.PropTypes.string.isRequired
    })
  )
};
