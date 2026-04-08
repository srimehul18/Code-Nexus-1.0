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