const router = require('express').Router()
const multer = require('multer')
const product = require('../modal/modal')
const path = require('path')


//multer define/ setting up
const storage = multer.diskStorage({
    destination: (req, file, cb)=> {
       cb(null, path.join(__dirname, '../../frontend/my-app/public/upload'))
    },
    filename : (req, file, cb) => {
         cb(null, Date.now() + file.originalname)
    }
})
const upload = multer({
    storage:storage,
    limits: 1034*1034 *5
})

const multi = upload.fields([
  { name: "post_img" },
  { name: "cover", maxCount: 3 },
]);
//end

router.get('/home', async (req,res) => {
    try {
        const Blog = await product.find()
      
       res.json(Blog)
    } catch (error) {
        res.json({error: 'error occured'})
    }
})


router.get('/home/:id', (req, res) => {
    const id = req.params.id
    product.findById(id)
    .then((result) => {
        res.json(result)
    })
    .catch((err) => {
        console.log(err)
        res.json({error:'error ocuured'})
    })
   

})


router.get('/create', async (req, res) => {
    try {
        res.render('create')
    } catch (error) {
        console.log(error)
        res.json({error:'error ocuured'})
    }
})


router.post('/create', multi, async  (req, res) => {
 
    
    console.log(req.file)
    try {
        
       const filer = req.files
       console.log(filer)
       if(filer) {
//         const form = await new product({
//             title: req.body.title,
//          price: req.body.price,
//          product_image:req.file.filename
            
            
//         })
//         const blog = await form.save()
//    res.json(blog)
//         console.log(blog)
       } else {
        const form = await new product({
            title: req.body.title,
            price: req.body.price,
           
            
            
        })
        const blog = await form.save()
        res.json(blog)
        
        console.log(blog)
       }
    } catch (error) {
        res.json({error:'error ocuured'})
    }
})
// /end


router.get('/update/:id', async (req, res) => {
    const {id} = req.params
    try {
        const work = await product.findById(id)
        console.log(work)
   res.json(work)
    } catch (error) {
      res.json({error:'error occured'})
    }
})


router.put('/update/:id', upload.single('product_image'), async (req, res) => {
    try {
       const id = req.params.id
       const filer =  req.file
       console.log( filer,req.body)
       if(filer) {
           const image = req.file.filename
           console.log(image)
           const request = await  product.findByIdAndUpdate(id, { $set: {title:req.body.title, product_image:image, price:req.body.price } })
           const work = await product.findById(id)
           console.log(work)
           res.json(work)
           
       } else {
      
        const request = await  product.findByIdAndUpdate(id, { $set: {title:req.body.title, price:req.body.price} })
        const work = await product.findById(id)
        console.log('this is request',work)
        res.json(work)
       }
      
       
      
    } catch (error) {
      res.json({error: 'error occured'})
    }


})

router.delete('/home/:id', async (req, res) => {
    const {id} = req.params
    try {
        const wor = await product.findByIdAndDelete(id)
    
   
        res.json({messg: 'item deleted'})
    } catch (error) {
        res.json({error: 'error occured'})
    }
})




module.exports = router