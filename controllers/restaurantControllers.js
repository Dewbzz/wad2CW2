const menuDAO = require('../models/menuModel');
const userDao = require('../models/userModel.js');

const db = new menuDAO();
db.init();

exports.landing_page = function (req, res) {
    db.getAllEntries()
        .then((list) => {
            res.render('home', {
                'title': 'Home Page',
                entries: list,
            });
        });
};
exports.get_menu = function (req, res) {
    res.send('');
    db.getAllEntries();
}
exports.pasta = function (req, res) {
    res.send('<h1>Processing Pasta Entries, see terminal</h1>');
    db.getPastaEntries();
}
exports.entries = function (req, res) {
    db.getAllEntries()
        .then((list) => {
            res.render('entries', {
                'title': 'Menu',
                entries: list,
                user: "user"
            });
        })
        .catch((err) => {
            console.log("promise rejected", err);
        });
};
exports.show_new_entries = function (req, res) {
    res.render('newEntry', {
        'title': 'New Dish',
        user: "user"
    })
}
exports.post_new_entry = function (req, res) {
    console.log('processing post-new_entry controller');
    db.addEntry(req.body.dishName, req.body.description, req.body.ingredients, req.body.dishType, req.body.advice, req.body.price);
    res.redirect("/loggedIn");
}
exports.show_menu_entries = function (req, res) {
    console.log('filtering by dish type', req.params.dishType);
    let dishType = req.params.dishType;
    db.getEntriesByDishType(dishType).then(
        (entries) => {
            res.render('entries', {
                'title': 'Menu',
                'entries': entries
            });
        }).catch((err) => {
            console.log('error handling dish types', err);
        });
}
exports.show_register_page = function (req, res) {
    res.render("user/register");
}

exports.post_new_user = function (req, res) {
    const user = req.body.username;
    const password = req.body.pass;
    if (!user || !password) {
        res.send(401, 'no user or no password');
        return;
    }
    userDao.lookup(user, function (err, u) {
        if (u) {
            res.send(401, "User exists:", user);
            return;
        }
        userDao.create(user, password);
        console.log("register user", user, "password", password);
        res.redirect('/login');
    });
}
exports.show_login_page = function (req, res) {
    res.render("user/login");
};
exports.handle_login = function (req, res) {
    res.redirect("/loggedIn");
};
exports.loggedIn_landing = function (req, res) {
    db.getAllEntries()
        .then((list) => {
            res.render("home", {
                entries: list,
                user: "user"
            });
            console.log("promise resolved");
        })
        .catch((err) => {
            console.log("promise rejected", err);
        });
};
exports.logout= function (req, res) {
    res
    .clearCookie("jwt")
    .status(200)
    .redirect("/");
    }