import { useEffect, useState } from "react";
import ChatWindow from "./components/ChatWindow";
import UserList from "./components/UserList";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

function App() {
  const [receiver, setReceiver] = useState(null);
  const [currentUser, setCurrentUser] = useState({ id: 1 });
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.emit("add-user", currentUser.id);
  }, [currentUser]);

  useEffect(() => {
    socket.on("msg-receive", (data) => {
      setMessages((prev) => [...prev, { ...data, fromSelf: true }]);
    });

    return () => socket.off("msg-receive");
  }, []);

  const handleSendMessage = (message) => {
    if (!receiver) return;
    const msgData = {
      to: receiver.id,
      from: currentUser.id,
      message,
    };
    socket.emit("send-msg", msgData);
    setMessages((prev) => [...prev, { ...msgData, fromSelf: true }]);
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <aside className="w-1/4 bg-white border-r overflow-y-auto">
        <UserList setReceiver={setReceiver} />
      </aside>

      <main className="flex-1 bg-gray-50">
        <ChatWindow
          receiver={receiver}
          onSend={handleSendMessage}
          messages={messages.filter(
            (msg) => msg.from === receiver?.id || msg.to === receiver?.id
          )}
        />
      </main>
    </div>
  );
}

export default App;
