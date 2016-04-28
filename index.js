import React from 'react'
import { render } from 'react-dom'
import { VictoryStack, VictoryArea} from "victory"

const data = [
[1,	34],
[2,	19],
[3, 12],
[4	10],
[5,	6],
[7,	8],
[10,	9],
[20,	8]
]

const Graph = () => (
  <VictoryStack
    height={800}
    style={{ data: {
      strokeDasharray: '5,5',
      strokeWidth: 2,
      fillOpacity: 0.4
    }}}
  >
    <VictoryArea
      style={{ data: {
        fill: 'tomato', stroke: 'tomato'
      }}}
      data={[
        {x: 1, y: 1},
        {x: 2, y: 2},
        {x: 3, y: 3}
      ]}
    />
    <VictoryArea
      style={{ data: {
        fill: 'orange', stroke: 'orange'
      }}}
      data={[
        {x: 1, y: 2},
        {x: 2, y: 1},
        {x: 3, y: 1}
      ]}
    />
    <VictoryArea
      style={{ data: {
        fill: 'gold', stroke: 'gold'
      }}}
      data={[
        {x: 1, y: 3},
        {x: 2, y: 4},
        {x: 3, y: 2}
      ]}
    />
  </VictoryStack>
)

render(<Graph />, document.getElementById('root'))
