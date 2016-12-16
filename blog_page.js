var posts = [
  {
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Yandex.svg/200px-Yandex.svg.png',
      alt: 'Yandex',
      width: '136px',
      height: '60px'
    },
    text: 'Yandex'
  },
  {
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/220px-Google_2015_logo.svg.png',
      alt: 'Google',
      width: '136px',
      height: '46px'
    },
    text: 'Google'
  },
  {
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/150px-Wikipedia-logo-v2.svg.png',
      alt: 'Wikipedia',
      width: '100px',
      height: '100px'
    },
    text: 'Wikipedia'
  }
];

class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { posts };
  }

  render() {
    const { posts } = this.state;
    return React.createElement(BlogList, { posts });
  }
}

