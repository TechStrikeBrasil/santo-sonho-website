import type { Dimensao } from "../../types/produto";

const medidasPadrao: Dimensao[] = [
    { label: "Solteiro", value: "0,88 x 1,88 m" },
    { label: "Solteirão", value: "0,96 x 2,03 m" },
    { label: "Viúva", value: "1,28 x 1,88 m" },
    { label: "Casal", value: "1,38 x 1,88 m" },
    { label: "Queen", value: "1,58 x 1,98 m" },
    { label: "King", value: "1,93 x 2,03 m" },
];

export function dimensoesColchao(altura: string): Dimensao[] {
    return [
        { label: "Altura", value: altura },
        ...medidasPadrao,
    ];
}