import React from "react";

function App() {
  const KeyGPT = import.meta.env.VITE_React_App_chatGPT;
  const KeyClaude = import.meta.env.VITE_React_App_Claude;

// const clickfun = ()=>{
//   return console.log("btn clicked");
// }

// Creating a paramaeterzied function as this way where we can to call it only write the arrow function and in that invoke our main function that u want to call


const clickfun = (abc)=>{
  return console.log("btn clicked");
}

  return (
    <>
      <p>Your gpt key is {KeyGPT}</p>
      <p>Your claude key is {KeyClaude}</p>
      <p>Hi there!</p>


      <button onClick={()=> (clickfun("btn clicked"))}>Click Me</button>
    </>
  )
}

export default App;
