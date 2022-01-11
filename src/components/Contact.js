import React, { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [editMode, setEditMode] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault();
        setEditMode(false)
    }

    return (
        <div>
            <p className="section-title">Contact Information</p>
            {editMode ? <div>
                <form onSubmit={handleSubmit}>

                    <label>Name:
                        <input type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label><br></br>
                    <label>Email:
                        <input type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label><br></br>
                    <label>Phone:
                        <input type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </label><br></br>
                    <button>Save</button>
                </form>
            </div > :
                <div>
                    Name: {name} <br></br>
                    Email: {email}<br></br>
                    Phone: {phone}<br></br>
                    <button onClick={() => setEditMode(true)}>Edit</button>
                </div>
            }
        </div >
    )
}
export default Contact;