import HomePage from "./components/HomePage";
import Login from "./components/Login";
import useLoginStore from './store/useLoginStore';

function App() {
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <HomePage />
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;