interface Props {
    id: string,
    placeholder: string,
    valor: number,
    mudouValor: (x: number) => void,
}

export function InputNumeroLados({
                                     id,
                                     placeholder,
                                     valor,
                                     mudouValor,
                                 }: Props) {
    const classNameBtn = (
        "flex items-center justify-center w-10 h-10 rounded-lg text-white bg-violet-700 font-bold text-2xl " +
        "disabled:bg-gray-500 disabled:cursor-not-allowed cursor-pointer hover:shadow-md hover:bg-violet-600 transition-all"
    )

    function adicionar() {
        if (valor == 20) return;
        mudouValor(valor + 1)
    }

    function subtrair() {
        if (valor == 3) return;
        mudouValor(valor - 1)
    }

    return (
        <article className="flex gap-6 items-center">
            <button
                disabled={valor <= 3}
                className={classNameBtn}
                type="button"
                onClick={subtrair}>-
            </button>

            <p className="font-bold text-2xl">{valor}</p>

            <button
                disabled={valor >= 20}
                className={classNameBtn}
                type="button"
                onClick={adicionar}>+
            </button>
        </article>
    )
}