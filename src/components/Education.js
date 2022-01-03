import React from "react";

class Education extends React.Component {
    render() {
        return <div>
            <div className="section-title">Education</div>
            School:
            <input
                type="text"
                onChange={this.props.handleChange}
                value={this.props.edu.school}
                id="school" />
            <br></br>
            Major:
            <input
                type="email"
                onChange={this.props.handleChange}
                value={this.props.edu.major}
                id="major" />
            <br></br>
            Years attended:
            <input
                type="text"
                onChange={this.props.handleChange}
                value={this.props.edu.years}
                id="years" />
            <br></br>
        </div >
    }
}

export default Education;