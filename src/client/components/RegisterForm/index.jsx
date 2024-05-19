import useAuth from "../../hooks/useAuth.js";

export default function RegisterForm() {
  const { register } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password, confirmPassword, email } = event.target.elements;
    if (password.value !== confirmPassword.value) {
      alert("Passwords do not match");
      return;
    }

    try {
      await register({ username: username.value, password: password.value, email: email.value });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input type="password" id="confirmPassword" name="confirmPassword" />
      <button type="submit">Register</button>
    </form>
  );
}
