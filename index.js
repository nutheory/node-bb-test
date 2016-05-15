var express = require('express'),
    path = require('path'),
    hbs = require('hbs'),
    app = express()


app.set('port', (process.env.PORT || 5000))
app.use(express.static(path.join(__dirname, '/dist')))
app.set('views', path.join(__dirname, '/dist'))
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
  res.render('index', { title: 'Billabong Test' })
})

app.get('/products', function(req, res) {
  var end_record = req.query.page*req.query.page_size
  var start_record = end_record - req.query.page_size

  var sampleJSON = [
      {
        "id": "1",
        "url":"https://us.billabong.com/shop/product/mens-boardshorts/tribong-x-pro-1?color=STH",
        "img":"https://cdn-us-ec.yottaa.net/53c4b5f23c88163c9e00015b/us.billabong.com/v~12.54/media/filter/m/img/m112ftbp_sth_1.jpg?yocs=_&yoloc=us",
        "name":"TRIBONG X PRO BOARDSHORT",
        "price":"$99.95"
      },
      {
        "id": "2",
        "url":"https://us.billabong.com/shop/product/mens-boardshorts/tribong-x-5?color=BLK",
        "img":"https://cdn-us-ec.yottaa.net/53c4b5f23c88163c9e00015b/us.billabong.com/v~12.54/media/filter/m/img/m136ftlf_blk_1.jpg?yocs=_&yoloc=us",
        "name":"TRIBONG X BOARDSHORT",
        "price":"$59.95"
      },
      {
        "id": "3",
        "url":"https://us.billabong.com/shop/product/mens-boardshorts/pulse-x-flare?color=RED",
        "img":"https://cdn-us-ec.yottaa.net/53c4b5f23c88163c9e00015b/us.billabong.com/v~12.54/media/filter/m/img/m103fplx_red_1.jpg?yocs=_&yoloc=us",
        "name":"PULSE X FLARE BOARDSHORTS",
        "price":"$64.95"
      },
      {
        "id": "4",
        "url":"https://us.billabong.com/shop/product/mens-boardshorts/all-day-plaid-x?color=BLU",
        "img":"https://cdn-us-ec.yottaa.net/53c4b5f23c88163c9e00015b/us.billabong.com/v~12.54/media/filter/m/img/m120eapx_blu_1_3.jpg?yocs=_&yoloc=us",
        "name":"ALL DAY X PLAID BOARDSHORTS",
        "price":"$54.95"
      },
      {
        "id": "5",
        "url":"https://us.billabong.com/shop/product/mens-boardshorts/frequency-x?color=BLK",
        "img":"https://cdn-us-ec.yottaa.net/53c4b5f23c88163c9e00015b/us.billabong.com/v~12.54/media/filter/m/img/m138ffre_blk_1.jpg?yocs=_&yoloc=us",
        "name":"FREQUENCY X BOARDSHORTS",
        "price":"$64.95"
      },
      {
        "id": "6",
        "url":"https://us.billabong.com/shop/product/mens-boardshorts/tribong-re-issued-fa?color=NEO",
        "img":"https://cdn-us-ec.yottaa.net/53c4b5f23c88163c9e00015b/us.billabong.com/v~12.54/media/filter/m/img/m137etlf_neo_1.jpg?yocs=_&yoloc=us",
        "name":"TRIBONG RE-ISSUE FADED LO TIDES BOARDSHORTS",
        "price":"$59.95"
      },
      {
        "id": "7",
        "url":"https://us.billabong.com/shop/product/mens-boardshorts/vandenberg?color=OLV",
        "img":"https://cdn-us-ec.yottaa.net/53c4b5f23c88163c9e00015b/us.billabong.com/v~12.54/media/filter/m/img/m125evan_olv_1_2.jpg?yocs=_&yoloc=us",
        "name":"VANDENBERG LO TIDES BOARDSHORTS",
        "price":"$64.95"
      },
      {
        "id": "8",
        "url":"https://us.billabong.com/shop/product/mens-boardshorts/tribong-x-scallop?color=MNT",
        "img":"https://cdn-us-ec.yottaa.net/53c4b5f23c88163c9e00015b/us.billabong.com/v~12.54/media/filter/m/img/m116fhox_mnt_need_model.jpg?yocs=_&yoloc=us",
        "name":"TRIBONG X SCALLOP BOARDSHORTS",
        "price":"$54.95"
      }
    ]

  var result_set = sampleJSON.slice(start_record, end_record)

  res.send(result_set)
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'))
})
