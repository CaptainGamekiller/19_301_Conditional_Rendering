import React from "react"; // 引入 React 庫
import Input from "./Input"; // 引入名為 Input 的組件，這個組件位於當前目錄的 Input 文件中

function Login() {
  // 定義 Login 組件
  return (
    <form className="form">
      {/* 渲染一個帶有 class 名稱為 "form" 的表單 */}
      {/* 我不使用原本的HTML內建的Input函數。我們使用自己的input組件 */}
      <Input type="text" placeholder="Username" />{" "}
      {/* 使用 Input 組件，設置type為 text，placeholder為 Username */}
      <Input type="password" placeholder="Password" />{" "}
      {/* 使用 Input 組件，設置type為 password，placeholder為 Password */}
      <button type="submit">Login</button> {/*HTML內建botton函數 */}
      {/* 渲染一個提交按鈕，文本內容為 Login */}
    </form>
  );
}

export default Login; // 將 Login 組件導出，使其可以在其他文件中被引入和使用
