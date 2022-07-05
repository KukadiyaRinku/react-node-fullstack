const express = require('express');
const conn = require('../config.js');
const cors = require('cors');

const router = express.Router();
router.use(express.json());
router.use(cors())

router.get('/', (req, res) => {
    conn.query("SELECT * FROM `USER`", (err, result) => {
        if (err)
            res.send("Unable to fetch data from user.")
        else
            res.send(JSON.stringify(result));
    });
});

router.post("/", async (req, res) => {
    const paramUser = req.body;
    await conn.query("INSERT INTO `USER` SET ? ", paramUser, (err, result, fields) => {
        if (err) res.send(err);
        else res.send(result);
    });
});

router.put('/:id', async (req, res) => {
    const data = [req.body.name, req.body.dob, req.body.user_type, req.params.id];
    await conn.query("UPDATE `USER` SET NAME=?, DOB=?, USER_TYPE=? WHERE ID = ? ", data, (err, result, fields) => {
        if (err) res.send(err)
        else res.send(result);
    })
});

router.delete('/:id', (req, res) => {
    const data = [req.params.id];
    conn.query("DELETE FROM `USER` WHERE ID =?", data, (err, result, fields) => {
        if (err) res.send(err)
        else res.send(result);
    });
});

module.exports = router;