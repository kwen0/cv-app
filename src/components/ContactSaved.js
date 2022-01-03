import React from "react";

class ContactSaved extends React.Component {
    render() {
        return <div>
            <div className="section-title">Contact Information</div>
            Name: {this.props.contact.name}
            <br></br>
            Email: {this.props.contact.email}
            <br></br>
            Phone number:
            {this.props.contact.phone}
            <br></br>
        </div >
    }
}

export default ContactSaved;