/*
Velocidade máxima permitida: 70km/h
A cada 5km acima da vel. máxima, 1 ponto na carteira
Caso o total de pontos for maior que 12 - > Carteira é "suspendida"

Usos: 
Uso do Math.floor() -> Arredondamento de valores
*/

verificarVelocidade(12)

function verificarVelocidade(velocidade) {

    const pontos = Math.floor((velocidade-70)/5);

    (velocidade <= 70)&&(velocidade >= 0)?
        console.log('Ok!') :
            (velocidade < 0) ? console.log('Valor incorreto.') : console.log(`Você teve ${pontos} pontos na carteira!`)

    pontos > 12 ? console.log('Sua carteira foi suspendida!'):console.log('Sua carteira não foi suspendida');

}