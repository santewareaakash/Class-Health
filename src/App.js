import "./App.css";
import { Route, useRoutes } from "react-router-dom";
import { routes } from "./components/routes/routes";
import ProtectedRoutes from "./components/routes/ProtectedRoutes"

function App() {
  const element = useRoutes(routes);
  return <>{element}
  {/* <Route element={<ProtectedRoutes />}>

  </Route> */}
  </>;
}

export default App;
