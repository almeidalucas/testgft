import React, { Component } from 'react';

import AutoCompleteInput from './component.autocomplete';

class SearchInputs extends Component {

    constructor(props){
        super(props);

        this.state = {
        }
    }
    componentDidMount() {
    }

    render() {

    return (
        <div style={{marginBottom: 23,}}>
            <div style={{display: 'flex', justifyContent: 'space-between',}}>
                <AutoCompleteInput searchByFields={this.props.searchByFields} text="Date" />
                <AutoCompleteInput searchByFields={this.props.searchByFields} text="Delivery Country" />
                <AutoCompleteInput searchByFields={this.props.searchByFields} text="Manufacturer's name" />
                <AutoCompleteInput searchByFields={this.props.searchByFields} text="Jeans's Gender" />
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between',}}>
                <AutoCompleteInput searchByFields={this.props.searchByFields} text="Jeans's Size" />
                <AutoCompleteInput searchByFields={this.props.searchByFields} text="Jeans's Colour" />
                <AutoCompleteInput searchByFields={this.props.searchByFields} text="Jeans's Style" />
                <AutoCompleteInput searchByFields={this.props.searchByFields} text="Number of sales" />
            </div>
        </div>
    );
  }
}

export default SearchInputs;