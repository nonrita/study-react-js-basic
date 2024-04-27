import { useEffect, useState } from "react";
import {ColorfulMessage} from "./components/ColorfulMessage";

//コンポーネントの名前は大文字はじまり（パスカルケース） reactで決まっているので小文字はじまりの場合うまく表示されない
export const App = () => { //exportをすることで他のファイルから参照できるようにしている
    console.log("--App--");
    const [num, setNum] = useState(0);
    const [isShowFace, setIsShowFace] = useState(false);
    const onClickCountUp = () => {
        setNum(( prev ) => prev + 1);
    };
    const onClickToggle = () => {
        setIsShowFace(!isShowFace);
    };

    useEffect(() => {
        if(num > 0){
            if (num % 3 === 0) {
                isShowFace || setIsShowFace(true);
            } else {
                isShowFace && setIsShowFace(false);
            }
        }
    }, [num]);

    return (
        <> {/* 一つのタグで囲わなければならないというのを回避するためのもの　かっこいい･:*+.\(( °ω° ))/.:+ <React.Fragment> === <> */}
            <h1 style={{ color: "red" }}>こんにちは</h1> {/* オブジェクトでstyelを指定できる*/}
            <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
            <ColorfulMessage color="green">元気です！</ColorfulMessage>
            <button onClick={onClickCountUp}>カウントアップ</button>
            <p>{num}</p>
            <button onClick={onClickToggle}>on/off</button>
            {isShowFace && <p>test</p>}
        </>
    );
};