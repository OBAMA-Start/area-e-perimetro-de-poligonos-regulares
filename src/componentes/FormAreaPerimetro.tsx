import {Poligono} from "../modelos/poligono.ts";
import React, {useState} from "react";
import FeedbackRespostaAreaPerimetro from "./FeedbackRespostaAreaPerimetro.tsx";
import {obterArea} from "../dominio/calculador-pontos-poligono-regular.ts";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import {AreaPerimetro} from "../modelos/area-perimetro.ts";
import {MensagemErro} from "./MensagemErro.tsx";

const schema = z.object({
    area: z.number("Insira um número").refine(x => x > 0, 'A área deve ser maior que zero.'),
    perimetro: z.number("Insira um número").refine(x => x > 0, 'O perímetro deve ser maior que zero.')
})

export default function FormAreaPerimetro({poligono}: { poligono: Poligono }) {
    const [feedbackEstaVisivel, setFeedbackEstaVisivel] = useState<boolean>(false)
    const { register, handleSubmit, getErrors, getValues, formState } = useForm<AreaPerimetro>({
        resolver: zodResolver(schema),
        mode: 'onChange',
        delayError: 2000
    })

    const submitButtonClassName = (
      "px-4 py-1 " +
      "border-2 border-violet-700 text-violet-700 text-lg font-bold rounded-lg cursor-pointer " +
      "hover:bg-violet-700 hover:text-white transition-all " +
      "disabled:pointer-events-none disabled:bg-gray-200 disabled:text-gray-500 disabled:border-gray-300"
    )

    function respostaEstaCerta() {
        const areaCorreta = obterArea(poligono)
        const perimetroCorreto = poligono.comprimentoLado * poligono.numeroLados

        return (
          areaCorreta === getValues("area")
          &&
          perimetroCorreto === getValues("perimetro")
        )
    }

    function onSubmit(e: React.SubmitEvent) {
        e.preventDefault()
        setFeedbackEstaVisivel(true)
    }

    return (
      <form onSubmit={onSubmit} className="flex flex-col gap-6">
          <fieldset className="flex flex-col gap-2 ">
              <label htmlFor="area-informada">Área (cm²)</label>
              <input
                {...register("area", { valueAsNumber: true })}
                id="area-informada"
                placeholder="Insira aqui a área..."
                className="w-full border rounded-sm border-slate-400 px-2 py-1"
              />
              <MensagemErro mensagemErro={formState.errors.area?.message}></MensagemErro>
          </fieldset>

          <fieldset className="flex flex-col gap-2 ">
              <label htmlFor="perimetro-informado">Perímetro (cm)</label>
              <input
                {...register("perimetro", { valueAsNumber: true })}
                id="perimetro-informada"
                placeholder="Insira aqui o perímetro..."
                className="w-full border rounded-sm border-slate-400 px-2 py-1"
              />
              <MensagemErro mensagemErro={formState.errors.perimetro?.message}></MensagemErro>
          </fieldset>

          <button
            type="submit"
            disabled={!formState.isValid}
            className={submitButtonClassName}
          >
              Verificar respostas
          </button>

          {
            feedbackEstaVisivel &&
            <FeedbackRespostaAreaPerimetro
              finalizou={() => setFeedbackEstaVisivel(false)}
              respostaCerta={respostaEstaCerta()}/>
          }
      </form>
    )
}
