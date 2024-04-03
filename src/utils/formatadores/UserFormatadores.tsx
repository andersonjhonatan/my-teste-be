/* Função para formatar a data de admissão */
export const dataAdmissaoFormatada = (data: string) => {
  const date = new Date(data)
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

/* Função para formatar o telefone */
export const phoneFormat = (phone: string): string => {
  const phoneFormatado = phone
    .replace(/\D/g, '')
    .replace(/^(\d{0, 2})(\d{5})(\d{4})/, '($1) $2-$3')

  const phoneFormatted = `+${phoneFormatado.slice(0, 2)} (${phoneFormatado.slice(
    2,
    4
  )}) ${phoneFormatado.slice(4, 9)}-${phoneFormatado.slice(9)}`

  return phoneFormatted
}

