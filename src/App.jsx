//コンポーネントの名前は大文字はじまり（パスカルケース） reactで決まっているので小文字はじまりの場合うまく表示されない
export const App = () => { //exportをすることで他のファイルから参照できるようにしている
    const onClickButton = () => {alert()};
    const contentStyle = {
        color: "blue",
        fontSize: "18px",
        margin: 100
    }
    return (
        <> {/* 一つのタグで囲わなければならないというのを回避するためのもの　かっこいい･:*+.\(( °ω° ))/.:+ <React.Fragment> === <> */}
            <h1 style={{ color: "red" }}>こんにちは</h1> {/* オブジェクトでstyelを指定できる*/}
            <p style={contentStyle}>お元気ですか？</p>
            <button onClick={onClickButton}>ボタン</button>
        </>
    );
};