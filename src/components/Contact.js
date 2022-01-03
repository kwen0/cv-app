import React from "react";

class Contact extends React.Component {
    render() {
        return <div>
            <div className="section-title">Contact Information</div>
            <form onSubmit={this.props.handleSubmit}>
                Name:
                <input
                    type="text"
                    onChange={this.props.handleChange}
                    value={this.props.contact.name}
                    id="name" required />
                <br></br>
                Email:
                <input
                    type="email"
                    onChange={this.props.handleChange}
                    value={this.props.contact.email}
                    id="email" required />
                <br></br>
                Phone number:
                <input
                    type="tel"
                    onChange={this.props.handleChange}
                    value={this.props.contact.phone}
                    id="phone" required />
                <br></br>
            </form>
        </div >
    }
}

export default Contact;