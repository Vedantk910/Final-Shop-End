import React from 'react'
import{ChartComponent, SeriesCollectionDirective, SeriesDirective,LineSeries, Inject, DateTime, Legend, Tooltip} from '@syncfusion/ej2-react-charts';
import {lineCustomSeries} from "../../../data/data"

const Linechart = () => {
  return (
    <div>
      <p className='text-xl font-semibold ml-4 mb-10'>Sales stats from past months :</p>
      <ChartComponent
        id="line-chart"
        height='420px'
        primaryXAxis={{valueType:"DateTime"}}
        chartArea={{border:{width: 0}}}
        tooltip={{enable:true}}
        title="Sales (in thousands)"
      >
        <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
        <SeriesCollectionDirective>
            {
                lineCustomSeries.map((item, index) =>
                <SeriesDirective key={index} {...item} />
                )
            }
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Linechart
