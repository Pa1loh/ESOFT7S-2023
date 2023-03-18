import { Double } from 'mongodb'
import { Schema, model, Document } from 'mongoose'

const ProdutoEschema = new Schema({
    nome: String,
    qtde: Double,
    preco: Double,
    data_compra: TimeRanges,
    data_entrega: TimeRanges,
    
},)

export default model('Product', ProdutoEschema)


