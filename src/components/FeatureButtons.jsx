export default function FeatureButtons({ setMode }) {
  return (
    <div style={styles.container}>
      <button style={styles.btn} onClick={() => setMode("notes")}>📝 Notes</button>
      <button style={styles.btn} onClick={() => setMode("doubt")}>❓ Doubt</button>
      <button style={styles.btn} onClick={() => setMode("email")}>📧 Email</button>
      <button style={styles.btn} onClick={() => setMode("quiz")}>📚 Quiz</button>
      <button style={styles.btn} onClick={() => setMode("simple")}>🧠 Simple</button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
    marginBottom: "20px",
  },
  btn: {
    padding: "10px 15px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#333",
    color: "white",
    cursor: "pointer",
  },
};