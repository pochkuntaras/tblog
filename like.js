class Like extends React.Component {
  constructor(props) {
    super(props);

    this.state = { likes: props.likes };
    this.handleClick = bind(this.handleClick, this);
  }

  handleClick(e) {
    this.setState({ likes: this.state.likes + 1 });
  }
  
  render() {
    return (
      <p>
        <span>Count: {this.state.likes} </span>
        <button onClick={this.handleClick}>like</button>
      </p>
    )
  }
};

Like.defaultProps = {
  likes: 0
};

Like.propTypes = {
  likes: PropTypes.number
};
