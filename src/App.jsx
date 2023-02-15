import './App.css'
import LandingPage from "./pages/LandingPage/LandingPage"
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import DashboardPage from './pages/DashboardPage/Dashboard';
import Conversation from './pages/ConversationPage/Conversation';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LandingPage/>
    ),
  },
  {
    path: "dashboard",
    element: <DashboardPage/>,
  },
  {
    path: "conversation",
    element: <Conversation/>
  }
]);


function App() {
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  )
}

export default App
