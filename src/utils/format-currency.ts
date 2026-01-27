/**
 * Formata um número para o padrão de moeda brasileira (R$)
 * @param value - O valor numérico a ser formatado
 * @returns String formatada em padrão monetário
 */
export function formatCurrency(value: number | string): string {
  const numValue = typeof value === 'string' ? parseFloat(value) : value;

  if (isNaN(numValue)) {
    return 'R$ 0,00';
  }

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(numValue);
}

// /**
//  * Converte um valor formatado de moeda para número
//  * @param value - String formatada (ex: "R$ 1.250,00")
//  * @returns Número correspondente
//  */
// export function parseCurrency(value: string): number {
//   const numericValue = value
//     .replace(/[^\d,-]/g, '')
//     .replace(/\./g, '')
//     .replace(/,/g, '.');

//   return parseFloat(numericValue) || 0;
// }

// /**
//  * Formata um valor monetário com opções customizadas
//  * @param value - O valor numérico
//  * @param locale - Localização (padrão: 'pt-BR')
//  * @param currency - Código da moeda ISO 4217 (padrão: 'BRL')
//  * @returns String formatada
//  */
// export function formatCurrencyCustom(
//   value: number | string,
//   locale: string = 'pt-BR',
//   currency: string = 'BRL'
// ): string {
//   const numValue = typeof value === 'string' ? parseFloat(value) : value;

//   if (isNaN(numValue)) {
//     return '0';
//   }

//   return new Intl.NumberFormat(locale, {
//     style: 'currency',
//     currency: currency,
//   }).format(numValue);
// }

// /**
//  * Valida se uma string é um valor monetário válido
//  * @param value - String a ser validada
//  * @returns true se for um valor monetário válido
//  */
// export function isValidCurrency(value: string): boolean {
//   const currencyRegex = /^R\$\s*[\d.,]+$/;
//   return currencyRegex.test(value.trim());
// }

// /**
//  * Aplica desconto a um valor monetário
//  * @param value - Valor original
//  * @param discountPercent - Percentual de desconto (0-100)
//  * @returns Valor com desconto aplicado
//  */
// export function applyCurrencyDiscount(
//   value: number | string,
//   discountPercent: number
// ): number {
//   const numValue = typeof value === 'string' ? parseFloat(value) : value;
//   const discount = discountPercent / 100;
//   return numValue * (1 - discount);
// }

// /**
//  * Calcula o valor total com impostos (ICMS)
//  * @param value - Valor base
//  * @param taxPercent - Percentual de imposto (0-100)
//  * @returns Valor com imposto aplicado
//  */
// export function applyTax(
//   value: number | string,
//   taxPercent: number
// ): number {
//   const numValue = typeof value === 'string' ? parseFloat(value) : value;
//   const tax = taxPercent / 100;
//   return numValue * (1 + tax);
// }
