interface Props {
  mensagemErro?: string;
}

export function MensagemErro({ mensagemErro }: Props) {
  return (
    mensagemErro !== undefined &&
    <p className="text-sm text-red-700 font-semibold">{mensagemErro}</p>
  )
}