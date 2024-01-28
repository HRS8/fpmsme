import { useContext } from "react";
import { ThemeContext } from "../components/themeContext";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        theme === "dark"
          ? "max-w-2xl px-4 py-12 mx-auto bg-black text-white"
          : "max-w-2xl px-4 py-12 mx-auto bg-white text-black"
      }
    >
      <h1 className="mb-4 text-3xl font-bold">Welcome to MSME!</h1>
      <p className="mb-4 text-lg">
        This is a starter template for a React application with Tailwind CSS and
        React Router.
      </p>
    </div>
  );
}
