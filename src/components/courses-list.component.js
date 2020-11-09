import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ShowCourse from './show-course.component';


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
      <Link to={"/schedule/"}><button name="add" value="`+ item.id + `">Add Class </button></Link>
    </pre>
  </div>
)

export default class CoursesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: []
      , filter: "allFields"
      , search: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      return <ShowCourse course={currentcourse} key={currentcourse._id} />;
    })
  }
  handleSubmit(event) {
    //alert('Your filter is: ' + this.state.filter+"Your search is: "+this.state.search);

    if (this.state.filter === "allFields") {
      let filteredcourses = this.state.courses.filter(currentsave => currentsave['Subj'].toLowerCase()
      .includes(this.state.search.toLowerCase())|| currentsave['CRS'].toLowerCase()
      .includes(this.state.search.toLowerCase())|| currentsave['Title'].toLowerCase()
      .includes(this.state.search.toLowerCase())|| currentsave['Cmp'].toLowerCase()
      .includes(this.state.search.toLowerCase())|| currentsave['Sctn'].toLowerCase()
      .includes(this.state.search.toLowerCase())|| currentsave['Days'].toLowerCase()
      .includes(this.state.search.toLowerCase())|| currentsave['Start Time'].toLowerCase()
      .includes(this.state.search.toLowerCase())|| currentsave['End Time'].toLowerCase()
      .includes(this.state.search.toLowerCase())|| currentsave['Mtg Start Date'].toLowerCase()
      .includes(this.state.search.toLowerCase())|| currentsave['Mtg End Date'].toLowerCase()
      .includes(this.state.search.toLowerCase())|| currentsave['Duration'].toLowerCase()
      .includes(this.state.search.toLowerCase())|| currentsave['Instruction Mode'].toLowerCase()
      .includes(this.state.search.toLowerCase())|| currentsave['Building'].toLowerCase()
      .includes(this.state.search.toLowerCase())|| currentsave['Room'].toLowerCase()
      .includes(this.state.search.toLowerCase())|| currentsave['Instr'].toLowerCase()
      .includes(this.state.search.toLowerCase())|| currentsave['Enrl Cap'].toLowerCase()
      .includes(this.state.search.toLowerCase())|| currentsave['Wait Cap'].toLowerCase()
      .includes(this.state.search.toLowerCase())|| currentsave['Cmbnd Descr'].toLowerCase()
      .includes(this.state.search.toLowerCase())|| currentsave['Cmbnd Enrl Cap'].toLowerCase()
      .includes(this.state.search.toLowerCase()))

      this.setState({
        courses: filteredcourses
  
      });
  } else if (this.state.filter === "courseNum") {
    let filteredcourses = this.state.courses.filter(currentsave => currentsave['CRS'].toLowerCase()
    .includes(this.state.search.toLowerCase()))
    this.setState({
      courses: filteredcourses

    });
  } else if (this.state.filt=== "courseName") {
    let filteredcourses = this.state.courses.filter(currentsave => currentsave['Title'].toLowerCase()
    .includes(this.state.search.toLowerCase()))
    this.setState({
      courses: filteredcourses

    });
  } else if (this.state.filter === "instructor") {
    let filteredcourses = this.state.courses.filter(currentsave => currentsave['Instr'].toLowerCase()
    .includes(this.state.search.toLowerCase()))
    this.setState({
      courses: filteredcourses

    });
  } else if (this.state.filter === "day"){
    let filteredcourses = this.state.courses.filter(currentsave => currentsave['Days'].toLowerCase()
    .includes(this.state.search.toLowerCase()))
    this.setState({
      courses: filteredcourses

    });
  } else if (this.state.filter === "time"){
    let filteredcourses = this.state.courses.filter(currentsave => currentsave['Start Time'].toLowerCase()
    .includes(this.state.search.toLowerCase())|| currentsave['End Time'].toLowerCase()
    .includes(this.state.search.toLowerCase()))
    this.setState({
      courses: filteredcourses

    });
  }


    event.preventDefault();
  }

  handleChange(e) {
    this.setState({
      search: e.target.value

    });

  }
  handleSelect(event) {
    
    this.setState({filter: event.target.value});
    
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input name="keyword"
          placeholder="Search"
          value={this.state.search}
          onChange={this.handleChange}
        />

        <b>in</b>
        <select value={this.state.filter} onChange={this.handleSelect}>
          <option value="allFields">All Fields</option>
          <option value="courseName">Course Title</option>
          <option value="courseNum">Course Num</option>
          <option value="instructor">Instructor</option>
          <option value="day">Day</option>
          <option value="time">Time</option>
        </select>
        <input type="submit" value="Submit" />
        </form>
        <h3>Courses</h3>

        { this.courseList()}

      </div>
    )
  }
}