import React from 'react'
import { render } from 'react-dom'
import { VictoryGroup, VictoryBar, VictoryChart, VictoryLine, VictoryAxis, VictoryStack, VictoryArea} from "victory"
import R from 'ramda'


const data = [
[1,	34],
[2,	19],
[3, 12],
[4,	10],
[5,	6],
[7,	8],
[10,	9],
[20,	8]
]

const total = R.sum(R.map(([_, x]) => x, data))

const d = R.map((item) => R.zipObj(['x', 'y'], [item[0], (item[1]/total) * 100]), data)


const Graph3 = () => (
<VictoryChart
    height={200}

  >
  <VictoryAxis

   style={{
      axis: {strokeWidth: 1, stroke: "#ccc"},
      grid: {strokeWidth: 1},
      ticks: {strokeWidth: 1, stroke: "#ccc", strokeLinecap: "square"},
      tickLabels: {fontSize: 5},
      axisLabel: {fontSize: 8, fill: '#666'}
    }}
    padding={5}
    label="years abroad"
    domain={[1, 20]}
    tickCount={19}
    standalone={false}/>

  <VictoryAxis dependentAxis

   style={{
      axis: {strokeWidth: 1, stroke: "#ccc"},
      grid: {strokeWidth: 1},
      ticks: {strokeWidth: 1, stroke: "#ccc", strokeLinecap: "square"},
      tickLabels: {fontSize: 5},
      axisLabel: {fontSize: 8, fill: '#666'}
    }}
    padding={5}
    label="%"
    tickCount={5}
    standalone={false}/>

    <VictoryArea
      style={{ data: {
        fill: '#f00', fillOpacity: 0.01, stroke: 'tomato'
      }}}
interpolation="cardinal"
      data={d}
    />
</VictoryChart>
)

const salaries = [
9846.15,
9250,
	7812.5,
	5666.67,
	5500,
	5200,
 4750
]

var mapIndexed = R.addIndex(R.map);

const ds = mapIndexed((sal, i) => R.zipObj(['x', 'y'], [i+1, sal]),
    salaries)
console.log('ds', JSON.stringify(ds))


const Graph = () => (
<VictoryGroup
  height={500}
  offset={20}
  colorScale={"qualitative"}
>
  <VictoryBar
    data={[
      {x: 1, y: 1},
      {x: 2, y: 2},
      {x: 3, y: 3}
    ]}
  />
</VictoryGroup>
)


render(<Graph />, document.getElementById('root'))

