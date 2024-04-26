import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

//コンポーネントの名前は大文字はじまり（パスカルケース）
const App = () => {
    return (
        <> {/* 一つのタグで囲わなければならないというのを回避するためのもの　かっこいい･:*+.\(( °ω° ))/.:+ <React.Fragment> === <> */}
            <h1>こんにちは</h1>
            <p>お元気ですか？</p>
        </>
    );
};

root.render(
    <StrictMode> {/* reactの厳密なルールを適用する react推奨 */}
        <App />
    </StrictMode>
);