import React, { Component } from 'react';

export default class ReferralTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entities: {
        data: [],
      },
    };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/referrer')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          data: json,
        })
      });
  }

  render(){
    var { isLoaded, data} = this.state;
    if (!isLoaded) {
      return (
        <div className="container">
          <div className="row justify-content-left">
            <div className="card">
              <div className="card-header">Referrer</div>
              <div className="card-body">
                <p>No referrer...</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="container">
          <div className="row justify-content-left">
            <div className="card">
              <div className="card-header">Referrer</div>
              <div className="card-body">
                <table striped bordered hover border = "1" responsive>
                  <thead>
                    <tr> <th style={{padding: '10px 35px 10px 15px'}}>Id No.</th>
                    <th style={{padding: '10px 35px 10px 10px'}}>Name</th>
                    <th style={{padding: '10px 35px 10px 10px'}}>Email</th> </tr>
                  </thead>
                  <tbody>
                  {data.map(user =>(
                    <tr> <td style={{padding: '10px 35px 10px 15px'}}> {user.id}</td>
                    <td style={{padding: '10px 35px 10px 15px'}}> {user.name} </td>
                    <td style={{padding: '10px 35px 10px 15px'}}> {user.email} </td> </tr>
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}
