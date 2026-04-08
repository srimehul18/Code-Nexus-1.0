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
            <div style={styles.buttonGroup}>
                <button
                    style={styles.btn}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "#555")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "#333")}
                    onClick={copyText}
                >
                    📋 Copy
                </button>

                <button
                    style={styles.btn}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "#555")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "#333")}
                    onClick={downloadText}
                >
                    ⬇️ Download
                </button>
            </div>

            <pre style={{ whiteSpace: "pre-wrap" }}>{displayText}</pre>
        </div>
    )
}

const styles = {
    output: {
        marginTop: "20px",
        padding: "15px",
        backgroundColor: "#1e1e1e",
        borderRadius: "10px",
        maxWidth: "80%",
        marginInline: "auto",
    },

    buttonGroup: {
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        marginBottom: "15px",
    },

    btn: {
        padding: "10px 18px",
        borderRadius: "8px",
        border: "none",
        backgroundColor: "#333",
        color: "white",
        cursor: "pointer",
        fontSize: "14px",
        transition: "0.2s ease", 
    },
};

