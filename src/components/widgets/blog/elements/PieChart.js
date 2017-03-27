import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import c3 from 'c3';

class PieChart extends React.Component {
  componentDidMount() {
    this.generateChart();
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  componentDidUpdate() {
    this.generateChart();
  }

  generateChart() {
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.piechart),
      data: {
        columns: this.props.columns,
        type: 'pie'
      }
    });
  }

  render() {
    return (
      <div ref="piechart" />
    );
  }
}

PieChart.propTypes = {
  columns: PropTypes.array
};

export default PieChart;
