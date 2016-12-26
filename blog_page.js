const { DOM, PropTypes } = React;
const { bind } = _;

var posts = [
  {
    meta: {
      author: 'Robert Thompson',
      createdAt: '2016-10-09 09:22:12'
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
    meta: {
      author: 'Caroline White',
      createdAt: '2016-11-21 19:20:12',
      updatedAt: '2016-12-08 08:40:40',
      likes: 8
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
    meta: {
      author: 'Kaylee Adams',
      createdAt: '2016-08-10 15:55:22',
      updatedAt: '2016-12-06 12:56:25'
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

function dateFormat(date, format) {
  return moment(date).format(format);
}

class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { posts };
  }

  render() {
    return(
      <BlogList posts={this.state.posts}/>
    )
  }
}

ReactDOM.render(
  React.createElement(BlogPage),
  document.getElementById('app')
);
