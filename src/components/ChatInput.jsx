import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function ChatInput() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    console.log("Message sent:", message); // Later emit via socket
    setMessage("");
  };

  return (
    <div className="flex gap-2 w-full">
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        placeholder="Write your message..."
      />
      <Button onClick={handleSend}>Send</Button>
    </div>
  );
}

export default ChatInput;
