import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import './index.css'
//import { initialdata } from './initialdata';

export default function SunBrust (props) {
  let myChart = useRef()
  let option = {
    title: {
      text: 'Results-目标侦察问题'
    },
    series: {
      type: 'sunburst',
      data: props.sunbrustdata,
      radius: [0, '90%'],
      label: {
        rotate: 'radial'
      }
    }
  };

  useEffect(() => {
    var chartDom = document.getElementById('mysecondech');
    myChart = echarts.init(chartDom);
    option && myChart.setOption(option);

  }, [props.sunbrustdata])

  return (
    <div id='mysecondech' ref={myChart}>

    </div>
  )
}