const BlogItem = ({ image, text, meta }) => (
  <div>
    <Image {...image}/>
    <ul>
      <li><TextBox text={text}/></li>
      <li><TextBox text={meta.author}/></li>
      <li><TextBox text={dateFormat(meta.createdAt, 'DD MMM HH:mm')}/></li>
      <li><TextBox text={dateFormat(meta.updatedAt, 'DD MMM HH:mm')}/></li>
    </ul>      
    <Like likes={meta.likes}/>
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
  image: React.PropTypes.shape({
    src: React.PropTypes.string,
    alt: React.PropTypes.string.isRequired,
    width: React.PropTypes.string,
    height: React.PropTypes.string
  }),
  text: React.PropTypes.string.isRequired
};
