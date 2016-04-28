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
  <svg>
<VictoryPie
  data={[
    {country: "No", p: 75.5},
    {country: "Yes", p: 24.5}
  ]}
  x={(data) => `${data.country} ${data.p}%`}
  y={(data) => data.p}
  colorScale={[
 '#ff7f0e',
 '#1f77b4',
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
      fontFamily: 'Georgia', padding: 120, fontSize: (data) => (data.p / 2.2)
    },
    data: {
      opacity: 0.4,
      strokeWidth: 0

    }
  }}
/>

<VictoryPie
width={100}
padding={{left: 0, top: 200}}
  data={[
    {country: "No", p: 75.5},
    {country: "Yes", p: 24.5}
  ]}
  x={(data) => `${data.country} ${data.p}%`}
  y={(data) => data.p}
  colorScale={[
 '#ff7f0e',
 '#1f77b4',
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
      fontFamily: 'Georgia', padding: 120, fontSize: (data) => (data.p / 2.2)
    },
    data: {
      opacity: 0.4,
      strokeWidth: 0

    }
  }}
/>
</svg>
)


render(<Graph />, document.getElementById('root'))

