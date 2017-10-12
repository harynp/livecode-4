// buatlah applikasi CRUD untuk tabel Suppliers pada file suppliers.js
// GET /suppliers (menampilkan semua data supplier)
// GET /suppliers/add (menampilkan form untuk input)
// POST /suppliers/add (menghandle input dari form)
// GET /suppliers/edit/:id (menampilkan form data suppliers berdasarkan id)
// POST /suppliers/edit/:id (meng-handle input dari form saat update)
// GET /suppliers/delete/:id (men-delete data suppliers berdasarkan id)


const express = require('express')
const router = express.Router()
const Model = require('../models')


router.get('/', (req,res) => {
  Model.Supplier.findAll()
  .then(dataSupplier =>{
    res.render('suppliers', {dataSupplier:dataSupplier})
  })
})

router.get('/add',(req,res)=>{
  Model.Supplier.findAll()
  .then(dataSupplier=>{
    res.render('add_suppliers',{dataSupplier:dataSupplier})
  })
  .catch(err=>{
    res.send(err)
  })
})

router.post('/add', (req,res)=>{
  Model.Supplier.create({
    name: req.body.name,
    kota: req.body.kota
  })
  .then(()=>{
    res.redirect('/suppliers')
  })
  .catch(err=>{
    res.send(err)
  })
})

router.delete('/delete/:id', (req,res)=>{
  Model.Supplier.destroy({
    where:{
      id:req.params.id
    }
  })
  .then(()=>{
    res.redirect('/suppliers')
  })
  .catch(err=>{
    res.send(err)
  })
})

router.get('/edit/:id', (req,res)=>{
  Model.Supplier.findById(req.params.id)
  .then(dataSupplier=>{
    res.render('edit_suppliers',{dataSupplier:dataSupplier})
  })
  .catch(err=>{
    res.send(err)
  })
})

router.post('/edit/:id',(req,res)=>{
  Model.Supplier.update({
    name: req.body.name,
    kota: req.body.kota
  },{
    where: {
      id: req.params.id
    }
  })
  .then(data=>{
    res.redirect('/suppliers')
  })
  .catch(err=>{
    res.send(err)
  })
})










module.exports = router;
