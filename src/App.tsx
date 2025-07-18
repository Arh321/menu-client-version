import "./App.css";
import { RouterProvider } from "react-router";
import { router } from "./router";
import { NotifyProvider } from "./components/shared-components/notife/notife";
import ReduxProvider from "./components/providers/redux-provider";

function App() {
  return (
    <ReduxProvider>
      <NotifyProvider>
        <div className="bg-transparent transition-colors duration-300 font-Yekan-Regular text-black max-w-[768px] mx-auto h-dvh">
          <RouterProvider router={router} />
        </div>
      </NotifyProvider>
    </ReduxProvider>
  );
}

export default App;
