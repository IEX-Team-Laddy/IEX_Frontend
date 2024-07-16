import { BrowserRouter } from "react-router-dom";
import NavBar from "./universal/NavBar";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
}