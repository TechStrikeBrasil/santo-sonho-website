var santo_sonho_logo_png_asset_default = {
	version: 1,
	asset_id: "2c6ceb27-4dce-4727-b87c-bd61d7881bc2",
	project_id: "6392bcd6-0e47-4e9e-b1e4-65b3d8551204",
	url: "/__l5e/assets-v1/2c6ceb27-4dce-4727-b87c-bd61d7881bc2/santo-sonho-logo.png",
	r2_key: "a/v1/6392bcd6-0e47-4e9e-b1e4-65b3d8551204/2c6ceb27-4dce-4727-b87c-bd61d7881bc2/santo-sonho-logo.png",
	original_filename: "santo-sonho-logo.png",
	size: 371386,
	content_type: "image/png",
	created_at: "2026-06-22T17:16:57Z"
};
//#endregion
//#region src/assets/mattress-1.jpg
var mattress_1_default = "/assets/mattress-1-BznSHFPn.jpg";
//#endregion
//#region src/assets/mattress-2.jpg
var mattress_2_default = "/assets/mattress-2-D2-4P4q4.jpg";
//#endregion
//#region src/assets/mattress-3.jpg
var mattress_3_default = "/assets/mattress-3-BLT1rujw.jpg";
//#endregion
//#region src/assets/mattress-4.jpg
var mattress_4_default = "/assets/mattress-4-BRAj5g9K.jpg";
//#endregion
//#region src/assets/mattress-5.jpg
var mattress_5_default = "/assets/mattress-5-DzoBWzGj.jpg";
//#endregion
//#region src/assets/mattress-6.jpg
var mattress_6_default = "/assets/mattress-6-BG1OIatP.jpg";
//#endregion
//#region src/lib/site.ts
var SITE = {
	name: "Santo Sonho Colchões",
	tagline: "Porque dormir bem, faz bem!",
	email: "contato@santosonhocolchoes.com.br",
	whatsappMain: "5511941409648",
	whatsappDisplay: "(11) 94140-9648",
	facebook: "https://www.facebook.com/santosonhocolchoes",
	instagram: "https://www.instagram.com/colchoessantosonho",
	logoUrl: santo_sonho_logo_png_asset_default.url
};
function waLink(number, message = "Olá! Gostaria de mais informações sobre os colchões.") {
	const clean = number.replace(/\D/g, "");
	return `https://wa.me/${clean.startsWith("55") ? clean : `55${clean}`}?text=${encodeURIComponent(message)}`;
}
var LOJAS = [
	{
		cidade: "Santo André",
		nome: "Ramiro Colleoni I",
		endereco: "Av. Ramiro Colleoni, 650, Vila Dora - Santo André/SP",
		referencia: "Próximo ao Shopping ABC",
		telefones: ["(11) 4902-5133", "(11) 4902-4503"],
		whatsapp: "11981895458"
	},
	{
		cidade: "Santo André",
		nome: "Ramiro Colleoni II",
		endereco: "Av. Ramiro Colleoni, 800, Vila Dora - Santo André/SP",
		referencia: "Esquina com R. Caminho do Pilar",
		telefones: ["(11) 4509-4414"],
		whatsapp: "11981900581"
	},
	{
		cidade: "Santo André",
		nome: "Santos Dumont",
		endereco: "Rua Santos Dumont, 163, Centro - Santo André/SP",
		referencia: "Em frente ao Corpo de Bombeiros",
		telefones: ["(11) 3969-9930", "(11) 3969-9940"],
		whatsapp: "11959696795"
	},
	{
		cidade: "Santo André",
		nome: "Pirelli",
		endereco: "Av. Giovanni Battista Pirelli, 1450, Vila Homero Thon - Santo André/SP",
		referencia: "Ao lado do Restaurante Ragazzo",
		telefones: ["(11) 4901-3629"],
		whatsapp: "11981933426"
	},
	{
		cidade: "Santo André",
		nome: "Figueiras",
		endereco: "R. das Figueiras, 221, Bairro Jardim - Santo André/SP",
		telefones: ["(11) 3705-1000"],
		whatsapp: "11952110768"
	},
	{
		cidade: "São Bernardo do Campo",
		nome: "Senador Vergueiro",
		endereco: "Av. Senador Vergueiro, 4932, Rudge Ramos - São Bernardo do Campo/SP",
		telefones: ["(11) 2897-4362", "(11) 2897-4474"],
		whatsapp: "11954916054"
	},
	{
		cidade: "São Bernardo do Campo",
		nome: "P. Roquetti",
		endereco: "Rua João Roquetti, 10, Centro - São Bernardo do Campo/SP",
		telefones: ["(11) 4127-3966"],
		whatsapp: "11959592767"
	},
	{
		cidade: "Ribeirão Pires",
		nome: "Miguel Prisco",
		endereco: "Rua Miguel Prisco, 120, Centro - Ribeirão Pires/SP",
		telefones: ["(11) 4828-3646"],
		whatsapp: "11953434831"
	},
	{
		cidade: "São Paulo",
		nome: "Abraão de Morais",
		endereco: "Av. Professor Abrãao de Morais, 225, Saúde - São Paulo/SP",
		telefones: ["(11) 2577-2375"],
		whatsapp: "11959307021"
	},
	{
		cidade: "São Paulo",
		nome: "Vila Mariana",
		endereco: "Av. Dr. Ricardo Jafet, 431, Vila Mariana - São Paulo/SP, 04261-000",
		telefones: ["(11) 2273-4026"],
		whatsapp: "11986778558"
	},
	{
		cidade: "São Paulo",
		nome: "Moema",
		endereco: "Alameda dos Maracatins, 943, Moema - São Paulo/SP, 04089-012",
		telefones: ["(11) 2352-2121", "(11) 93064-2096"],
		whatsapp: "11930642096"
	}
];
var PRODUTOS = [
	{
		id: "conforto-plus",
		nome: "Conforto Plus Pillow Top",
		categoria: "Casal",
		descricao: "Colchão de molas ensacadas com pillow top em espuma D33, alta durabilidade e suporte ergonômico.",
		caracteristicas: [
			"Molas ensacadas",
			"Pillow Top",
			"Tecido antialérgico",
			"Garantia 5 anos"
		],
		imagem: mattress_1_default,
		destaque: true
	},
	{
		id: "memory-cloud",
		nome: "Memory Cloud Premium",
		categoria: "Queen",
		descricao: "Espuma viscoelástica de alta densidade que se molda ao corpo, aliviando pontos de pressão.",
		caracteristicas: [
			"Memory Foam",
			"Densidade D45",
			"Tecido respirável",
			"Garantia 7 anos"
		],
		imagem: mattress_2_default,
		destaque: true
	},
	{
		id: "majestic-king",
		nome: "Majestic King Euro Pillow",
		categoria: "King",
		descricao: "O ápice do conforto. Molas pocket de 7 zonas com Euro Pillow exclusivo.",
		caracteristicas: [
			"Molas Pocket 7 zonas",
			"Euro Pillow",
			"Bordas reforçadas",
			"Garantia 10 anos"
		],
		imagem: mattress_3_default,
		destaque: true
	},
	{
		id: "ortho-spring",
		nome: "Ortho Spring Firme",
		categoria: "Casal",
		descricao: "Suporte ortopédico ideal para quem busca firmeza e alinhamento da coluna.",
		caracteristicas: [
			"Molas Bonnel",
			"Espuma D28",
			"Firmeza alta"
		],
		imagem: mattress_4_default
	},
	{
		id: "sweet-dreams",
		nome: "Sweet Dreams Solteiro",
		categoria: "Solteiro",
		descricao: "Conforto e leveza para o quarto das crianças e adolescentes.",
		caracteristicas: [
			"Espuma D23",
			"Tecido infantil",
			"Antiácaro"
		],
		imagem: mattress_5_default
	},
	{
		id: "box-premium",
		nome: "Box Base Premium",
		categoria: "Box",
		descricao: "Base box reforçada com madeira maciça e revestimento sofisticado.",
		caracteristicas: [
			"Madeira maciça",
			"Tecido suede",
			"Pés cromados"
		],
		imagem: mattress_3_default
	},
	{
		id: "kit-travesseiros",
		nome: "Kit Travesseiros e Edredom",
		categoria: "Acessórios",
		descricao: "Conjunto premium com 2 travesseiros e edredom dupla face.",
		caracteristicas: [
			"Fibra siliconizada",
			"100% algodão",
			"Hipoalergênico"
		],
		imagem: mattress_6_default
	},
	{
		id: "casal-essencial",
		nome: "Essencial Casal",
		categoria: "Casal",
		descricao: "O custo-benefício perfeito para o seu descanso diário.",
		caracteristicas: [
			"Espuma D26",
			"Tecido jacquard",
			"Garantia 3 anos"
		],
		imagem: mattress_2_default
	}
];
//#endregion
export { waLink as i, PRODUTOS as n, SITE as r, LOJAS as t };
