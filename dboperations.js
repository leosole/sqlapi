var  config = require('./dbconfig');
const  sql = require('mssql');

async  function  getProdutos() {
  try {
    let  pool = await  sql.connect(config);
    let  products = await  pool.request().query("SELECT * from Produto");
    return  products.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getProduto(productId) {
  try {
    let  pool = await  sql.connect(config);
    let  product = await  pool.request()
    .input('input_parameter', sql.Int, productId)
    .query("SELECT * from Produto where Id = @input_parameter");
    return  product.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  addProduto(Produto) {
  try {
    let  pool = await  sql.connect(config);
    let  insertProduct = await  pool.request()
    // .input('Id', sql.Int, Produto.Id)
    .input('Nm_Produto', sql.NVarChar, Produto.Nome)
    .input('Nm_Cor', sql.NVarChar, Produto.Cor)
    .input('Qt_Peso', sql.Float, Produto.Peso)
    .input('Nm_Cidade', sql.NVarChar, Produto.Cidade)
    .execute('InsertProdutos');
    return  insertProduct.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

module.exports = {
  getProdutos:  getProdutos,
  getProduto:  getProduto,
  addProduto:  addProduto
}