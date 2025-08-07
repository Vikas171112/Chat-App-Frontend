import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function ChatInput() {
  return (
    <div className="flex gap-2 w-full">
      <Input type="text" placeholder="Write your message..." />
      <Button>Send</Button>
    </div>
  );
}

export default ChatInput;
