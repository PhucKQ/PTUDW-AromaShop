const express = require('express');
const app = express();

// Set Public Static folder
app.use(express.static(__dirname + '/public'));

// Use view engine express-handlebars
const expressHbs = require('express-handlebars');
const hbs = expressHbs.create({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true
    }
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

// Define your routes here
// -> index
// app.get('/', (req, res) => {     // trước khi có folder routes sử dụng cấu hình này để route,
//     res.render('index');         // định nghĩa route xong thì thay bằng dòng 23
// });
app.use('/', require('./routes/indexRouter'));

// /products -> category
app.use('/products', require('./routes/productRouter'));

// /products/:id -> single-product
app.get('/sync', (req, res) => {
    let models = require('./models');
    models.sequelize.sync()
    .then(() => {
        res.send('database sync completed');
    });
});

// app.get('/:page', (req, res) => {
//     let banners = {
//         blog: 'Our Blog',
//         cart: 'Shopping Cart',
//         category: 'Shop Category',
//         checkout: 'Product Checkout',
//         confirmation: 'Order Confirmation',
//         contact: 'Contact Us',
//         login: 'Login / Register',
//         register: 'Register',
//         "single-blog": 'Blog Details',
//         "single-product": 'Shop Single',
//         "tracking-order": 'Order Tracking',
//     };
//     let page = req.params.page;
//     res.render(page, { banner: banners[page] });
// });



// Set Server Port & Start Server
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log(`Server is listening on port ${app.get('port')}`);
});