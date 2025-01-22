import { useState } from 'react';
import { loginUser } from '../../../backend/services/user.service';
import useLoginStore from '../store/useLoginStore';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const login = useLoginStore((state) => state.login);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = formData;
      const data = await loginUser(email, password);
      console.log('Login successful:', data);
      // Giriş başarılı olduğunda login fonksiyonunu çağır
      login();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
    <h1 className="main-title">Discover Go</h1>
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
    </>
  );
};

export default Login;