import React, { PropTypes } from 'react';
import Image from 'components/widgets/blog/elements/Image';
import TextBox from 'components/widgets/blog/elements/TextBox';
import Like from 'components/widgets/blog/elements/Like';

import { dateFormat } from 'helpers/date';

const BlogItem = ({ image, text, meta, like }) => (
  <div className="blog-item">
    <Image {...image}/>
    <ul className="blog-item__text">
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
  text: PropTypes.string.isRequired,
  like: PropTypes.func
};

export default BlogItem;
