import { useContext } from "react";
import { ThemeContext } from "../components/themecontext";
import Form from "./form";
import Remainders from "./remainders";
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
      <Form />
      <Remainders />
    </div>
  );
}
