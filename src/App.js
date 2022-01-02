import React,{useState} from "react";
import './App.css';
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [length, setLength] = useState(0)
  if(search.length !== length){
    axios.get("http://localhost:8000/search?search="+search).then(res=>{
      setData(res.data)
    }).catch(err=>{
      console.log(err)
    })
    setLength(search.length);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input type="text" placeholder="search" className="search-input" value={search} onChange={(e)=>setSearch(e.target.value)}/>
          <div className="main-content">
              <p className="content-text" >Search Results</p>
              <hr style={{margin:"0",padding:"0"}}/>
              {
                length !==0  ? 
                  data.map((data, index)=>{
                    return(
                      <p className="content-text" key={index}>{data["Search Terms"]}</p>
                    )
                }):<p className="content-text">No data</p>
              }
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
