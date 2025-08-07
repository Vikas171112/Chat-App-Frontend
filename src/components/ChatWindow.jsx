import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import ChatInput from "./ChatInput";

function ChatWindow() {
  return (
    <div className="flex flex-col h-full">
      <Card className="flex flex-col justify-between w-full h-full">
        <CardHeader>
          <h4 className="text-lg font-semibold">Name Of User</h4>
        </CardHeader>

        <CardContent className="flex-1 overflow-y-auto space-y-3">
          <div className="space-y-2">
            <p className="bg-gray-100 p-2 rounded-md w-fit">Hello there!</p>
            <p className="bg-blue-100 p-2 rounded-md w-fit ml-auto">
              Hi, how are you?
            </p>
          </div>
        </CardContent>

        <CardFooter className="border-t p-4">
          <ChatInput />
        </CardFooter>
      </Card>
    </div>
  );
}

export default ChatWindow;
