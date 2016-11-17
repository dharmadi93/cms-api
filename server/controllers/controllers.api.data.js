const Data = require('../models/data')

module.exports = {
    seedData: function (req, res) {
        const seed = [
            {
                letter: 'A',
                frequency: 10
            },
            {
                letter: 'B',
                frequency: 20
            },
            {
                letter: 'C',
                frequency: 30
            },
            {
                letter: 'D',
                frequency: 40
            },
            {
                letter: 'E',
                frequency: 50
            }
        ]

        Data.create(seed, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

    createData: function (req, res) {

    },

    getAllData: function (req, res) {

    },

    getDataById: function (req, res) {

    },

    getDataByLetter: function (req, res) {

    },

    deleteAllData: function (req, res) {
        Data.remove({}, function (err) {
            if (err) res.json(err)
            else res.json('all data deleted')
        })
    },

    deleteDataById: function (req, res) {

    }
}