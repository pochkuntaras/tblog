const { DOM, PropTypes } = React;
const { bind } = _;
const { update } = React.addons;

var posts = [
  {
    id: 2238,
    meta: {
      author: 'Robert Thompson',
      createdAt: '2016-10-09 09:22:12',
      updatedAt: '2016-10-11 08:36:32',
      likes: 8
    },
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Yandex.svg/200px-Yandex.svg.png',
      alt: 'Yandex',
      width: '136px',
      height: '60px'
    },
    text: 'Yandex'
  },
  {
    id: 4162,
    meta: {
      author: 'Caroline White',
      createdAt: '2016-11-21 19:20:12',
      updatedAt: '2016-12-08 08:40:40'
    },
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/220px-Google_2015_logo.svg.png',
      alt: 'Google',
      width: '136px',
      height: '46px'
    },
    text: 'Google'
  },
  {
    id: 6904,
    meta: {
      author: 'Kaylee Adams',
      createdAt: '2016-08-10 15:55:22',
      updatedAt: '2016-12-06 12:56:25',
      likes: 2
    },
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/150px-Wikipedia-logo-v2.svg.png',
      alt: 'Wikipedia',
      width: '100px',
      height: '100px'
    },
    text: 'Wikipedia'
  }
];

function dateFormat(date) {
  return moment(date).format('DD MMM HH:mm');
}

class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { posts };
  }

  likePost(id) {
    const { posts } = this.state;

    var index = _.findIndex(posts, { id });
    var likes = posts[index].meta.likes || 0;

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
    var columns = _.map(this.state.posts, (post) => [post.text, post.meta.likes || 0]);

    return(
      <div>
        <BlogList
          posts={this.state.posts}
          likePost={(id) => this.likePost(id)}
        />
        <PieChart columns={columns}/>
      </div>
    )
  }
}

ReactDOM.render(
  React.createElement(BlogPage),
  document.getElementById('app')
);
