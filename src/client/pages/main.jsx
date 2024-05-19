import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <h2>Main</h2>
      <p>Welcome to the main page</p>
      <Outlet />
    </div>
  );
}
