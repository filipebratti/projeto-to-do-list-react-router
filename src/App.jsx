import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <div>
      <Header />
      <main className="container mt-4">
        <Outlet />
        <h1>Bem Vindo ao nosso site de Lista de Tarefas!</h1>
        <p>Clique no menu acima em Menu e assim você poderá adcionar tarefas para realizar.</p>
      </main>
    </div>
  );
};
