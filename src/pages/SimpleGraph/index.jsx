import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import './index.css'
import { initialdata, initiallinks } from './initialdata';

export default function SimpleGraph (props) {
  var myChart
  let option = {
    title: {
      text: 'Results'
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        type: 'graph',
        layout: 'none',
        symbolSize: 50,
        roam: true,
        label: {
          show: true
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        edgeLabel: {
          fontSize: 20
        },
        data: initialdata,
        links: initiallinks,
        lineStyle: {
          opacity: 0.9,
          width: 2,
          curveness: 0
        }
      }
    ]
  };

  useEffect(() => {
    var chartDom = document.getElementById('myfirstech');
    myChart = echarts.init(chartDom);
    option && myChart.setOption(option);

  }, [myChart])

  return (
    <div id='myfirstech'>

    </div>
  )
}