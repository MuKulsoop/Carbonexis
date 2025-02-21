import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { WalletProvider } from "./context/walletcontext";

createRoot(document.getElementById("root")).render(
  <WalletProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </WalletProvider>
);
