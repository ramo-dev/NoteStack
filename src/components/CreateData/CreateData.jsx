import './CreateStyles.css'

const CreateData = () => {
    return ( 
        <div className='container'>
            <div className="notesbar">
            <div className="note-preview">
                    <h1>Buy Groceries</h1>
                    <p>Got to the grocery store and get...</p>
                </div>
            </div>
            <div className="note-create">
                <input className='title' placeholder='Enter Title of note...'></input>
                    <textarea className='note' placeholder='Enter note...'></textarea>
                <div className="actions">
                <button className="delete">Delete note</button>
                    <button className="add">Add note</button>
                </div>
            </div>
        </div>
     );
}
 
export default CreateData;