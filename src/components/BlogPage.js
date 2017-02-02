import React from 'react';
import update from 'react-addons-update';
import request from 'superagent';
import _ from 'lodash';
import BlogList from 'components/widgets/blog/BlogList';
import PieChart from 'components/widgets/blog/elements/PieChart';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { posts: [] };
  }

  likePost(id) {
    const { posts } = this.state;
    const index = _.findIndex(posts, { id });
    const likes = posts[index].meta.likes || 0;

    this.setState({
      posts: update(posts, {
        [index]: {
          meta: {
            likes: {
              $set: likes + 1
            }
          }
        }
      })
    });
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    request.get(
      'http://localhost:3004',
      {},
      (error, result) => (
        this.setState({ posts: result.body })
      )
    );
  }

  render() {
    const columns = _.map(this.state.posts,
       (post) => [post.text, post.meta.likes || 0]);

    return (
      <div>
        <BlogList
          posts={this.state.posts}
          likePost={(id) => this.likePost(id)}
        />
        <PieChart columns={columns}/>
      </div>
    );
  }
}

export default BlogPage;
