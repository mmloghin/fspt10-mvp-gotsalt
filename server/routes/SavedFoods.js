const express = require("express");
const router = express.Router()
const { SaltData } = require("../models");

router.get("/", async (req, res) => {
    const listOfSaltData = await SaltData.findAll();
    res.json(listOfSaltData);
});

router.get("/byId/:id", async (req, res) => {
    const id = req.params.id
    const selectEntry = await SaltData.findByPk(id);
    res.json(selectEntry);
})

router.post("/", async (req, res) => {
    const newEntry = req.body;
    await SaltData.create(newEntry);
    res.json(newEntry);
});

router.delete("/:entryId", async (req, res) => {
   const entryId = req.params.entryId
   
   await SaltData.destroy({
        where: {
            id: entryId,
        },
    });

    res.json("Delete entry")
});


module.exports = router;