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
            if(isPlayer){
              return (<td key={`tdKey_${columnNr}`} className='player'></td>)
            }

            /*if(rowNr === this.props.currentPlayerPosition.row && columnNr === this.props.currentPlayerPosition.column ){
              //return this.setState({ [`${rowNr}_${columnNr}`]:  })
              
            }*/

            //return this.setState({ [`${rowNr}_${columnNr}`]:  })
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
}), MainTable);



/*


[
  {
    row: 5,
    column: 5,
  },
  
  {
    row: 6,
    column: 5,
  },

  {
    row: 5,
    column: 6,
  },

]
*/