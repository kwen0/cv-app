import React, { useState } from 'react';

function Education() {
    const [eduList, setEduList] = useState([]);
    const [edu, setEdu] = useState({
        id: Date.now().toString(),
        school: '',
        major: '',
        years: ''
    })

    function handleChange(e) {
        setEdu({
            ...edu, [e.target.id]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        setEduList([...eduList, edu]);
        setEdu({
            id: Date.now().toString(),
            school: '',
            major: '',
            years: ''
        })
    }

    const [editMode, setEditMode] = useState(false)
    const [currentEdu, setCurrentEdu] = useState({});

    function removeEdu(id) {
        setEduList(eduList.filter(edu => edu.id !== id))
    }

    function editEdu(edu) {
        setEditMode(true)
        setCurrentEdu({ ...edu })
    }

    function handleEditInputChange(e) {
        setCurrentEdu({ ...currentEdu, [e.target.id]: e.target.value })
    }

    function handleUpdateEdu(id, updatedEdu) {
        setEditMode(false)
        setEduList(eduList.map((edu) => {
            return edu.id === id ? updatedEdu : edu
        }))
    }

    function handleEditSubmit(e) {
        e.preventDefault();
        handleUpdateEdu(currentEdu.id, currentEdu)
    }

    return (
        <div>
            <div className="section-title">Education</div>
            {editMode ?
                <form onSubmit={handleEditSubmit}>
                    School: <input type="text"
                        value={currentEdu.school}
                        id="school"
                        onChange={handleEditInputChange} />
                    <br></br>
                    Major: <input type="text"
                        value={currentEdu.major}
                        id="major"
                        onChange={handleEditInputChange} />
                    <br></br>
                    Years attended: <input type="text"
                        value={currentEdu.years}
                        id="years"
                        onChange={handleEditInputChange} />
                    <br></br>
                    <button type="submit">Save</button>
                    <button onClick={() => setEditMode(false)}>Cancel</button>
                </form> :
                <form onSubmit={handleSubmit}>
                    School: <input type="text"
                        value={edu.school}
                        id="school"
                        onChange={handleChange} />
                    <br></br>
                    Major: <input type="text"
                        value={edu.major}
                        id="major"
                        onChange={handleChange} />
                    <br></br>
                    Years attended: <input type="text"
                        value={edu.years}
                        id="years"
                        onChange={handleChange} />
                    <br></br>
                    <button>Add</button>
                </form>}
            <div>
                {eduList.map(edu => (
                    <div key={edu.id}>
                        School: {edu.school}
                        <br></br>
                        Major: {edu.major}
                        <br></br>
                        Years attended: {edu.years}
                        <br></br>
                        <button onClick={() => editEdu(edu)}>Edit</button>
                        <button onClick={() => removeEdu(edu.id)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Education;
