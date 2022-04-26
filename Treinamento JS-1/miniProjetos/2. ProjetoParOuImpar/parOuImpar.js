parouImpar(7)

function parouImpar(value){

    for(;value>=0;value--){

        let parouImpar = (value%2 === 0) ? 'par' : 'impar'
        console.log(`${value} é um número ${parouImpar}!`);

    }

}