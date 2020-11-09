import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Save = props => (
  <div>
    {props.save['StartTime']} - {props.save['EndTime']}<br></br>
    {props.save['Subject']} {props.save['Course']}-{props.save['Section']}<br></br>
    {props.save['CourseName']}<br></br>
    {props.save['Instructor']}<br></br><br /><br />
  </div>
)



export default class Schedule extends Component {
  constructor(props) {
    super(props);

    this.state = { saves: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/saves/')
      .then(response => {
        this.setState({ saves: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }



  saveList(day) {
    let filteredSave = this.state.saves.filter(currentsave => currentsave.Days.includes(day))
    filteredSave.sort(function(a, b) {
      if (a.TwentyFourFormat < b.TwentyFourFormat) {
        return -1;
      }
      if (a.TwentyFourFormat > b.TwentyFourFormat) {
        return 1;
      }
      return 0;
    });

    
    return filteredSave.map(currentsave => {
      return <Save save={currentsave} key={currentsave._id} />;
    })
  }

  render() {
    return (
      <div>

        <h1> Schedule </h1>

        <table>
          <tbody>
            <tr>
              <th> Mon </th>
              <th> Tue </th>
              <th> Wed </th>
              <th> Thu </th>
              <th> Fri </th>
            </tr>
            <tr>
              <td> {this.saveList("M")} </td>
              <td> {this.saveList("TU")} </td>
              <td> {this.saveList("W")} </td>
              <td> {this.saveList("TH")}</td>
              <td> {this.saveList("F")}</td>
            </tr>
          </tbody>
        </table>

      </div>
    )
  }
}