import React from "react";

class Work extends React.Component {
    render() {
        return <div>
            <form onSubmit={this.props.handleSubmit}>
                Company:
                <input
                    type="text"
                    onChange={this.props.handleChange}
                    value={this.props.work.company}
                    id="company" />
                <br></br>
                Position:
                <input
                    type="text"
                    onChange={this.props.handleChange}
                    value={this.props.work.position}
                    id="position" />
                <br></br>
                Main Tasks:
                <textarea
                    type="text"
                    onChange={this.props.handleChange}
                    value={this.props.work.tasks}
                    id="tasks" />
                <br></br>
                Start date to end date:
                <input
                    type="text"
                    onChange={this.props.handleChange}
                    value={this.props.work.years}
                    id="years" />
                <br></br>
                <button>Save</button>
            </form>
        </div>
    }
}

export default Work;