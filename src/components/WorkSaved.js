import React from "react";

class WorkSaved extends React.Component {
    render() {
        return (
            <div>
                {this.props.workList.map((work) => {
                    return <div key={work.id}>
                        Company: {work.company}
                        <br></br>
                        Position: {work.position}
                        <br></br>
                        Main Tasks: {work.tasks}
                        <br></br>
                        Start date to end date: {work.years}
                        <br></br>
                        <button onClick={() => this.props.delButton(work.id)}>Remove</button>
                    </div>
                })}
            </div >
        );
    }
}

export default WorkSaved;