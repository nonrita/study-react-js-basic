import {ColorfulMessage} from "./components/ColorfulMessage";

//コンポーネントの名前は大文字はじまり（パスカルケース） reactで決まっているので小文字はじまりの場合うまく表示されない
export const App = () => { //exportをすることで他のファイルから参照できるようにしている
    const onClickButton = () => {alert()};
    return (
        <> {/* 一つのタグで囲わなければならないというのを回避するためのもの　かっこいい･:*+.\(( °ω° ))/.:+ <React.Fragment> === <> */}
            <h1 style={{ color: "red" }}>こんにちは</h1> {/* オブジェクトでstyelを指定できる*/}
            <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
            <ColorfulMessage color="green">元気です！</ColorfulMessage>
            <button onClick={onClickButton}>ボタン</button>
        </>
    );
};