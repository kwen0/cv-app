import React from "react";

class Education extends React.Component {
    render() {
        return <div>

            <form onSubmit={this.props.handleSubmit}>
                School:
                <input
                    type="text"
                    onChange={this.props.handleChange}
                    value={this.props.edu.school}
                    id="school" />
                <br></br>
                Major:
                <input
                    type="text"
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
                <button>Save</button>
            </form>
        </div>
    }
}

export default Education;