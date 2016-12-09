import React, { Component } from 'react';
import connect from '../../connect/connect'
//import store from '../../store'
//import * as actionsCreators from '../../actions/actionCreators'



class MainTable extends Component {

  render() {

    return (
      <table>
      <tbody>
      {
        this.props.table.map((row, rowNr) => {
          const rows = row.map((column, columnNr) => {
            const isPlayer = this.props.currentPlayerPosition.find(pos => pos.row === rowNr && pos.column === columnNr)
            const isPillar = this.props.currentPillarPosition.find(pos => pos.row === rowNr && pos.column === columnNr)
            if(isPlayer){
              return (<td key={`tdKey_${columnNr}`} className='player'></td>)
            }
            if(isPillar){
              return (<td key={`tdKey_${columnNr}_pillar`} className='player'></td>)
            }
            return (<td key={`tdKey_${columnNr}`}></td>)
          })
          return (<tr key={`${rowNr}_rowNr`}>{rows}</tr>)
        })
      }
      </tbody>
      </table>
    )
  }
}

export default connect((state) => ({
  table: state.table,
  currentPlayerPosition: state.currentPlayerPosition,
  currentPillarPosition: state.currentPillarPosition,
}), MainTable);
