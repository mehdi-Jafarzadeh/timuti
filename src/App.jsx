import './App.css';
import { Routes , Route } from 'react-router-dom'
import Landing from './landing';
import Post from './Post/Post';

function App() {

  return (
    <div className="App">

<Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/post" element={<Post/>} />
    </Routes>
    </div>
  );
}

export default App;