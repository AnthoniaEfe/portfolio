import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./output.css";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      {/*  Routing of pages*/}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;