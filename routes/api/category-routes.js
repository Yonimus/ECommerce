const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({include: [{model: Product}]})
  .then((categoryData)=> {
    res.status(200).json(categoryData);
  })
  .catch((err)=> res.json(err))
});

router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id,{include: [{model: Product}]})
  .then((categoryData)=>{
    res.status(200).json(categoryData)
  })
});

router.post('/', (req, res) => {
  Category.create({
    categoryData_name: req.body.categoryData_name,
  })
  .then((newCategory)=>{
    where: {
      category_id: req.params.id}
  })
});

router.put('/:id', (req, res) => {
  Category.update(req.body,{
    where: {
      category_id: req.params.id,
    }
  })
  .then((categoryUpdate)=>{
    res.status(200).json(categoryUpdate)
  })
  .catch((err)=>{
    res.json(err)
  })
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      category_id: req.params.id,
    }
  })
  .then((categoryData)=>{
    res.status(200).json(categoryDelete)
  })
  .catch((err)=>{
    res.json(err)
  })
});

module.exports = router;
