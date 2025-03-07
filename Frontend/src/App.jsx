import { useEffect } from 'react';
import "prismjs/themes/prism-tomorrow.css";
import Prism from "prismjs";
import './App.css';

function App() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <pre>
              <code className="language-javascript">
                {`
                  function add() {
                    return 1 + 1;
                  }
                `}
              </code>
            </pre>
          </div>
          <div className="review-btn">
            Review
          </div>
        </div>
        <div className="right">
          {/* Add content here */}
        </div>
      </main>
    </>
  );
}

export default App;