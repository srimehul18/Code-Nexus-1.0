import { useEffect, useState } from "react";

export default function OutputBox({ output }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayText("");

    const interval = setInterval(() => {
      setDisplayText((prev) => prev + output.charAt(i));
      i++;
      if (i >= output.length) clearInterval(interval);
    }, 10);

    return () => clearInterval(interval);
  }, [output]);

  const copyText = () => {
    navigator.clipboard.writeText(output);
  };

  const downloadText = () => {
    const blob = new Blob([output], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "AI_Output.txt";
    link.click();
  };

  return (
    <div style={styles.output}>
      <div style={{ marginBottom: "10px" }}>
        <button onClick={copyText}>📋 Copy</button>
        <button onClick={downloadText}>⬇️ Download</button>
      </div>

      <pre style={{ whiteSpace: "pre-wrap" }}>{displayText}</pre>
    </div>
  )
}