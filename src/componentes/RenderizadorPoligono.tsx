import {Poligono} from "../modelos/poligono.ts";
import {obterDPath} from "../dominio/calculador-pontos-poligono-regular.ts";

export default function RenderizadorPoligono({poligono}: { poligono: Poligono }) {
    const dPath = obterDPath(poligono)

    return (
        <article className="flex justify-center w-full">
            <svg width="280" height="280" viewBox="-100 -100 200 200">
                <path d={dPath} fill="royalblue" stroke="black" strokeWidth={2}/>
            </svg>
        </article>
    )
}