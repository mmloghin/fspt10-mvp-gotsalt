const express = require("express");
const router = express.Router()
const { Notes } = require("../models");


router.get("/:saltDatumId", async (req, res) => {
    const saltDatumId = req.params.saltDatumId;
    const notes = await Notes.findAll({where: {SaltDatumId: saltDatumId}
    })
    res.json(notes);
});

router.post("/", async (req, res) => {
    const note = req.body;
    await Notes.create(note);
    res.json(note);
    
});

router.delete("/:noteId", async (req, res) => {
    const noteId = req.params.noteId;

    await Notes.destroy({
        where: {
            id: noteId,
        },
    });

    res.json("Deleted note")
});

module.exports = router;