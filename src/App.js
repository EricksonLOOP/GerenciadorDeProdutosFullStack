import React from 'react';
import Post from "./components/postForm";
import ControllerAll from "./components/ControllerAll";
import "./estilos/index.css"

function App() {
  return (
    <div className='container-grid'>
      <div className='grid1'>
        <Post />
      </div>
      <div className='grid2'>
        <ControllerAll />
      </div>
    </div>
  );
}

export default App;
