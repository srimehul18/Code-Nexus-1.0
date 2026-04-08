export default function InputBox({ input, setInput, callAI }) {
  return (
    <div>
      <textarea
        placeholder="Enter your topic or question..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={styles.textarea}
      />

      <br />

      <button style={styles.btn} onClick={callAI}>
        🚀 Generate
      </button>
    </div>
  )
}

const styles = {
  textarea: {
    width: "80%",
    height: "100px",
    padding: "10px",
    borderRadius: "8px",
    marginTop: "10px",
  },
  btn: {
    marginTop: "10px",
    padding: "10px 20px",
    borderRadius: "8px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
}