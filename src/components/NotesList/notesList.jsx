import { Link } from "react-router-dom";


const noteList = ({title, notes}) => {
    useFetch('http://127.0.0.1:5000/api/notes')


    if (notes && Array.isArray(notes)) {
        return (
            <div className="note-list">
                <h2>{title}</h2> 

                {notes.map((note) => (
                <Link to={`/notes/${note.id}`} style={{
                        textDecoration: "none",
                        color:"inherit"
                }}>
                    <div className="note-preview" key={note.id}>
                        <h2>{note.title}</h2>
                        <p>{note.text}</p>
                    </div>           
                </Link>
                   ))}
            </div>
        );
    } else if (notes && notes.error) {
        // Display an error message if there is an error
        return <p style={errorMessage}>Error: {notes.error}</p>;
    } else {
        // If notes is not an array, handle accordingly
        return <p style={errorMessage}>No notes available.</p>;
    }
};

export default noteList;