import AuthOnlyGuard from "../components/AuthOnlyGuard/index.jsx";

export default function Dashboard() {
  return (
    <AuthOnlyGuard>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard</p>
    </AuthOnlyGuard>
  );
}
