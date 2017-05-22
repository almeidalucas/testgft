import { 
    GET_TABLEDATA,
    GET_BY_FIELDS
} from '../actions/actions.tableData';

export default function(state = {
                        data: []
                    }, action) {
    switch(action.type) {
    case GET_TABLEDATA:
    case GET_BY_FIELDS:
        return {...state, data: action.data}
    default:
        return state;
    }
}