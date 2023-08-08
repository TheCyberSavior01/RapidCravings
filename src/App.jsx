import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Routes";
import { AnimatePresence } from "framer-motion";


function App() {
  return (
    <AnimatePresence>
      <div className="p-3 px-4 md:p-6 md:px-16">
        <RouterProvider router={router} />
      </div>
    </AnimatePresence>
  );
}

export default App;
