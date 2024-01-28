import { useContext } from "react";
import { ThemeContext } from "../components/themecontext";

export default function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        theme === "dark"
          ? "max-w-2xl px-4 py-12 mx-auto bg-black text-white"
          : "max-w-2xl px-4 py-12 mx-auto bg-white text-black"
      }
    >
      <h1 className="mb-4 text-3xl font-bold">About MSME</h1>
      <p className="mb-4 text-lg">
        This is the about page for the MSME application.
      </p>
    </div>
  );
}
