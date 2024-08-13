import "./App.css";
import UserProvider from "./contexts/UserContext";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Cadastro from "./pages/Cadastro";
import { AuthProvider } from "./contexts/AuthContext";
import ListaTemas from "./components/temas/ListaTemas";
import FormularioTema from "./components/temas/FormularioTema";
import DeletarTema from "./components/temas/DeletarTema";

function App() {
  return (
    <>
      <AuthProvider>
        <UserProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/temas" element={<ListaTemas />} />
                <Route path="/cadastroTema" element={<FormularioTema />} />
                <Route path="/editarTema/:id" element={<FormularioTema />} />
                <Route path="/deletarTema/:id" element={<DeletarTema />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </AuthProvider>
    </>
  );
}
export default App;
