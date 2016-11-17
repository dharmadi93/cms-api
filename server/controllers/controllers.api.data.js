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
        const insertData = {
            letter: req.body.letter,
            frequency: req.body.frequency
        }

        Data.create(insertData, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

    getAllData: function (req, res) {
        Data.find(function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

    getDataById: function (req, res) {
        Data.findOne({
            _id: req.params.id
        }, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
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