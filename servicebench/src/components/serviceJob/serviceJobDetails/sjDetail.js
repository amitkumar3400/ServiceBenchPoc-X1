import React, { Component } from 'react';
import serviceJobService from '../../../services/serviceJob.service';
const data2 = {};
class SjDetail extends Component {
        constructor() {
          super();
          this.setStateFromApiResult = this.setStateFromApiResult.bind(this);
          this.state = {
            data: {},
            serviceJobNumber:''
          };
        }
    componentDidMount() {
        const serviceJobNumber = this.props.history.location.state.serviceJobNumber
        console.log("service job number before fetch");
        console.log(serviceJobNumber);
        serviceJobService.getAllServicejobBySjnumber(serviceJobNumber).then((data) => {
            this.setStateFromApiResult(data);
        });
               // fetch(`http://localhost:3007/ServiceJobs?serviceJobNumber=${serviceJobNumber}`)
        //     .then(result => result.json())
        //     .then(result => {
        //         this.setState({
        //             data: {...result}

        //         })
        //     });

    }
        setStateFromApiResult = function (data1) {
            console.log("data from api call", data1);
            if (data1 != undefined) {
              this.setState({
                data: data1
              });
        
            }
          }

     render() {
        var { data } = this.state;
        //    const {data2}=data[0];
        console.log("data avialble in render ", data);
        console.log("service job number in render ");
        if (data[0] != undefined) {
            console.log(data[0].serviceJobNumber);
            data = data[0];
            console.log("data copied", data);
        }

        return (
            <div>
                <div><button className="btn btn-primary" onClick={this.props.history.goBack}>Go Back</button></div>
                <div className='container'>
                    <table className='table .table-striped'>
                        <tbody>
                            <tr>
                                <td ><label >Service Job Number</label></td>
                                <td>{data.serviceJobNumber}</td>
                                <td>Service Job Type</td>
                                <td>{data.serviceJobType}</td>
                            </tr>

                            <tr>
                                <td>Service Job Date</td>
                                <td>{data.serviceJobDate}</td>
                                <td>Scheduled ServiceJob Date</td>
                                <td>{data.scheduledServiceJobDate}</td>
                            </tr>                            
                            <tr>
                                <td>First Name</td>
                                <td>{data.customerFirstName}</td>
                                <td>Last name</td>
                                <td>{data.customerLastName}</td>
                            </tr>
                            <tr>
                                <td>Mobile Phone</td>
                                <td>{data.mobilePhone}</td>
                                <td>Home Phone</td>
                                <td>{data.homePhone}</td>
                            </tr>
                            <tr>
                                <td>City</td>
                                <td>{data.city}</td>
                                <td>State</td>
                                <td>{data.state}</td>
                            </tr>
                            <tr>
                                <td>Postal Code</td>
                                <td>{data.postalCode}</td>
                                <td>Addrerss Line 1 </td>
                                <td>{data.addLine1}</td>
                            </tr>
                            <tr>
                                <td>Address Line 2</td>
                                <td>{data.addLine2}</td>
                                <td>Addrerss Line 3 </td>
                                <td>{data.addLine3}</td>
                            </tr>
                          
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default SjDetail;