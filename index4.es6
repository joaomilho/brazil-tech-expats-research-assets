import React from 'react'
import { render } from 'react-dom'
import { VictoryPie, VictoryGroup, VictoryBar, VictoryChart, VictoryLine, VictoryAxis, VictoryStack, VictoryArea} from "victory"
import R from 'ramda'

const salaries = [
    {x: 1, y: 9846.15,  label: "US"},
    {x: 2, y: 9250,  label: "England"},
    {x: 3, y: 7812.5,  label: "Canada"},
    {x: 4, y: 5666.67, label: "Portugal"},
    {x: 5, y: 5500,  label: "Alemanha"},
    {x: 6, y: 5200,  label: "Suécia"},
    {x: 7, y: 4750,  label: "Holanda"}
]

var mapIndexed = R.addIndex(R.map);

const ds = mapIndexed((sal, i) => R.zipObj(['x', 'y', 'fill',], [i+1, sal]),
    salaries)
console.log('ds', JSON.stringify(ds))


const Graph = () => (
<VictoryPie
  data={[
    {country: "US", p: 23.08},
    {country: "Canada", p: 19.23},
    {country: "Germany", p: 15.38},
    {country: "Sweden", p: 12.5},
    {country: "England", p: 6.73},
    {country: "Portugal", p: 4.81},
    {country: "Holland", p: 3.85},
    {country: "Australia", p: 2.88},
    {country: "Israel", p: 1.92},
    {country: "Denmark", p: 1.92},
    {country: "Other", p: 7.7}
  ]}
  x={(data) => `${data.country} ${Math.round(data.p)}%`}
  y={(data) => data.p}
  colorScale={[
 '#1f77b4',
 '#ff7f0e',
'#2ca02c',
'#d62728',
'#9467bd',
'#8c564b',
'#e377c2',
'#7f7f7f',
'#bcbd22',
'#17becf',
'#eee'

  ]}
  endAngle={90}
  startAngle={-90}
  innerRadius={80}
  padAngle={1}
  style={{
    labels: {
      fontFamily: 'Georgia', padding: 120, fontSize: (data) => 4 + (data.p / 2)
    },
    data: {
      opacity: 0.4,
      strokeWidth: 0

    }
  }}
/>

)


render(<Graph />, document.getElementById('root'))

