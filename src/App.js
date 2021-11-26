import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState('')
  return <div className="App">My boilerplate
    <div data-testid='myTest'>
      {`Hello, ${name || 'my friend'}`}
    </div>
    <input type='text' value={name} onChange={e => setName(e.target.value)} />
  
  </div>;
}

export default App;
