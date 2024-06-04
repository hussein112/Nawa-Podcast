import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import { PopupProvider } from "./context/PopUpContext";
import Index from "./components/Index/Index";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="home" element={
          <PopupProvider>
            <Home />
          </PopupProvider>
        } />
        <Route path="index" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
