import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

import MButton from "./MButton/MButton";
import MInput from "./MInput/MInput";
import MSelect from "./MSelect/MSelect";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MButton />}></Route>
          <Route path="/button" element={<MButton />}></Route>
          <Route path="/input" element={<MInput />}></Route>
          <Route path="/select" element={<MSelect />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
