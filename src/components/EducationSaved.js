import React from "react";

class EducationSaved extends React.Component {
    render() {
        return (
            <div>
                {this.props.eduList.map((edu) => {
                    return <div>
                        School: {edu.school}
                        <br></br>
                        Major: {edu.major}
                        <br></br>
                        Years attended: {edu.years}
                        <br></br>
                        <button onClick={() => this.props.editButton(edu.id)}>Edit</button>
                        <button onClick={() => this.props.delButton(edu.id)}>Remove</button>
                    </div>
                })}
            </div >
        );
    }
}

export default EducationSaved;