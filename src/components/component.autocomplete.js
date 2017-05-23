import React, { Component } from 'react'
import AutoComplete from 'material-ui/AutoComplete'

class AutoCompleteInput extends Component {

	constructor(props) {
		super(props)

		this.state = {
			words: [],
			searchText: '',
		}
	}
	componentDidMount() {
	}

	_saveSearch() {
		let exists = false
		this.state.words.map((row, index) => {
			if (this.state.searchText === row) exists = true
			return null
		})

		if (!exists && this.state.searchText !== '') {
			this.setState({
				words: [...this.state.words, this.state.searchText],
			})
		}
	}

	_onSubmit(e) {
		e.preventDefault()
		this.props.searchByFields()
		this._saveSearch()
	}

	render() {

		return (
			<form onSubmit={this._onSubmit.bind(this)}>
				<AutoComplete
					className="autoCompleteInput"
					floatingLabelText={this.props.text}
					filter={AutoComplete.caseInsensitiveFilter}
					dataSource={this.state.words}
					searchText={this.state.searchText}
					onUpdateInput={(searchText) => {
						this.setState({
							searchText: searchText,
						})
					}}
					maxSearchResults={10}
				/>
			</form>
		)
	}
}

export default AutoCompleteInput