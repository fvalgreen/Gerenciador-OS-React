import { createContext, useState } from "react";
import { RouterProvider} from "react-router-dom";
import { getRouter } from "./router";

export const AuthorizeContext = createContext<any>(null);

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [nivelAcesso, setNivelAcesso] = useState<string>('')

  return (
    <AuthorizeContext.Provider value={{token, setToken, nivelAcesso, setNivelAcesso}}>
      <RouterProvider router={getRouter(token, nivelAcesso)}/>
    </AuthorizeContext.Provider>
  );
}

export default App;
