import React, { Component } from "react";
import CanvasJSReact from "../utils/libs/canvasjs.react";

const { CanvasJS, CanvasJSChart } = CanvasJSReact;

export default class Graph extends Component {
  render() {
    const { data } = this.props;

    const options = {
      animationEnabled: true,
      exportEnabled: false,
      theme: "light2",
      exportFileName: "Bank-of-America-Corporation-StockChart",
      title: {
        text: ""
      },
      axisX: {
        interval: 1,
        intervalType: "month",
        valueFormatString: "MMM"
      },
      axisY: {
        includeZero: false,
        prefix: "$",
        title: ""
      },
      data: [
        {
          type: "ohlc",
          yValueFormatString: "$###0.00",
          xValueFormatString: "MMM YYYY",
          dataPoints: data
        }
      ]
    };

    return (
      <div style={{ padding: "20px" }}>
        <CanvasJSChart options={options} onRef={ref => (this.chart = ref)} />
      </div>
    );
  }
}
