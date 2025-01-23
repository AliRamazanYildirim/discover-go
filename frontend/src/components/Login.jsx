import { loginUser } from '../../../backend/services/user.service';
import useLoginStore from '../store/useLoginStore';

const Login = () => {
  const { formData, setFormData, error, setError, loading, setLoading, login } = useLoginStore();

  const handleLogin = async (e) => { 
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const { email, password } = formData;
      if (!email || !password) {
        throw new Error("Please fill in all fields");
      }
      const data = await loginUser(email, password);
      console.log('Login successful:', data);
      login();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="main-title">Discover Go</h1>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ email: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={(e) => setFormData({ password: e.target.value })}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;