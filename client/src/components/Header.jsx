import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { ThemeContext } from "./themecontext";
import { DarkModeSwitch } from "react-toggle-dark-mode";


export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className={
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }
    >
      <div className="flex items-center justify-between max-w-6xl p-3 mx-auto">
        <Link to="/">
          <h1 className="font-bold">MSME</h1>
        </Link>
        <ul className="flex gap-4">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.profilePicture}
                alt="profile"
                className="object-cover rounded-full h-7 w-7"
              />
            ) : (
              <li>SignIn</li>
            )}
          </Link>
          <div className={theme}>
            <DarkModeSwitch
              style={{outline: "none"}}
              checked={theme === "dark"}
              onChange={toggleTheme}
              size={23}
            />
          </div>
        </ul>
      </div>
    </div>
  );
}
