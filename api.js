var  Db = require('./dboperations');
var  Produto = require('./produto');
var  express = require('express');
var  bodyParser = require('body-parser');
var  cors = require('cors');
var  app = express();
var  router = express.Router();

app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request, response, next) => {
  console.log('middleware');
  next();
});
 
 
router.route('/Produtos').get((request, response) => {
    Db.getProdutos().then((data) => {
        response.json(data[0]);
    })
})

router.route('/Produtos/:id').get((request, response) => {
  Db.getProduto(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('/Produtos').post((request, response) => {
  let  Produto = { ...request.body }
  Db.addProduto(Produto).then(data  => {
    response.status(201).json(data);
  })
})
  
  
var  port = process.env.PORT || 8090;
app.listen(port);
console.log('Produto API is runnning at ' + port);