import { useState } from "react";
import ChatWindow from "./components/ChatWindow";
import UserList from "./components/UserList";

function App() {
  const [receiver, setReceiver] = useState(null);
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <aside className="w-1/4 bg-white border-r overflow-y-auto">
        <UserList setReceiver={setReceiver} />
      </aside>

      <main className="flex-1 bg-gray-50">
        <ChatWindow receiver={receiver} />
      </main>
    </div>
  );
}

export default App;
