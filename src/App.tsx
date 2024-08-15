import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Cadastro from "./pages/Cadastro";
import { AuthProvider } from "./contexts/AuthContext";
import ListaTemas from "./components/temas/ListaTemas";
import FormularioTema from "./components/temas/FormularioTema";
import DeletarTema from "./components/temas/DeletarTema";
import ListaPostagens from "./components/postagens/ListaPostagens";
import FormularioPostagem from "./components/postagens/FormularioPostagem";
import DeletarPostagem from "./components/postagens/DeletarPostagens";
import Perfil from "./pages/Perfil";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
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
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route
                path="/cadastroPostagem"
                element={<FormularioPostagem />}
              />
              <Route
                path="/editarPostagem/:id"
                element={<FormularioPostagem />}
              />
              <Route
                path="/deletarPostagem/:id"
                element={<DeletarPostagem />}
              />
              <Route path="/perfil" element={<Perfil />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;
