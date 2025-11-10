import React from "react";

export default function App() {
  const [msg, setMsg] = React.useState("");

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setMsg(data.message))
      .catch(() => setMsg("Error connecting to backend"));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">🤖 Free Bot App</h1>
      <p className="text-lg">{msg || "Loading..."}</p>
      <footer className="mt-6 text-sm text-gray-400">
        Built by Akin S Sokpah 💡
      </footer>
    </div>
  );
}
