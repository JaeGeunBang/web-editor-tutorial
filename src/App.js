import logo from './logo.svg';
import './App.css';
import Quill from "./Quill";
import DraftJs from "./DraftJs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        1. Quill
        <Quill />
        <br /><br/>
        2. DraftJs
        <DraftJs />
      </header>
    </div>
  );
}

export default App;
