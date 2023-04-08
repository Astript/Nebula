import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import Dashboard from "./components/Dashboard";
import { Routes, Route } from "react-router-dom";
import Mermaid from "./pages/Mermaid";
import Frame from "./components/Frame";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <Frame>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/mermaid" element={<Mermaid />} />
      </Routes>
    </Frame>
  );
}

export default App;
