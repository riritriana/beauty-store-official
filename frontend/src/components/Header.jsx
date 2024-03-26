import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="flex justify-between items-center shadow-lg py-4 px-6 bg-white">
      <div className="w-full flex items-center justify-between">
        <div className="flex gap-4 w-1/2">
          <img src={"../assets/logo.jpg"} alt="Logo" className="w-14" />
          <h1 className="text-2xl">Beauty Store Official</h1>
        </div>
        <nav className=" flex w-1/2 ">
          <ul className="flex w-full justify-evenly">
            <li className=" flex items-center gap-2 cursor-pointer">
              <Link to="/" className=" text-black text-xl">
                Home
              </Link>
            </li>
            <li className=" flex items-center gap-2 cursor-pointer">
              <Link to="/about" className=" text-black text-xl">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
