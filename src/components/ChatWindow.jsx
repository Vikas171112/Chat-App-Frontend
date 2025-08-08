import ChatInput from "./ChatInput";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

function ChatWindow({ receiver }) {
  function profileClick() {
    console.log("Profile is Clicked");
  }
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
            className="flex gap-2 align-items-center cursor-pointer
          "
            onClick={profileClick}
          >
            <img className="h-10 rounded-full" src={receiver.image} alt="" />
            <h4 className="text-lg font-semibold">{receiver.name}</h4>
          </div>

          <hr />
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
