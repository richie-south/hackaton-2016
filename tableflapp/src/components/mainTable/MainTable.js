import React, { Component } from 'react';
import connect from '../../connect/connect'
import Immutable from 'immutable'

class MainTable extends Component {

  shouldComponentUpdate(nextProps) {
    let prevItems = Immutable.fromJS(this.props.currentPlayerPosition)
    let nextItems = Immutable.fromJS(nextProps.currentPlayerPosition)
    return !Immutable.is(prevItems, nextItems)
  }

  render() {

    return (
      <div>
      <table>
      <tbody>
      {
        this.props.table.map((row, rowNr) => {
          const rows = row.map((column, columnNr) => {
            const isPlayer = this.props.currentPlayerPosition.find(pos => pos.row === rowNr && pos.column === columnNr)
            const isPillar = this.props.currentPillarPosition.find(pos => pos.row === rowNr && pos.column === columnNr)
            if(isPlayer){

              return (<td key={`tdKey_${columnNr}`} style={{background: isPlayer.color, border: 'none'}}></td>)
            }
            if(isPillar){
              return (<td key={`tdKey_${columnNr}_pillar`} style={{border: 'none', background: isPillar.color}}></td>)
            }
            return (<td key={`tdKey_${columnNr}`} ></td>)
          })
          return (<tr key={`${rowNr}_rowNr`}>{rows}</tr>)
        })
      }
      </tbody>
      </table>
      <h1>{this.props.score}</h1>
      </div>
    )
  }
}

export default connect((state) => ({
  table: state.table,
  currentPlayerPosition: state.currentPlayerPosition,
  currentPillarPosition: state.currentPillarPosition,
  score:state.score,
}), MainTable);
