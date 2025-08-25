import { useEffect, useState } from 'react';
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/components/prism-jsx.min";
import axios from 'axios';
import './App.css';
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

function App() {
  const [code, setCode] = useState(`function add(a, b) {
  return a + b;
}`);

  const [review, setReview] = useState('');

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  async function reviewCode() {
    try {
const response = await axios.post(`${import.meta.env.VITE_API_URL}/ai/generate-content`, { prompt: code });      setReview(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => Prism.highlight(code, Prism.languages.jsx, 'jsx')}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
               
              }}
            />
          </div>
          <div onClick={reviewCode} className="review-btn">
            Review
          </div>
        </div>
        <div className="right">
          <Markdown rehypePlugins={[rehypeHighlight]}>
            {review}
          </Markdown>
        </div>
      </main>
    </>
  );
}

export default App;