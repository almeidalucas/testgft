import React, { Component } from 'react';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import ArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import ArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';

const styles = {
  headerColumn: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#FFFFFF',
  }
}

class TableComponent extends Component {

    constructor(props){
        super(props);

        this.state = {
            disabled: false,
            countDesc: true,
            tableData: null,
        }
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps){
        this.setState({tableData: nextProps.tableData});
    }

    render() {

    const { disabled, countDesc, tableData } = this.state;

    return (
        <Table
          height={'400px'}
          fixedHeader={true}
          selectable={true}
          multiSelectable={true}
          style={{
            borderBottom: '1px solid #000055',
            borderLeft: '1px solid #000055',
            borderRight: '1px solid #000055',
          }}
        >
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
            enableSelectAll={false}
          >
            <TableRow style={{backgroundColor: '#000055',}}>
              <TableHeaderColumn tooltip="Date" style={styles.headerColumn}>Date</TableHeaderColumn>
              <TableHeaderColumn tooltip="Delivery Country" style={styles.headerColumn}>
                <div style={{display: 'flex', alignItems: 'center',}}>
                Delivery Country
                <IconButton
                  disabled={disabled}
                  iconStyle={{color: '#FFFFFF',}}
                  onClick={() => {
                    if(tableData !== null){
                    this.setState({disabled: true}, () => {
                        let aux, auxState = tableData.slice(0), i, j;

                        for(i=0; i < auxState.length; i++){
                            aux = i;
                            if(i%23 === 0) this.setState({tableData: auxState.slice(0)});
                            for(j=i+1; j < auxState.length; j++){
                              if(countDesc){
                                if(auxState[aux].deliveryCountry < auxState[j].deliveryCountry) aux = j;
                              } else {
                                if(auxState[aux].deliveryCountry > auxState[j].deliveryCountry) aux = j;
                              }
                            }

                            auxState = [
                              ...auxState.slice(0, i),
                              auxState[aux],
                              ...auxState.slice(i, aux),
                              ...auxState.slice(aux+1, auxState.length)
                            ];
                            
                        }
                        this.setState({tableData: auxState.slice(0), countDesc: !countDesc, disabled: false});
                    });
                  }}
                  }
                  >
                    {
                      countDesc ?
                      <ArrowDown />
                      :
                      <ArrowUp />
                    }
                  </IconButton>
                  </div>
              </TableHeaderColumn>
              <TableHeaderColumn tooltip="Manufacturer's name" style={styles.headerColumn}>
                <div style={{display: 'flex', alignItems: 'center',}}>
                Manufacturer
                <IconButton
                  disabled={disabled}
                  iconStyle={{color: '#FFFFFF',}}
                  onClick={() => {
                    if(tableData !== null){
                    this.setState({disabled: true}, () => {
                        let aux, auxState = tableData.slice(0), i, j;

                        for(i=0; i < auxState.length; i++){
                            aux = i;
                            if(i%23 === 0) this.setState({tableData: auxState.slice(0)});
                            for(j=i+1; j < auxState.length; j++){
                              if(countDesc){
                                if(auxState[aux].manufacturer < auxState[j].manufacturer) aux = j;
                              } else {
                                if(auxState[aux].manufacturer > auxState[j].manufacturer) aux = j;
                              }
                            }

                            auxState = [
                              ...auxState.slice(0, i),
                              auxState[aux],
                              ...auxState.slice(i, aux),
                              ...auxState.slice(aux+1, auxState.length)
                            ];
                            
                        }
                        this.setState({tableData: auxState.slice(0), countDesc: !countDesc, disabled: false});
                    });
                  }}
                  }
                  >
                    {
                      countDesc ?
                      <ArrowDown />
                      :
                      <ArrowUp />
                    }
                  </IconButton>
                  </div>
              </TableHeaderColumn>
              <TableHeaderColumn tooltip="Jeans's Gender" style={styles.headerColumn}>
                <div style={{display: 'flex', alignItems: 'center',}}>
                Gender
                <IconButton
                  disabled={disabled}
                  iconStyle={{color: '#FFFFFF',}}
                  onClick={() => {
                    if(tableData !== null){
                    this.setState({disabled: true}, () => {
                        let aux, auxState = tableData.slice(0), i, j;

                        for(i=0; i < auxState.length; i++){
                            aux = i;
                            if(i%23 === 0) this.setState({tableData: auxState.slice(0)});
                            for(j=i+1; j < auxState.length; j++){
                              if(countDesc){
                                if(auxState[aux].gender < auxState[j].gender) aux = j;
                              } else {
                                if(auxState[aux].gender > auxState[j].gender) aux = j;
                              }
                            }

                            auxState = [
                              ...auxState.slice(0, i),
                              auxState[aux],
                              ...auxState.slice(i, aux),
                              ...auxState.slice(aux+1, auxState.length)
                            ];
                            
                        }
                        this.setState({tableData: auxState.slice(0), countDesc: !countDesc, disabled: false});
                    });
                  }}
                  }
                  >
                    {
                      countDesc ?
                      <ArrowDown />
                      :
                      <ArrowUp />
                    }
                  </IconButton>
                  </div>
              </TableHeaderColumn>
              <TableHeaderColumn tooltip="Jeans's Size" style={styles.headerColumn}>Size</TableHeaderColumn>
              <TableHeaderColumn tooltip="Jeans's Colour" style={styles.headerColumn}>
                <div style={{display: 'flex', alignItems: 'center',}}>
                Colour
                <IconButton
                  disabled={disabled}
                  iconStyle={{color: '#FFFFFF',}}
                  onClick={() => {
                    if(tableData !== null){
                    this.setState({disabled: true}, () => {
                        let aux, auxState = tableData.slice(0), i, j;

                        for(i=0; i < auxState.length; i++){
                            aux = i;
                            if(i%23 === 0) this.setState({tableData: auxState.slice(0)});
                            for(j=i+1; j < auxState.length; j++){
                              if(countDesc){
                                if(auxState[aux].colour < auxState[j].colour) aux = j;
                              } else {
                                if(auxState[aux].colour > auxState[j].colour) aux = j;
                              }
                            }

                            auxState = [
                              ...auxState.slice(0, i),
                              auxState[aux],
                              ...auxState.slice(i, aux),
                              ...auxState.slice(aux+1, auxState.length)
                            ];
                            
                        }
                        this.setState({tableData: auxState.slice(0), countDesc: !countDesc, disabled: false});
                    });
                  }}
                  }
                  >
                    {
                      countDesc ?
                      <ArrowDown />
                      :
                      <ArrowUp />
                    }
                  </IconButton>
                  </div>
              </TableHeaderColumn>
              <TableHeaderColumn tooltip="Jeans's style" style={styles.headerColumn}>
                <div style={{display: 'flex', alignItems: 'center',}}>
                Style
                <IconButton
                  disabled={disabled}
                  iconStyle={{color: '#FFFFFF',}}
                  onClick={() => {
                    if(tableData !== null){
                    this.setState({disabled: true}, () => {
                        let aux, auxState = tableData.slice(0), i, j;

                        for(i=0; i < auxState.length; i++){
                            aux = i;
                            if(i%23 === 0) this.setState({tableData: auxState.slice(0)});
                            for(j=i+1; j < auxState.length; j++){
                              if(countDesc){
                                if(auxState[aux].style < auxState[j].style) aux = j;
                              } else {
                                if(auxState[aux].style > auxState[j].style) aux = j;
                              }
                            }

                            auxState = [
                              ...auxState.slice(0, i),
                              auxState[aux],
                              ...auxState.slice(i, aux),
                              ...auxState.slice(aux+1, auxState.length)
                            ];
                            
                        }
                        this.setState({tableData: auxState.slice(0), countDesc: !countDesc, disabled: false});
                    });
                  }}
                  }
                  >
                    {
                      countDesc ?
                      <ArrowDown />
                      :
                      <ArrowUp />
                    }
                  </IconButton>
                  </div>
              </TableHeaderColumn>
              <TableHeaderColumn tooltip="Number of sales" style={styles.headerColumn}>
                <div style={{display: 'flex', alignItems: 'center',}}>
                Count
                <IconButton
                  disabled={disabled}
                  iconStyle={{color: '#FFFFFF',}}
                  onClick={() => {
                    if(tableData !== null){
                    this.setState({disabled: true}, () => {
                        let aux, auxState = tableData.slice(0), i, j;

                        for(i=0; i < auxState.length; i++){
                            aux = i;
                            if(i%23 === 0) this.setState({tableData: auxState.slice(0)});
                            for(j=i+1; j < auxState.length; j++){
                              if(countDesc){
                                if(auxState[aux].count < auxState[j].count) aux = j;
                              } else {
                                if(auxState[aux].count > auxState[j].count) aux = j;
                              }
                            }

                            auxState = [
                              ...auxState.slice(0, i),
                              auxState[aux],
                              ...auxState.slice(i, aux),
                              ...auxState.slice(aux+1, auxState.length)
                            ];
                            
                        }
                        this.setState({tableData: auxState.slice(0), countDesc: !countDesc, disabled: false});
                    });
                  }}
                  }
                  >
                    {
                      countDesc ?
                      <ArrowDown />
                      :
                      <ArrowUp />
                    }
                  </IconButton>
                  </div>
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
            showRowHover={true}
            stripedRows={true}
          >
            {
                tableData === null ?
                <TableRow>
                    <TableRowColumn colSpan="8" style={{textAlign: 'center',}}>Loading data, please wait...</TableRowColumn>
                </TableRow>

                :

                tableData.map( (row, index) => {
                    return (
                        <TableRow key={index}>
                        <TableRowColumn>{row.date}</TableRowColumn>
                        <TableRowColumn>{row.deliveryCountry}</TableRowColumn>
                        <TableRowColumn>{row.manufacturer}</TableRowColumn>
                        <TableRowColumn>{row.gender}</TableRowColumn>
                        <TableRowColumn>{row.size}</TableRowColumn>
                        <TableRowColumn>{row.colour}</TableRowColumn>
                        <TableRowColumn>{row.style}</TableRowColumn>
                        <TableRowColumn>{row.count}</TableRowColumn>
                        </TableRow>
                    );
                })
            }

          </TableBody>
        </Table>
    );
  }
}

export default TableComponent;