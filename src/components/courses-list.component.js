import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Course = props => (
    <div>
    <button type="button" className="toggle">CSE {props.course.CRS} - {props.course.Title} - 
    {props.course.Cmp}{props.course.Sctn} </button>
    <pre>
    Days: {props.course.Days}<br></br>
    Start Time: {props.course['Start Time']}<br></br>
    End Time: {props.course['End Time']}<br></br>
    Start Date: {props.course['Mtg Start Date']}<br></br>
    End Date: {props.course['Mtg End Date']}<br></br>
    Duration: {props.course['Duration']}<br></br>
    Instruction Mode: {props.course['Instruction Mode']}<br></br>
    Building: {props.course.Building}<br></br>
    Room: {props.course['Room']}<br></br>
    Instructor: {props.course['Instr']}<br></br>
    Enrollment Capacity: {props.course['Enrl Cap']}<br></br>
    Wait Capacity: {props.course['Wait Cap']}<br></br>
    Combined Description: {props.course['Cmbnd Descr']}<br></br>
    Combined Enrollment Cap: {props.course['Cmbnd Enrl Cap']}<br></br>
    <Link to={"/shedule/"}>Add</Link>
    </pre>
    </div>
)

export default class CoursesList extends Component {
  constructor(props) {
    super(props);

    this.state = { courses: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/courses/')
      .then(response => {
        this.setState({ courses: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

 

  courseList() {
    return this.state.courses.map(currentcourse => {
      return <Course course={currentcourse}  key={currentcourse._id} />;
    })
  }

  render() {
    return (
      <div>
        <h3>Courses</h3>

        { this.courseList()}

      </div>
    )
  }
}