/* global __CLIENT__*/

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

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
    if (__CLIENT__) {
      const c3 = require('c3');

      this.chart = c3.generate({
        bindto: ReactDOM.findDOMNode(this.refs.piechart),
        data: {
          columns: this.props.columns,
          type: 'pie'
        }
      });
    }
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
