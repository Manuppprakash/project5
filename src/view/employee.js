import React, {Component} from 'react';

class Employee extends Component{
    constructor(){
        super();
        this.state={
        dalalist:[],
        clientId:'',
        firstName:'',
        middleName:'',
        lastName: '',
        dateOfBirth:'',
        identityInfo:''
    }
}

processClientid = (obj) =>{
    this.setState({
        clientId:obj.target.value
    })
}

processFirstname = (obj) =>{
    this.setState({
        firstName:obj.target.value
    })
}

processMiddlename = (obj) =>{
    this.setState({
        middleName:obj.target.value
    })
}

processLastname = (obj) =>{
    this.setState({
        lastName:obj.target.value
    })
}

processDateofbirth = (obj) =>{
    this.setState({
        dateOfBirth:obj.target.value
    })
}


postData = () =>{
    alert('oks')
}

    render(){
        return   <div className="container">
                     <div className="row mt-5">
                         <div className="col-md-12 bg-light text-center p-5">
                             <h3>ADMIN UTILITY</h3>
                         </div>
                     </div>
                     <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8 text-center mt-5 mb-5">
                            <h4>SEARCH CLIENT DETAILS</h4>
                        </div>
                        <div className="col-md-2"></div>
                     </div>
                     <div className="row">
                        <div className="col-md-1"></div>
                        
                        <div className="col-md-10 bg-secondary p-3 pl-4 pr-4">
                            <div className="bg-white p-3 ">
                            <div className="form-group">
                               <label>Do you already have a Will & More Customer Id?</label><br/>
                               <td>
                                 <input type="radio" name="customer" value="y" />Yes
                                 <input type="radio" name="customer" value="N" />No
                               </td>
                            </div>
                            <div className="form-group">
                                <h3>Details of deceased:</h3>
                            </div>
                            <div className="form-group">
                                <div className="row form-group">
                                    <div className="col-md-4">
                                        <label>Client Id (if in possession)</label>
                                        <input type="text"  className="form-control" onChange={this.processClientid} value={this.state.clientId}/>
                                    </div>
                                    <div className="col-md-4"></div>
                                    <div className="col-md-4"></div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-4">
                                        <label>First Name <b className="color">*</b></label>
                                        <input type="text"  className="form-control" onChange={this.processFirstname} value={this.state.firstName}/>
                                    </div>
                                    <div className="col-md-4">
                                    <label>Middle Name</label>
                                        <input type="text"  className="form-control" onChange={this.processMiddlename} value={this.state.middleName}/> 
                                    </div>
                                    <div className="col-md-4">
                                    <label>Surname <b className="color">*</b></label>
                                        <input type="text"  className="form-control" onChange={this.processLastname} value={this.state.lastName}/>
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-4">
                                        <label>Date of birth <b className="color">*</b></label>
                                        <input type="date"  className="form-control" onChange={this.processDateofbirth} value={this.state.dateOfBirth}/>
                                    </div>
                                    <div className="col-md-4">
                                    <label>Aadhaar no(OR)Passport (OR)PAN <b className="color">*</b></label>
                                        <select  className="form-control">
                                            <option>Aadhar</option>
                                            <option>Passport</option>
                                            <option>PAN</option>
                                        </select>     
                                    </div>
                                    <div className="col-md-4 mt-2">
                                         <label></label>
                                        <input type="text"  className="form-control"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        </div>
                             
                        <div className="col-md-1"></div>
                     </div>
                     <div className="row ">
                         <div className="col-md-1"></div>
                         <div className="col-md-10 text-center mt-5">
                              <button className="btn btn-primary " onClick={ () => this.postData()}>Save & Next</button>
                         </div>
                         <div className="col-md-1"></div>
                        
                     </div>
                </div>
    }
}

export default Employee;