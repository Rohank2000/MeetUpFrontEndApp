import Header from "./Header-footer/Header"
import HomePage from "./components/meetUpHomepage"
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Header setSearchTerm={setSearchTerm} />
      <HomePage searchTerm={searchTerm} />
    </div>
  );
}

export default App
