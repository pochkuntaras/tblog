import React, { PropTypes } from 'react';
import Image from 'components/widgets/blog/elements/Image';
import TextBox from 'components/widgets/blog/elements/TextBox';
import Like from 'components/widgets/blog/elements/Like';
import Link from 'components/elements/Link';
import { postPath } from 'helpers/routes';
import { dateFormat } from 'helpers/date';

const BlogItem = ({ id, image, title, meta, like }) => (
  <div className="blog-item">
    <Image alt={title} {...image}/>
    <ul className="blog-item__text">
      <li>
        <Link to={postPath(id)}>
          <TextBox text={title}/>
        </ Link>
      </li>
      <li><TextBox text={meta.author}/></li>
      <li><TextBox text={dateFormat(meta.createdAt)}/></li>
      <li><TextBox text={dateFormat(meta.updatedAt)}/></li>
    </ul>
    <Like id={id} likes={meta.likes} action={like}/>
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
  id: PropTypes.number.isRequired,
  meta: PropTypes.shape({
    author: PropTypes.string.isRequired,
    createdAt: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date)
    ]),
    updatedAt: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date)
    ]),
    likes: PropTypes.number
  }),
  image: PropTypes.shape(Image.propTypes),
  title: PropTypes.string.isRequired,
  like: PropTypes.func
};

export default BlogItem;
