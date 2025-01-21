import { useState } from 'react';
import { loginUser } from '../services/api';
import '../styles/Login.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
      const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { email, password } = formData;
            const data = await loginUser(email, password);
            console.log('Login successful:', data);
            // Actions to be taken when login is successful

        } catch (err) {
            setError(err.message);
        }
    };

    return (
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
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      );
};

export default Login;
