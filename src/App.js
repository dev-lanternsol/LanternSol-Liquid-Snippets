import { useState } from "react";
import { liquidSnippets } from "./liquid_snippets";
import logo from './logo.svg';
import Accordion from "./accordion";
import Tags from "./tags";
import './App.css';

function App() {
  const [query, setQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const keys = ["title", "description"];

  const search = (data) => {
    return data.filter((item) => {
      const matchesQuery = keys.some(key =>
        item[key]?.toLowerCase().includes(query.toLowerCase())
      );
      const matchesTags = selectedTags.length === 0 || selectedTags.every(tag =>
        item.tags.includes(tag)
      );
      return matchesQuery && matchesTags;
    });
  };

  return (
    <div className="App">
      <nav className="navbar bg-info-subtle">
        <div className="container-fluid py-3 px-5">
          <a className="navbar-brand mx-auto mb-3 m-md-0" href="https://www.lanternsol.com/" target="_blank" rel="noopener noreferrer">
            <img className="img-fluid" src={logo} alt="lanternsol" width="200" height="40"/>
          </a>
          <div className="hstack gap-3">
            <a href="https://shopify.github.io/liquid/" target="_blank" rel="noreferrer" className="btn btn-outline-success">Liquid documentation</a>
            <a href="https://www.freeformatter.com/json-escape.html#before-output" target="_blank" rel="noreferrer" className="btn btn-outline-primary">Markup JSON formatter</a>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="card mt-3">
          <p className="text-start px-3 pt-4 p-md-5 pb-0">Perform a search between all the liquid snippets.</p> 
          <div className="input-group mx-auto px-3 pb-3 pt-0 px-md-5 pb-md-4 pt-md-0">
            <span className="input-group-text">Topic</span> 
            <input 
              type="text"
              placeholder="Search..."
              className="form-control"
              onChange={(e) => setQuery(e.target.value)} 
            />
          </div>
          <div>
            <Tags data={ liquidSnippets } onTagSelect={setSelectedTags}/>
          </div>
        </div>
      </div>
      <div className="container p-3">
        <Accordion data={ search(liquidSnippets) }/> 
      </div>
    </div>
  );
}

export default App;
