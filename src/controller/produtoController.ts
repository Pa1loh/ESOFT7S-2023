import {Request, Response} from 'express'
import ProdutoService from "../service/produtoService";

//let produtoService = new ProductService()

class produtoController {


    public async salvarProduto(req: Request, res: Response) {
        const produtos = await ProdutoService.salvarProduto(req.body);
        return res.send(produtos);
      }

    public async buscarProduto(req: Request, res: Response) {
        const produtos =  ProdutoService.lerProdutos();
        return res.send(produtos);

    }
}

export default new produtoController()