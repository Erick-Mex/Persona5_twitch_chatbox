import { ChatClient } from "@twurple/chat";
import { useState, useEffect } from "react";
import ChatBox from "./utils/ChatBox";

import "./App.css";

const chatClient = new ChatClient({ channels: ["RoboMex05"] });
chatClient.connect();

function App() {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const chatEventListener = chatClient.onMessage(
      (channel, user, text, msg) => {
        setChats((prevData) => {
          if (prevData.length == 4) {
            prevData.shift();
          }
          return [...prevData, text];
        });
      }
    );
    return () => chatClient.removeListener(chatEventListener);
  }, []);

  return (
    <>
      {chats.map((chat, index) => {
        return <ChatBox key={index} msg={chat} />;
      })}
    </>
  );
}

export default App;
