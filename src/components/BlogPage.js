import React from 'react';
import update from 'react-addons-update';
import _ from 'lodash';
import { staticPosts as posts } from 'static/posts';
import BlogList from 'components/widgets/blog/BlogList';
import PieChart from 'components/widgets/PieChart';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { posts };
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
