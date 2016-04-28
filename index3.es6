import React from 'react'
import { render } from 'react-dom'
import { VictoryGroup, VictoryBar, VictoryChart, VictoryLine, VictoryAxis, VictoryStack, VictoryArea} from "victory"
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
<svg width="410" height="410">

<VictoryLine
    data={[
      {x: 0, y: 7350},
      {x: 1, y: 7350}
    ]}
/>

<VictoryBar
  height={500}
  padding={75}
  data={salaries}
/>
</svg>
)


render(<Graph />, document.getElementById('root'))

