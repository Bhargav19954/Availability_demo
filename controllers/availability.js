const express = require('express')
const Availability = require('../models/availability')
const router = new express.Router()

router.post('/availability', async (req, res) => {
    const availability = new Availability(req.body)
    try {
        await availability.save();
        res.status(201).send({ availability })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/availability', async (req, res) => {
    try {
        const values = await Availability.find({ user_id: (req.query.user_id) }).sort({ startTime: 1 });
        let result = {};
        for (let i = 0; i < values.length; i++) {
            let merge = false;
            if (i != 0) {
                if (values[i].startTime.toISOString() < values[i - 1].endTime.toISOString()) {
                    console.log(values[i].endTime)
                    values[i].startTime = values[i - 1].startTime;
                    merge = true;
                }
            }
            let date = values[i].startTime.toISOString().split('T')[0];
            let s_time = values[i].startTime.toISOString().split('T')[1];
            let e_time = values[i].endTime.toISOString().split('T')[1];
            let range = { start: s_time, end: e_time }
            if (!result[date]) {
                result[date] = [];
            }
            result[date].push(range);
            if (merge) {
                console.log(result[date].length)
                result[date].splice(result[date].length - 2, 1)
                merge = false
            }
        }
        res.status(200).send(result)
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})

module.exports = router;