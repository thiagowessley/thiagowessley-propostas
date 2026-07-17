import type { SobreProfissional } from '../types/proposta'

/**
 * Textos padrao reutilizados entre propostas. Fonte unica: mudar aqui
 * muda em toda proposta que importa, sem precisar editar arquivo por
 * arquivo. Regras de tom vivem no CLAUDE.md secao 04 e 06.
 */

export const SOBRE_PADRAO: SobreProfissional = {
  saudacao: 'Quem entrega',
  paragrafos: [
    'Sou o Thiago Wessley, de Joinville. Atuo em comunicação, design e audiovisual para marcas que precisam de presença profissional: site que converte, conteúdo que sustenta presença e vídeo que carrega a mensagem.',
    'Nos últimos anos entreguei sites institucionais, identidade visual, cobertura de eventos e gestão de conteúdo para empresas e projetos que precisavam parecer sérios antes mesmo de crescer.',
    'Cada entrega segue o mesmo padrão: estrutura clara, estética premium e conteúdo que alimenta tanto o Google quanto as IAs que as pessoas já usam para buscar.',
  ],
  atuacao: [
    { nome: 'Audiovisual', nivel: 95 },
    { nome: 'Comunicação', nivel: 90 },
    { nome: 'Design', nivel: 88 },
    { nome: 'Desenvolvimento Web', nivel: 80 },
    { nome: 'SEO e GEO', nivel: 75 },
  ],
}

/** Nome de pagina inicial: sempre por extenso, nunca "Home" (leigo nao entende). */
export const TITULO_PAGINA_INICIAL = 'Página Inicial'

/** Nome da fase final de producao (SEO, revisao, publicacao). */
export const TITULO_FASE_LANCAMENTO = 'Ajustes finais e lançamento'

/**
 * Condicao de entrega/publicacao, tom confiante (nunca "apos o ok",
 * que soa como pedir permissao). destino opcional, ex: "na hospedagem do cliente".
 */
export function condicaoAprovacaoPublicacao(destino?: string) {
  const fim = destino ? `o site vai ao ar ${destino}.` : 'o site vai ao ar.'
  return {
    texto: `A entrega para aprovação é feita por link. Aprovado, ${fim}`,
    bold: destino ? `vai ao ar ${destino}` : 'vai ao ar',
  }
}

/** Frase de encerramento padrao, tom confiante (nunca "com o ok"). */
export function encerramentoPadrao(oQueJaSabe: string) {
  return `Você chegou até aqui, então já sabe ${oQueJaSabe}. Me chama no WhatsApp pra fechar ou tirar as dúvidas que ficaram, e a gente alinha os próximos passos.`
}

/** Entrega padrao de cobertura de eventos (CLAUDE.md secao 06). */
export const ENTREGA_COBERTURA_PADRAO =
  'A entrega padrão inclui até 20 fotos editadas, um aftermovie de até 1:00 min, cortes para redes e arquivo no Flickr institucional.'
