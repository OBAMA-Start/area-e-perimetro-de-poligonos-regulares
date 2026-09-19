import {useEffect, useRef, useState} from "react";
import {createScope, Scope, waapi} from "animejs";
import animate = waapi.animate;

interface Props {
    finalizou: () => void,
    respostaCerta: boolean
}

export default function FeedbackRespostaAreaPerimetro({finalizou, respostaCerta}: Props) {
    const root = useRef(null);
    const scope = useRef<Scope | null>(null);

    const corBackground = respostaCerta ? 'bg-green-600' : 'bg-red-600';

    useEffect(() => {
        scope.current = createScope({root}).add(_ => {
            animate('.feedback', {
                translateY: -500,
                duration: 1500,
                opacity: 0,
                ease: 'inOut',
                loop: false,
                onComplete: finalizou
            });
        });

        return () => scope.current!.revert()
    }, []);

    return (
        <div ref={root}>
            <article
                className={'feedback fixed top-4/5 left-1/2 w-80 -translate-1/2 rounded-lg p-4 ' + corBackground}
            >
                <div className="text-white font-bold text-2xl text-center">
                    {respostaCerta ? 'Resposta certa!' : 'Resposta errada!'}
                </div>
            </article>
        </div>
    )
}