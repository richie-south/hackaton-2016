import React, { Component } from 'react';
import connect from '../../connect/connect'
import store from '../../store'
import * as actionsCreators from '../../actions/actionCreators'



class MainTable extends Component {

  constructor(props){
    super(props);

    this.state = {}
    //let unsubscribe = store.subscribe(this.handleChange.bind(this))
  }

  handleChange(){
    
    /*const rowNr = store.getState().currentPlayerPosition.row
    const columnNr = store.getState().currentPlayerPosition.column

    this.setState({
      [`${rowNr}_${columnNr}`]: (<td key={`tdKey_${columnNr}`} className='player'></td>)
    })*/
  }

  componentDidMount(){
    
    /*this.props.table.map((row, rowNr) => {
      const rows = row.map((column, columnNr) => {

        if(rowNr === this.props.currentPlayerPosition.row && columnNr === this.props.currentPlayerPosition.column ){
          return this.setState({ [`${rowNr}_${columnNr}`]:  (<td key={`tdKey_${columnNr}`} className='player'></td>)})
        }

        return this.setState({ [`${rowNr}_${columnNr}`]:  (<td key={`tdKey_${columnNr}`}></td>)})
      })

    });*/
  }
  
  componentDidUpdate(){
    //console.log('componentDidUpdate', this.props.currentPlayerPosition)
    //const rowNr = this.props.currentPlayerPosition.row
    //const columnNr = this.props.currentPlayerPosition.column

    
  }

  render() {
    
    return (   
      <table>
      <tbody>
        
      

      {
        this.props.table.map((row, rowNr) => {
          const rows = row.map((column, columnNr) => {

            if(rowNr === this.props.currentPlayerPosition.row && columnNr === this.props.currentPlayerPosition.column ){
              //return this.setState({ [`${rowNr}_${columnNr}`]:  })
              return (<td key={`tdKey_${columnNr}`} className='player'></td>)
            }

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


*/