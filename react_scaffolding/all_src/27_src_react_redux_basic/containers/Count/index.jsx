// import count UI component 
import CountUI from '../../components/Count'
// import action object
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action'
// import connect for connect UI component&redux
import {connect} from 'react-redux'

/*
    1.return value pass to UI component as props {key:value}
    2.mapStateToProps used to pass state
 */
function mapStateToProps(state) {
    return {count:state}
}

/*
    1.return value pass to UI component as props {key:value}
    2.mapDispatchToProps used to pass method that operate state
 */
function mapDispatchToProps(dispatch) {
    return {
        // notify redux to execute add
        add:number => dispatch(createIncrementAction(number)),
        minus:number => dispatch(createDecrementAction(number)),
        addAsync:(number,time) => dispatch(createIncrementAsyncAction(number,time))
    }
}

// create and export a count container component
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)
