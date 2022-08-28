import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import "./App.css";
import Joke from "./jokes/Joke/index";
import MathFact from "./maths/MathFact/index";

const Menu= ()=>{
  return(
    <div>
      <h1>Home</h1>
      <br/>
      <nav>
      <Link to="/joke">Joke</Link>
      &ensp;&ensp;&ensp;&ensp;
      <Link to="/math">Math</Link>
      </nav>
    </div>
  )
}



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Menu/>}/>
          <Route path="joke" element={<Joke />} />
          <Route path="math" element={<MathFact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
