import React from "react";
import { createRoot } from "react-dom/client";
import FinanceApp from "@/components/finance-app";
import "@/app/globals.css";

const query = new URLSearchParams(window.location.search);
if (!query.has("mode")) {
  query.set("mode", "demo");
  query.set("view", "overview");
  window.history.replaceState({}, "", `${window.location.pathname}?${query.toString()}`);
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FinanceApp />
  </React.StrictMode>,
);
