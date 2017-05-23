import {
	GET_TABLEDATA,
	GET_BY_FIELDS,
} from '../actions/actions.tableData'

const defaultData = {
	data: [],
}

export default function (state = defaultData, action) {
	switch (action.type) {
	case GET_TABLEDATA:
	case GET_BY_FIELDS:
		return { data: action.data }
	default:
		return state
	}
}