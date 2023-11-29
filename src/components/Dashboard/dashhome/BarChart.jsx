import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts'
import{stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis} from "../../../data/data"

const BarChart = () => {
  return (
    <div>
      <p className='text-xl font-semibold ml-4 mb-4'>Most sold products this month :</p>
    <ChartComponent
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{border:{width:0}}}
      tooltip={{enable:true}}
    >
        <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
        <SeriesCollectionDirective>
          {
            stackedCustomSeries.map((item, index) => 
              <SeriesDirective key={index} {...item} />
            )
          }
        </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  )
}

export default BarChart