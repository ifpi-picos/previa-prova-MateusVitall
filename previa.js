
export function maiorNumero(lista) {
       if(!Array.isArray(lista) || lista.length === 0){
    return null
    }
    return Math.max(...lista)
}

export function verificarParOuImpar(n){
    if(typeof n == "string") return null

    if(n % 2 === 0){
        return "Par"
    }else{
        return "Ímpar"
    }
}




/*Função 1 (maiorNumero): Retorna o maior número da lista usando Math.max(). Se a lista for vazia ou inválida, retorna null.
Função 2 (verificarParOuImpar): Verifica se um número é par ou ímpar usando o operador %.
Função 3 (contarCaracterA): Conta quantas vezes o caractere 'a' ou 'A' aparece em uma string usando um loop while.
Função 4 (atualizarPropriedade): Atualiza o valor de uma propriedade existente em um objeto. Se a chave não existir, retorna null.*/