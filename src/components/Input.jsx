import React from "react"; // 引入 React 庫

function Input(props) {
  // 我們定義自己的input組件，並且有兩個屬性type和placeholder。
  // 原本是: <input type="text" placeholder="Username" />
  // 原本是: <input type="password" placeholder="Password" />
  return <input type={props.type} placeholder={props.placeholder} />; // 渲染一個 input 元素，並使用從 props 傳遞過來的 type 和 placeholder 屬性
}

export default Input; // 將 Input 組件導出，使其可以在其他文件中被引入和使用
