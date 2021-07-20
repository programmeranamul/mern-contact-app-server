const router = require("express").Router()
const { getAllContac, getContactById, createContact, updateContactById, deletContactById } = require('./contact.controller');

router.get("/", getAllContac)
router.get("/:id", getContactById)
router.post("/", createContact)
router.put("/", updateContactById)
router.delete("/:id", deletContactById)



module.exports=router
