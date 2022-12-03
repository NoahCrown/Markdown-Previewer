import './App.css';
import {useState} from 'react';
import {marked} from 'marked';

function App() {
  const [editorText, setEditorText] = useState('');

  function handleOnChange(event) {
    setEditorText(event.target.value)
  }

  return (
    <div className="App">
      <textarea 
      id="editor" 
      onChange={handleOnChange}
      value={editorText}
      ></textarea>

      <div 
      id="preview"
      dangerouslySetInnerHTML={{ __html: marked(editorText) }}
      >
      </div>
    </div>
  );
}

export default App;
