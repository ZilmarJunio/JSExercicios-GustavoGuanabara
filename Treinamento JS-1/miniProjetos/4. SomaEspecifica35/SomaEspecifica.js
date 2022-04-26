/*Objetivo: Criar uma soma entre todos múltiplos de 3 e os de 5
Compreendidos entre 0 e o valor dado p/ função*/

soma = somaDiferente(10)

function somaDiferente(limit){

    let soma=0

        for(i = limit; i > 0; i--){

             if(i%3 === 0||i%5 === 0){soma+=i}
                
        }

   console.log(soma);
   
}