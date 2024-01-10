import chalk from "chalk";
import fs from "fs";

 function trataErro(erro) {
     console.log(erro);
     throw new Error(chalk.red.bgRed(erro.code, 'não há arquivos'));
 }


function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}));
    return resultados.length !== 0 ? resultados : chalk.red('não há links no arquivo') ;
}

// async/await 

async function pegaArquivo(caminhoArquivo){
    try{
        const encoding = "utf-8";
        const texto = await fs.promises.readFile(caminhoArquivo, encoding);
        return extraiLinks(texto);
    }catch(erro){
        trataErro(erro);
    }
}

//promise com then()

// function pegaArquivo(caminhoArquivo){
//     const encoding = "utf-8";
//     fs.promises.readFile(caminhoArquivo, encoding)
//     .then((texto) => console.log(chalk.green(texto)))
//     .catch(trataErro);
// }

export default pegaArquivo;