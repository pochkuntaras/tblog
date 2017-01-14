const BlogItem = ({ image, text, meta, like }) => (
  <div>
    <Image {...image}/>
    <ul>
      <li><TextBox text={text}/></li>
      <li><TextBox text={meta.author}/></li>
      <li><TextBox text={dateFormat(meta.createdAt)}/></li>
      <li><TextBox text={dateFormat(meta.updatedAt)}/></li>
    </ul>      
    <Like likes={meta.likes} action={like}/>
  </div>
);

BlogItem.defaultProps = {
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
};

BlogItem.propTypes = {
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
  image: React.PropTypes.shape(Image.propTypes),
  text: React.PropTypes.string.isRequired
};
