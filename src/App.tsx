// @ts-ignore
import '/src/App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router";
import {Home} from "./paginas/Home.tsx";
import {Apresentacao} from "./paginas/Apresentacao.tsx";
import {Sobre} from "./paginas/Sobre.tsx";

export function App() {
    return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Apresentacao />} />
                  <Route path="/conteudo" element={<Home />} />
                  <Route path="/sobre" element={<Sobre />} />
                  <Route path="*" element={<Navigate to="/" replace/>}/>
              </Routes>
          </BrowserRouter>
      </>
    );
}
