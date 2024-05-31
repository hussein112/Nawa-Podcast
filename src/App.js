import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Kayan from "./components/Kayan/Kayan";
import PodcastSingle from "./components/PodcastSingle/PodcastSingle"
import { PopupProvider } from "./context/PopUpContext";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="home" element={
          <PopupProvider>
            <Home />
          </PopupProvider>
        } />
        <Route path="kayan" element={<Kayan />} />
        <Route path="kayan/:id/:media" element={<PodcastSingle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
