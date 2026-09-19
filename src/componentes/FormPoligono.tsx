import {useEffect, useState} from "react";
import {Poligono} from "../modelos/poligono.ts";
import {InputNumeroLados} from "./InputNumeroLados.tsx";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {MensagemErro} from "./MensagemErro.tsx";
import {effect} from "zod/v3";

interface Props {
    poligono: Poligono,
    poligonoMudou: (p: Poligono) => void
}

const schema = z.object({
    numeroLados: (
      z.number("Insira um número")
        .gt(0, "Insira um número de lados maior que zero.")
        .refine(x => x < 3 || x > 20, "O número de lados deve estar entre 3 e 20.")
    ),
    comprimentoLado: (
      z.number("Insira um número")
        .gt(0, "Insira um comprimento maior que zero.")
    ),
})

export default function FormPoligono({poligono, poligonoMudou}: Props) {
    const { register, formState, setValue, watch, subscribe } = useForm<Poligono>({
        resolver: zodResolver(schema),
        mode: 'onChange',
        defaultValues: {
            ...poligono
        },
        delayError: 2000
    })

    useEffect(() => {
        return subscribe({
            formState: { values: true },
            callback: ({ values }) => poligonoMudou(values)
        })
    }, [subscribe])

    return (
      <div className="flex flex-col gap-6 md:flex-row md:gap-16 lg:gap-6 lg:flex-col">
          <fieldset className="flex flex-col gap-2">
              <label htmlFor="input-numero-lados">Número de lados (de 3 a 20)</label>
              <InputNumeroLados
                id={"input-numero-lados"}
                placeholder={"Insira aqui o número de lados..."}
                valor={watch('numeroLados')}
                mudouValor={(numeroLados) => setValue("numeroLados", numeroLados)}
              />
              <MensagemErro mensagemErro={formState.errors.numeroLados?.message}></MensagemErro>
          </fieldset>
          <fieldset className="flex flex-col gap-2">
              <label htmlFor="input-comprimento-lados">Comprimento de cada lado (em cm)</label>
              <input
                id="input-comprimento-lados"
                placeholder="Insira aqui o comprimento de cada lado..."
                {...register("comprimentoLado", { valueAsNumber: true })}
                className="rounded-md border-slate-400 border p-2"
              />
              <MensagemErro mensagemErro={formState.errors.comprimentoLado?.message}></MensagemErro>
          </fieldset>
      </div>
    )
}