export function checkFilledkeys(objeto: { [key: string]: any }): boolean {
  for (const chave in objeto) {
    if (Object.prototype.hasOwnProperty.call(objeto, chave)) {
      if (objeto[chave] === '') {
        return false
      }
    }
  }
  return true
}
