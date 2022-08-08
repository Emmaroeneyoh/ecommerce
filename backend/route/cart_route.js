const router = require('express').Router()
const tray = require('../modal/cart')
const pay = require('../modal/paid')

router.post('/cart', async (req, res) => {
    console.log(req.body)
    try {
        const newitem = await new tray({
            cart:req.body.product,
            cartPrice:req.body.subprice,
            cartTotal:req.body.subtotal
        })
        
        const saveitem = await newitem.save()
        console.log(saveitem)
        res.json({message:'cart succesuly saved'})
    } catch (error) {
        console.log(error)
    }
})

router.post("/pay", async (req, res) => {
  console.log(req.body);
  try {
    const newitem = await new pay({
      cart: req.body.cart,
      cartPrice: req.body.amount,
      cartTotal: req.body.total,
      username: req.body.name,
      email: req.body.email,
      transactionID: req.body.transaction_id,
      text_ref: req.body.tx_ref,
    });

    const saveitem = await newitem.save();
    console.log(saveitem);
    res.json({ message: "cart succesuly saved" });
  } catch (error) {
    console.log(error);
  }
});

router.get('/cart', async (req, res) => {
    try {
        const item = await tray.find()
        console.log(tray)
        res.json(item)
    } catch (error) {
        console.log(error)
        res.json({error:'error ocuured'})
    }
})




module.exports = router