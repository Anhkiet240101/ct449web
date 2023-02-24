const express = require("express");
const contact = require("../controllers/contact.controllers");

const router = express.Router();

router.route("/")
    .get(contact.findAll)
    .post(contacts.findAll)
    .delete(contacts.deleteAll);

router.route("/favorite")
    .get(contacts.findAllFavorite);

router.route("/:id")
    .get(contact.findOne)
    .put(contacts.update)
    .delete(contacts.delete);

module.exports = router;