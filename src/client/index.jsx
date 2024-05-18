import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./style..css";

const domNode = document.getElementById("app");
const root = createRoot(domNode);
root.render(<App />);
