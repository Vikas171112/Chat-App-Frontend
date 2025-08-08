import ChatInput from "./ChatInput";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

function ChatWindow({ receiver, onSend, messages }) {
  if (!receiver) {
    return (
      <div className="flex items-center justify-center h-full text-gray-400">
        Select a user to start chatting
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <Card className="flex flex-col justify-between w-full h-full">
        <CardHeader>
          <div
            className="flex gap-2 items-center cursor-pointer"
            onClick={() => console.log("Profile Clicked")}
          >
            <img className="h-10 rounded-full" src={receiver.image} alt="" />
            <h4 className="text-lg font-semibold">{receiver.name}</h4>
          </div>
          <hr />
        </CardHeader>

        <CardContent className="flex-1 overflow-y-auto space-y-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`p-2 rounded-md max-w-[70%] ${
                msg.fromSelf
                  ? "bg-blue-100 ml-auto text-right"
                  : "bg-gray-100 text-left"
              }`}
            >
              {msg.message}
            </div>
          ))}
        </CardContent>

        <CardFooter className="border-t p-4">
          <ChatInput onSend={onSend} />
        </CardFooter>
      </Card>
    </div>
  );
}
export default ChatWindow;
