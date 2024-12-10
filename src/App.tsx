import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

import MButton from "./MButton/MButton";
import MInput from "./MInput/MInput";
import MSelect from "./MSelect/MSelect";
import MRadio from "./MRadio/MRadio";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MButton />} />
          <Route path="/button" element={<MButton />} />
          <Route path="/input" element={<MInput />} />
          <Route path="/select" element={<MSelect />} />
          <Route path="/radio" element={<MRadio />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
