import { createRoot } from 'react-dom/client';
import './style..css';

function NavigationBar() {
  // TODO: Actually implement a navigation bar
  return <h1>Hello from React!</h1>;
}

const domNode = document.getElementById('app');
const root = createRoot(domNode);
root.render(<NavigationBar />);