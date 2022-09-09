const express = require('express');
const app = express();

// Set Public Static folder
app.use(express.static(__dirname + '/public'));

// Use view engine express-handlebars
const expressHbs = require('express-handlebars');
const  helper = require('./controllers/helper');
const paginateHelper = require('express-handlebars-paginate');
const hbs = expressHbs.create({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true
    },
    helpers: {
        createStarList: helper.createStarList,
        createStar: helper.createStar,
        createPagination: paginateHelper.createPagination,
    }
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

// Body parser
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Use Cookie-parser
let cookieParser = require('cookie-parser');
app.use(cookieParser());

// Use Session
let session = require('express-session');
app.use(session({
    cookie: { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000 },
    secret: 'S3cret',
    resave: false,
    saveUninitialized: false,
}));

// Use Cart controller
let Cart = require('./controllers/cartController');
app.use((req, res, next) => {
    let cart = new Cart(req.session.cart ? req.session.cart : {});
    req.session.cart = cart;
    res.locals.totalQuantity = cart.totalQuantity;
    next();
});

// Define your routes here
// -> index
// app.get('/', (req, res) => {     // trước khi có folder routes sử dụng cấu hình này để route,
//     res.render('index');         // định nghĩa route xong thì thay bằng dòng 23
// });
app.use('/', require('./routes/indexRouter'));

// /products -> category
app.use('/products', require('./routes/productRouter'));
app.use('/cart', require('./routes/cartRouter'));
app.use('/comments', require('./routes/commentRouter'));

// /products/:id -> single-product
app.get('/sync', (req, res) => {
    let models = require('./models');
    models.sequelize.sync()
    .then(() => {
        res.send('database sync completed');
    });
});

// Set Server Port & Start Server
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log(`Server is listening on port ${app.get('port')}`);
});