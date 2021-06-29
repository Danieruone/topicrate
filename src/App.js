import { HomePage } from "./pages/HomePage";
import { SocketProvider } from "./context/SocketContext";

function App() {
  return (
    <SocketProvider>
      <HomePage />
    </SocketProvider>
  );
}

export default App;
