/* eslint-disable react/jsx-no-undef */
import { Outlet } from "react-router-dom";

function App() {
  
  return (
      <div className="relative z-0 bg-primary overflow-x-hidden">
        <div className="w-full bg-violet-300">
        <div className="w-full">
          <main className="w-full">
            <Outlet />
          </main>
        </div>
      </div>
      </div>
  );
}

export default App;
