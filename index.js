import chalk from "chalk";
import fs from "fs";

 function trataErro(erro) {
     console.log(erro);
     throw new Error(chalk.red.bgRed(erro.code, 'não há arquivos'));
 }

// async/await 

async function pegaArquivo(caminhoArquivo){
    try{
        const encoding = "utf-8";
        const texto = await fs.promises.readFile(caminhoArquivo, encoding)
        console.log(chalk.green(texto));
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

pegaArquivo("./arquivos/")