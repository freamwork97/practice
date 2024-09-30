// src/App.tsx
import { SessionProvider } from "./context/SessionContext";
import My from "./components/My";
import "./App.css";
function App() {
  return (
    <SessionProvider>
      <div className="app-container">
        <My />
      </div>
    </SessionProvider>
  );
}

export default App;
