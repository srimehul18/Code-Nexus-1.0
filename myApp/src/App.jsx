import { useState } from "react";
import Navbar from "./components/navbar";
import FeatureButtons from "./components/FeatureButtons";
import InputBox from "./components/InputBox";
import OutputBox from "./components/OutputBox";
import Loader from "./components/Loader";
import { callAI as fetchAI } from "./api";

export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState("notes");
  const [loading, setLoading] = useState(false);
  const [level, setLevel] = useState("normal");