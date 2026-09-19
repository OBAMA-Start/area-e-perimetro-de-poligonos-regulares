import {useNavigate} from "react-router";

export function Sobre() {
  const navigate = useNavigate();

  return (
    <>
      <main className="bg-violet-100 h-screen w-screen pt-40 px-6">
        <article className="p-8 md:mx-auto w-2xl max-w-full bg-violet-900 text-white rounded-2xl border-violet-600 shadow-lg hover:shadow-2xl transition-all">
          <h1 className="font-bold text-4xl">Sobre & Créditos</h1>
          <p className="mt-4 max-w-xl">Este é um Objeto de Aprendizagem produzido no Esteamulab/IMD/UFRN.</p>
          <ul className="my-8 space-y-2">
            <li>Idealização: <strong>Gessika Ferreira, Pedro Alves e Angélica</strong></li>
            <li>Produção e desenvolvimento: <a
              href="https://github.com/isaque-dantas"
              target="_blank"
              className="font-bold outline-0"> Isaque Dantas</a>
            </li>
            <li>Apoio e revisão: <strong>Dênis Silva</strong></li>
          </ul>

          <a
            className="underline font-medium italic cursor-pointer"
            onClick={() => navigate("/")}>Voltar para o início</a>
        </article>
      </main>
    </>
  )
}