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

    if (level === "beginner") {
      base += "Explain like I am a beginner student. ";
    }

    return base + input;
  };

  const handleAI = async () => {
    if (!input) {
      alert("Please enter something!");
      return;
    }

    setLoading(true);
    setOutput("");

    const result = await fetchAI(getPrompt());

    setOutput(result);
    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <Navbar />

      <p style={{ maxWidth: "600px", margin: "auto" }}>
        Students waste time searching multiple platforms. Our AI toolkit provides
        instant notes, explanations, quizzes, and writing help in one place.
      </p>

      <h3>Current Mode: {mode.toUpperCase()}</h3>

      <div>
        <button onClick={() => setLevel("normal")}>🎓 Normal</button>
        <button onClick={() => setLevel("beginner")}>👶 Beginner</button>
      </div>

      <FeatureButtons setMode={setMode} />

      <InputBox input={input} setInput={setInput} callAI={handleAI} />

      <p style={{ opacity: 0.7 }}>
        Try: Photosynthesis | Newton Laws | Leave application
      </p>

      <p style={{ fontSize: "12px", opacity: 0.6 }}>
        <b>AI Prompt:</b> {getPrompt()}
      </p>

      {loading ? <Loader /> : <OutputBox output={output} />}
    </div>
  );
}