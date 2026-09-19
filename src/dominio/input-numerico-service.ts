export function caractereEhPermitido(caractere: string | null, valorInput: string, aceitaApenasNumerosInteiros: boolean): boolean {
    return (
        caractere !== null
        &&
        (
            !Number.isNaN(parseInt(caractere))
            ||
            (
                !aceitaApenasNumerosInteiros
                &&
                (
                    caractere == ',' ||
                    caractere == '.'
                )
                &&
                (
                    !valorInput.includes(',') &&
                    !valorInput.includes('.')
                )
            )
        )
    )
}

export function valorEhInteiro(n: number) {
    return Math.round(n) === n
//

}

export function valorEhNumerico(valor: number, aceitaApenasNumerosInteiros: boolean) {
    return (
        !aceitaApenasNumerosInteiros
        ||
        valorEhInteiro(valor)
    )
}


