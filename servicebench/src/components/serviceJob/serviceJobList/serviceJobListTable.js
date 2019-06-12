import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

const data =[];
class ServiceJobListTable extends Component {
    state = {
        data: []
    };
    
    componentDidMount() {
        const url = "http://localhost:3007/ServiceJobs";

        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result
                })
            });
    }


  removeItem = itemId => {
    this.setState({
      data: data.filter(item => item.id !== itemId)
    });
  }

  render() {
    const { data } = this.props;
    const options = {
      sizePerPage: 20,
      prePage: 'Previous',
      nextPage: 'Next',
      firstPage: 'First',
      lastPage: 'Last',
      hideSizePerPage: true,
    };

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="header">
                <h4>Latest Service jobs</h4>                
              </div>
              <div className="content">
                <BootstrapTable
                data={data}
                  bordered={false}
                  striped
                  pagination={true}
                  options={options}>
                  <TableHeaderColumn
                    dataField='serviceJobNumber'
                    isKey
                    width="12%"
                    dataSort
                    >
                    Service Job Number
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='serviceJobType'
                    width="15%"
                    filter={ { type: 'TextFilter'} }
                    dataSort>
                    Service Job Type
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='serviceJobDate'
                    width="15%"
                    dataSort>
                    Service Job Date
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='customerFirstName'
                    filter={ { type: 'TextFilter'} }
                    width="15%"
                    dataSort>
                    First Name
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='customerLastName'
                    filter={ { type: 'TextFilter'} }
                    width="15%">
                    Last Name
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='scheduledServiceJobDate'
                    width="30%">
                    Scheduled Service Job Date
                  </TableHeaderColumn>
                  <TableHeaderColumn width="20%"></TableHeaderColumn>
                </BootstrapTable>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
export default ServiceJobListTable