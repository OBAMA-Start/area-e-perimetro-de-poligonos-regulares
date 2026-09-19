import {useState} from "react";
import {Poligono} from "../modelos/poligono.ts";
import FormPoligono from "../componentes/FormPoligono.tsx";
import RenderizadorPoligono from "../componentes/RenderizadorPoligono.tsx";
import FormAreaPerimetro from "../componentes/FormAreaPerimetro.tsx";
import {Header} from "../componentes/Header.tsx";
import {useNavigate} from "react-router";

export function Home() {
  const navigate = useNavigate();
  const [poligono, setPoligono] = useState<Poligono>({numeroLados: 3, comprimentoLado: 1})
  const sectionClassName = (
    "pb-8 border-b border-slate-300 last:border-b-0 " +
    "md:p-6 md:bg-slate-50 md:border md:border-slate-200 md:last:border " +
    "md:rounded-2xl md:shadow-md"
  )

  return (
    <>
      <Header/>
      <a
        className="mx-6 underline font-bold text-violet-700 italic cursor-pointer"
        onClick={() => navigate("/")}>Voltar para o início</a>

      <main className="m-6 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-8 md:space-y-0">
        <section className={sectionClassName + " col-span-1 md:col-span-2 lg:col-span-1"}>
          <h3 className="text-2xl font-bold mb-6">Quais as características do polígono?</h3>
          <FormPoligono poligono={poligono} poligonoMudou={setPoligono}/>
        </section>

        <section className={sectionClassName + " col-span-1"}>
          <h3 className="text-2xl font-bold mb-6">Como ele se parece?</h3>
          <RenderizadorPoligono poligono={poligono} />
        </section>

        <section className={sectionClassName + " col-span-1"}>
          <h3 className="text-2xl font-bold mb-6">Calcule área e perímetro</h3>
          <FormAreaPerimetro poligono={poligono} />
        </section>
      </main>
    </>
  )
}