import {Poligono} from "../modelos/poligono.ts";
import {Point, Polygon} from "@flatten-js/core";

export function obterPoligono(numeroLados: number, comprimentoLado: number): Polygon {
    const raioCirculoCircunscrito = comprimentoLado / (2 * Math.sin(Math.PI / numeroLados))

    const pontos: Point[] = []
    for (let i = 0; i < numeroLados; i++) {
        const angulo = i * 2 * Math.PI / numeroLados

        pontos.push(
            new Point(
                raioCirculoCircunscrito * Math.cos(angulo),
                raioCirculoCircunscrito * Math.sin(angulo)
            )
        )
    }

    return new Polygon(pontos)
}

export function obterDPath(dadosPoligono: Poligono): string {
    return obterPoligono(dadosPoligono.numeroLados, (500 / dadosPoligono.numeroLados)).dpath();
}

export function obterArea(dadosPoligono: Poligono): number {
    const area = (
        obterPoligono(
            dadosPoligono.numeroLados,
            dadosPoligono.comprimentoLado
        ).area()
    )

    return Math.round(area * 100) / 100
}