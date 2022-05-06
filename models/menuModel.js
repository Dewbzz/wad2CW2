const { name } = require('mustache');
const nedb = require('nedb');
class Menu {
    constructor(dbFilePath) {
        if (dbFilePath) {
            this.db = new nedb({ filename: dbFilePath, autoload: true });
            console.log('DB connected to ' + dbFilePath);
        } else {
            this.db = new nedb();
        }
    }

    init() {
        this.db.insert({
            dishName: 'Spaghetti Bolognese',
            description: 'Spaghetti tossed in a tomato ragu',
            ingredients: 'Pasta, Beef, Tomato',
            dishType: 'Pasta',
            advice: 'Not fit for vegans/vegetarians',
            price: 12.00
        });
        //for later debugging
        console.log('db entry spaghetti inserted');
        this.db.insert({
            dishName: 'Shrimp Fried Rice',
            description: 'Shrimp fried in sauce served with steamed rice',
            ingredients: 'Shrimp, Rice, Chilli',
            dishType: 'Asian',
            advice: 'contains shellfish',
            price: 15.00
        });
        //for later debugging
        console.log('db entry shrimp fried rice inserted');
    }

    //a function to return all entries from the database
    getAllEntries() {
        //return a Promise object, which can be resolved or rejected
        return new Promise((resolve, reject) => {
            //use the find() function of the database to get the data,
            //error first callback function, err for error, entries for data
            this.db.find({}, function (err, entries) {
                //if error occurs reject Promise
                if (err) {
                    reject(err);
                    //if no error resolve the promise & return the data
                } else {
                    resolve(entries);
                }
            })
        })
    }

    getPastaEntries() {
        //return a Promise object, which can be resolved or rejected
        return new Promise((resolve, reject) => {
            //find(dishType: Pasta) retrieves the data,
            //with error first callback function, err=error, entries=data
            this.db.find({ dishType: 'Pasta' }, function (err, entries) {
                //if error occurs reject Promise
                if (err) {
                    reject(err);
                    //if no error resolve the promise and return the data
                } else {
                    resolve(entries);
                    //to see what the returned data looks like
                    console.log('getPastaEntries() returns: ', entries);
                }
            })
        })
    }

    addEntry(dishName, description, ingredients, dishType, advice, price) {
        var entry = {
            dishName: dishName,
            description: description,
            ingredients: ingredients,
            dishType: dishType,
            advice: advice,
            price: price
        }
        console.log('entry created', entry);
        this.db.insert(entry, function (err, doc) {
            if (err) {
                console.log('Error inserting document', subject);
            } else {
                console.log('document inserted into the database', doc);
            }
        })
    }

    getEntriesByDishType(dishType) {
        return new Promise((resolve, reject) => {
            this.db.find({ 'dishType': dishType }, function (err, entries) {
                if (err) {
                    reject(err);
                } else {
                    resolve(entries);
                    console.log('getEntriesByDishType returns: ', entries);
                }
            })
        })
    }

}

//make the module visible
module.exports = Menu;