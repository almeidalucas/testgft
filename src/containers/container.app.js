import React, { Component } from 'react';

import SearchInputs from '../components/component.search.inputs';
import Table from '../components/component.table';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTableData, fetchSearchByFields } from '../actions/actions.tableData';

import { 
    GET_TABLEDATA
} from '../actions/actions.tableData';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      
    }
  }

  componentDidMount() {
    this.props.fetchInitial(GET_TABLEDATA);
  }

  _searchByFields() {
    const autoCompleteInputs = document.getElementsByClassName('autoCompleteInput');

    this.props.fetchSearchByFields({
                                    date: autoCompleteInputs[0].children[1].value,
                                    deliveryCountry: autoCompleteInputs[1].children[1].value,
                                    manufacturer: autoCompleteInputs[2].children[1].value,
                                    gender: autoCompleteInputs[3].children[1].value,
                                    size: autoCompleteInputs[4].children[1].value,
                                    colour: autoCompleteInputs[5].children[1].value,
                                    style: autoCompleteInputs[6].children[1].value,
                                    count: autoCompleteInputs[7].children[1].value
                                  });
  }

  render() {

    return (
      <div className="App" style={{padding: 23,}}>
        <SearchInputs searchByFields={this._searchByFields.bind(this)} />
        <Table tableData={this.props.tableData} />
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        tableData: state.tableData.data
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchInitial: fetchTableData, fetchSearchByFields: fetchSearchByFields}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
