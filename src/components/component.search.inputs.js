import React from 'react'

import FlatButton from 'material-ui/FlatButton'

import AutoCompleteInput from './component.autocomplete'

const SearchInputs = (props) => {
	return (
		<div style={{ marginBottom: 23 }}>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<AutoCompleteInput searchByFields={props.searchByFields} text="Date" />
				<AutoCompleteInput searchByFields={props.searchByFields} text="Delivery Country" />
				<AutoCompleteInput searchByFields={props.searchByFields} text="Manufacturer's name" />
				<AutoCompleteInput searchByFields={props.searchByFields} text="Jeans's Gender" />
			</div>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<AutoCompleteInput searchByFields={props.searchByFields} text="Jeans's Size" />
				<AutoCompleteInput searchByFields={props.searchByFields} text="Jeans's Colour" />
				<AutoCompleteInput searchByFields={props.searchByFields} text="Jeans's Style" />
				<AutoCompleteInput searchByFields={props.searchByFields} text="Number of sales" />
			</div>
			<div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 23 }}>
				<FlatButton label="Search" fullWidth={true} onClick={props.searchByFields} />
			</div>
		</div>
	)
}

export default SearchInputs