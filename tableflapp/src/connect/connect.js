
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionsCreators from '../actions/actionCreators';


const mapDispatchToProps = (dispatch) => bindActionCreators(actionsCreators, dispatch); 

export default (stateToProps, Element) => 
  connect(
    stateToProps, 
    mapDispatchToProps
  )(Element);

