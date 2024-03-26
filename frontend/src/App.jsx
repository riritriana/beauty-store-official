// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
