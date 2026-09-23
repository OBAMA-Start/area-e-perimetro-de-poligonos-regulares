import {useNavigate} from "react-router";

export function Apresentacao() {
  const navigate = useNavigate();

  return (
    <main className="bg-violet-100 h-screen w-screen pt-40 px-6">
      <article className="p-8 md:mx-auto  w-2xl max-w-full bg-violet-900 text-white rounded-2xl border-violet-600 shadow-lg hover:shadow-2xl transition-all">
        <h1 className="font-bold text-4xl">Explorador de polígonos regulares</h1>
        <p className="mt-4 max-w-md">Aqui você pode ver o formato de polígonos regulares e como funcionam sua área e perímetro de forma interativa.</p>
        <ul className="mt-8 flex flex-col text-violet-900 space-y-6">
          <li
            onClick={() => navigate('/conteudo')}
            className="bg-violet-200 hover:bg-violet-300 text-center rounded-xl font-bold px-4 py-2 text-xl shadow-sm hover:shadow-lg transition-all cursor-pointer border border-gray-400">
            Iniciar
          </li>
          <li
            onClick={() => navigate('/sobre')}
            className="bg-violet-200 hover:bg-violet-300 text-center rounded-xl font-bold px-4 py-2 text-xl shadow-sm hover:shadow-lg transition-all cursor-pointer border border-gray-400">
            Créditos
          </li>
        </ul>
      </article>
    </main>
  )
}