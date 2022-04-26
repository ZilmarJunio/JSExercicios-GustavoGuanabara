
//A função irá permitir que seja apresentado somente STRINGS do objeto filme ->

const filme = {

    titulo_Filme: 'Big data',
    nota_Filme: 8,
    autor_Filme: 'Bill Jobs',
    ano_Filme: 2022,
    
}

exibirStrings(filme)

function exibirStrings(objeto) {
    
  for (const prop in objeto) {
     
    if (typeof objeto[prop] === 'string') {

        console.log(`${prop}: ${objeto[prop]}` )

    }
    
  }

}