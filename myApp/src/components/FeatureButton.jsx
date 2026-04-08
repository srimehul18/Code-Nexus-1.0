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

