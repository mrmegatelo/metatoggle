import FlagsList from "./components/flasgsList/index.jsx";
import { NewFlagForm } from "./components/newFlagForm/index.jsx";

export default function App() {
  return (
    <div>
      <h1>App</h1>
      <NewFlagForm />
      <FlagsList />
    </div>
  );
}