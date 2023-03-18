import { text } from 'express'
import { writeFile, readFile } from 'fs/promises'

class ProdutoService {
  
  salvarProduto(data) {
    try {
      return writeFile('produtoData.json', JSON.stringify(data, null, 2));
    } catch(err) {
      console.error('erro ao salvar', err);
    }
  }

    async lerProdutos() {
        try{
          const produtos = await readFile('produtoData.json')
          return JSON.parse(produtos.toString('utf-8'))

        }
        catch(err){

          console.error('erro ao ler',err)
        }
    }

  }

export default new ProdutoService();