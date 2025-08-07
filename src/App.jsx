import ChatWindow from "./components/ChatWindow";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <aside className="w-1/4 bg-white border-r overflow-y-auto">
        <UserList />
      </aside>

      <main className="flex-1 bg-gray-50">
        <ChatWindow />
      </main>
    </div>
  );
}

export default App;
