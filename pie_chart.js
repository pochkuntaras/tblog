class PieChart extends React.Component {
  componentDidMount() {
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.piechart),
      data: {
        columns: this.props.columns,
        type: 'pie'
      }
    });
  }

  componentWillUnmount() {
    this.chart.destroy();
  }
  
  componentWillReceiveProps(nextProps) {
    this.chart.load({
      columns: nextProps.columns
    })
  }
  
  render() {
    return (
      <div ref="piechart" />
    );
  }
}
