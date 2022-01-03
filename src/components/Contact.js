import React from "react";

class Contact extends React.Component {
    render() {
        return <div>
            <div className="section-title">Contact Information</div>
            Name:
            <input
                type="text"
                onChange={this.props.handleChange}
                value={this.props.contact.name}
                id="name" />
            <br></br>
            Email:
            <input
                type="email"
                onChange={this.props.handleChange}
                value={this.props.contact.email}
                id="email" />
            <br></br>
            Phone number:
            <input
                type="tel"
                onChange={this.props.handleChange}
                value={this.props.contact.phone}
                id="phone" />
            <br></br>
        </div >
    }
}

export default Contact;