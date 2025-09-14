const express = require('express');
const router = express.Router();

const Product = require('../model/product');

//Mongooseの新しいバージョンが、非同期処理の書き方を変更したためです。以前のバージョンで使われていたコールバック関数を使った書き方が、現在は非推奨となり、サポートされなくなっています。
// router.get('', function (req, res) {
//   Product.find({}, function (err, fundProducts) {
//     res.json(fundProducts);
//   });
// });

router.get('', async function (req, res) {
  const foundProducts = await Product.find({});
  res.json(foundProducts);
});

router.get('/:productId', async function (req, res) {
  try {
    const productId = req.params.productId;
    const foundProduct = await Product.findById(productId);
    res.json(foundProduct);
  } catch (err) {
    // エラーを処理
    console.error(err);
    res.status(422).json({ error: 'サーバーエラーが発生しました' });
  }
});

module.exports = router;
