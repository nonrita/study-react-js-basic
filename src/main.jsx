import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode> {/* reactの厳密なルールを適用する react推奨 */}
        <App />
    </StrictMode>
);