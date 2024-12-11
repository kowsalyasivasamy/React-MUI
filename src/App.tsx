import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MButton from "./MButton/MButton";
import MInput from "./MInput/MInput";
import MSelect from "./MSelect/MSelect";
import MRadio from "./MRadio/MRadio";
import MCheckbox from "./MCheckbox/MCheckbox";
import MForm1 from "./MForm1/MForm1";

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
          <Route path="/checkbox" element={<MCheckbox />} />
          <Route path="/form1" element={<MForm1 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
