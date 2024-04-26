//コンポーネントの名前は大文字はじまり（パスカルケース） reactで決まっているので小文字はじまりの場合うまく表示されない
export const App = () => { //exportをすることで他のファイルから参照できるようにしている
    return (
        <> {/* 一つのタグで囲わなければならないというのを回避するためのもの　かっこいい･:*+.\(( °ω° ))/.:+ <React.Fragment> === <> */}
            <h1>こんにちは</h1>
            <p>お元気ですか？</p>
        </>
    );
};