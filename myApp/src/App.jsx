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

const getPrompt = () => {
    let base = "";

    switch (mode) {
      case "notes":
        base = "Convert into structured notes with headings and bullet points: ";
        break;
      case "doubt":
        base = "Explain step by step clearly: ";
        break;
      case "email":
        base = "Write a formal email: ";
        break;
      case "quiz":
        base = "Create 5 MCQs with answers: ";
        break;
      case "simple":
        base = "Explain in very simple words: ";
        break;
      default:
        base = "";
    }