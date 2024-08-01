import React from "react";
import Login from "./Login";

var isLoggedIn = false;

const currentTime = new Date(2019, 11, 1, 9).getHours();
console.log(currentTime);

function App() {
  return (
    <div className="container">
      {/*Ternary Operator 為 Expression*/}
      {/*如果已登入會員就顯示Hello，如果未登入，就顯示三個登入選項*/}
      {isLoggedIn ? <h1>Hello</h1> : <Login />}
      {/*AND Operator，如果時間超過12點，則打印右側*/}
      {currentTime > 12 && <h1>Why are you still working?</h1>}
      {/*等價於:{currentTime>12 ? <h1>Why are you still working?</h1>: null}*/}
    </div>
  );
}

export default App;
