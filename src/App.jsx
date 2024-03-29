import {Route, Routes } from 'react-router-dom'
import Home from './routes/Home';
import About from  './routes/About';
import Create from './routes/Create'
import Notes from './routes/Notes';
const App = () => {
  return ( 
    <div className="App">
      <Routes>
        <Route>
            <Route exact path="/" element={<Home />} />
            <Route  path="/about" element={<About />} />
            <Route  path="/create" element={<Create />} />
            <Route  path="/notes" element={<Notes />} />
        </Route>
      </Routes>
      
    </div>
   );
}
 
export default App;