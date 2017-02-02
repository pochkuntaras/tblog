import React, { PropTypes } from 'react';
import BlogItem from 'components/widgets/blog/BlogItem';
import request from 'superagent';

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = { id: props.params.id, post: {} };
  }

  getPost(id) {
    request.get(
      `http://localhost:3004/posts/${id}`,
      {},
      (error, result) => (
        this.setState({ post: result.body.post })
      )
    );
  }

  componentDidMount() {
    this.getPost(this.state.id);
  }

  render() {
    return (
      <div className="post">
        <BlogItem {...this.state.post} />
      </div>
    );
  }
}

Post.propTypes = {
  params: PropTypes.object
};

export default Post;
