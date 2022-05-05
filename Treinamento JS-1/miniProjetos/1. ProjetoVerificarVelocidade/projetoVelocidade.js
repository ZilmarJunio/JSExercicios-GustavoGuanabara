/*
Velocidade máxima permitida: 70km/h
A cada 5km acima da vel. máxima, 1 ponto na carteira
Caso o total de pontos for maior que 12 - > Carteira é "suspendida"

Usos
Uso do Math.floor() -> Arredondamento de valores
*/

verificarVelocidade(40)

function verificarVelocidade(velocidade) {

    let pontos

    if((velocidade <= 70)&&(velocidade >= 0)){
        console.log('Ok!')
    }else if(velocidade < 0){ 
        console.log('Valor inserido incorreto.')
    }else{
        pontos = Math.floor((velocidade-70)/5)
        console.log(`Você acaba de levar ${pontos} pontos na carteira.`)
    }
    
}
