import AuthOnlyGuard from "../components/AuthOnlyGuard/index.jsx";
import FlagsList from "../components/FlagsList/index.jsx";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <AuthOnlyGuard>
      <h1>Dashboard</h1>
      <Link to="/newt-toggle">New feature flag</Link>
      <FlagsList />
    </AuthOnlyGuard>
  );
}
