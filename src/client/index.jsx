import { createRoot } from "react-dom/client";
import "./style..css";
import FlagsList from "./components/flasgsList";

function NavigationBar() {
  // TODO: Actually implement a navigation bar
  return <FlagsList />;
}

const domNode = document.getElementById("app");
const root = createRoot(domNode);
root.render(<NavigationBar />);
