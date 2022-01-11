import React, { useState } from "react";

function Work() {
    const [workList, setWorkList] = useState([])
    const [work, setWork] = useState({
        id: Date.now().toString(),
        company: '',
        position: '',
        tasks: '',
        years: '',
    })

    const [editMode, setEditMode] = useState(false)
    const [currentWork, setCurrentWork] = useState({})

    function handleChange(e) {
        setWork({ ...work, [e.target.id]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        setWorkList([...workList, work])
        setWork({
            id: Date.now().toString(),
            company: '',
            position: '',
            tasks: '',
            years: '',
        })
    }

    function removeWork(id) {
        setWorkList(workList.filter(work => work.id !== id))
    }

    function editWork(work) {
        setEditMode(true)
        setCurrentWork(work)
    }

    function handleEditInputChange(e) {
        setCurrentWork({ ...currentWork, [e.target.id]: e.target.value })
    }

    function handleUpdateWork(id, updatedWork) {
        setEditMode(false)
        setWorkList(workList.map((work) => { return work.id === id ? updatedWork : work }))
    }

    function handleEditSubmit(e) {
        e.preventDefault();
        handleUpdateWork(currentWork.id, currentWork)
    }

    return (
        <div>
            <div className="section-title">Work Experience</div>
            {editMode ?
                <form onSubmit={handleEditSubmit}>
                    Company: <input type="text"
                        value={currentWork.company}
                        id="company"
                        onChange={handleEditInputChange} />
                    <br></br>
                    Position: <input type="text"
                        value={currentWork.position}
                        id="position"
                        onChange={handleEditInputChange} />
                    <br></br>
                    Main Tasks: <textarea
                        value={currentWork.tasks}
                        id="tasks"
                        onChange={handleEditInputChange} />
                    <br></br>
                    Start Date to End Date: <input type="text"
                        value={currentWork.years}
                        id="years"
                        onChange={handleEditInputChange} />
                    <br></br>
                    <button type="submit">Save</button>
                    <button onClick={() => setEditMode(false)}>Cancel</button>
                </form> :
                <form onSubmit={handleSubmit}>
                    Company: <input type="text"
                        value={work.company}
                        id="company"
                        onChange={handleChange} />
                    <br></br>
                    Position: <input type="text"
                        value={work.position}
                        id="position"
                        onChange={handleChange} />
                    <br></br>
                    Main Tasks: <textarea
                        value={work.tasks}
                        id="tasks"
                        onChange={handleChange} />
                    <br></br>
                    Start Date to End Date: <input type="text"
                        value={work.years}
                        id="years"
                        onChange={handleChange} />
                    <br></br>
                    <button>Add</button>
                </form>}
            <div>
                {workList.map(work => (
                    <div key={work.id}>
                        Company: {work.company}
                        <br></br>
                        Position: {work.position}
                        <br></br>
                        Main Tasks: {work.tasks}
                        <br></br>
                        Start Date to End Date: {work.years}
                        <br></br>
                        <button onClick={() => editWork(work)}>Edit</button>
                        <button onClick={() => removeWork(work.id)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Work;