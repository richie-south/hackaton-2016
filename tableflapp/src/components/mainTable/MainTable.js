import React, { PureComponent } from 'react';
import connect from '../../connect/connect'
import Immutable from 'immutable'

class MainTable extends PureComponent {

  shouldComponentUpdate(nextProps) {
    let prevItems = Immutable.fromJS(this.props.currentPlayerPosition)
    let nextItems = Immutable.fromJS(nextProps.currentPlayerPosition)
    return !Immutable.is(prevItems, nextItems)
  }

  render() {
    let pillarColumnNr = 0
    return (
      <div>
      <table>
      <tbody>
      {
        
        this.props.table.map((row, rowNr) => {
          
          let isPillarFound = false

          const rows = row.map((column, columnNr) => {

            if(columnNr > 9 && columnNr < 16){  
              const player = this.props.currentPlayerPosition.find(pos => pos.row === rowNr && pos.column === columnNr)
              if(player){
                return (<td key={`tdKey_${columnNr}`}  style={{background: player.color, border: 'none'}}></td>)
              }
            }
            
            if(rowNr === 0 && !isPillarFound){
              const pillar = this.props.currentPillarPosition.find(pos => pos.row === rowNr && pos.column === columnNr)
              if(pillar){
                pillarColumnNr = columnNr
                isPillarFound = true
              }
            }

            if(pillarColumnNr === columnNr || (pillarColumnNr+1) === columnNr || (pillarColumnNr+2) === columnNr){
              const pillar = this.props.currentPillarPosition.find(pos => pos.row === rowNr && pos.column === columnNr)
              if(pillar){
                return (<td key={`tdKey_${columnNr}_pillar`} style={{border: 'none', background: pillar.color}}></td>)
              }
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
