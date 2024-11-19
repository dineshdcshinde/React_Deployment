import React from 'react'

function App() {
  const KeyGPT = import.meta.env.VITE_React_App_chatGPT;
  const KeyClaude = import.meta.env.VITE_React_App_Claude;
  return (
    <>
    <p>Your gpt key is {KeyGPT}</p>
    <p>Your claude key is {KeyClaude}</p>
    <p>Hi there!</p>
    </>
  )
}

export default App