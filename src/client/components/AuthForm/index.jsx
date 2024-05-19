import useAuth from "../../hooks/useAuth.js";

export default function AuthForm() {
  const { login } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = event.target.elements;
    login({ username: username.value, password: password.value });
  };

  return (
    <div>
      <h2>AuthForm</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
