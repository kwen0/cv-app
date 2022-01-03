import React from "react";

class Contact extends React.Component {
    render() {
        return <div>
            <form onSubmit={this.props.handleSubmit}>
                Name:
                <input
                    type="text"
                    onChange={this.props.handleChange}
                    value={this.props.contact.name}
                    id="name" required />
                Email:
                <input
                    type="email"
                    onChange={this.props.handleChange}
                    value={this.props.contact.email}
                    id="email" required />
                Phone number:
                <input
                    type="tel"
                    onChange={this.props.handleChange}
                    value={this.props.contact.phone}
                    id="phone" required />
                <button type="submit">Save</button>
            </form>
        </div >
    }
}

export default Contact;