import logo from './logo.svg';
import './App.css';
import toolData from './data/tools.js';
function App() {
  return (
    <div>
      <h1>阮一峰的工具推荐收集</h1>
      {
        toolData.map((tool) => {
          return (
            <div>
              <h1>{tool.name}</h1>
              <p>{tool.description}</p>
              <p>{tool.url}</p>
            </div>
          )
        }
        )
      }
    </div>
  );
}

export default App;
