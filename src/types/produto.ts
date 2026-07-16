export type CategoriaProduto =
    | "Colchão"
    | "Box"
    | "Baús"
    | "Cabeceiras"
    | "Travesseiros"
    | "Acessórios";

export interface Especificacao {
    label: string;
    value: string;
}

export interface Dimensao {
    label: string;
    value: string;
}

export interface Produto {
    id: string;
    nome: string;

    categoria: CategoriaProduto;

    descricao: string;

    imagem: string;
    galeria?: string[];

    caracteristicas: string[];

    especificacoes?: Especificacao[];

    dimensoes?: Dimensao[];

    destaque?: boolean;
}