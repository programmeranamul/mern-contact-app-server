const MyContact = require("./Contact.Schema");

exports.getAllContac = (req, res) => {
  MyContact.find({})
    .then((contacts) => {
      res.status(200).json(contacts);
    })
    .catch((err) => {
      res.status(400).json({
        message: "Some error find",
      });
    });
};

exports.getContactById = (req, res) => {
  const { id } = req.params;
  console.log(id);
  MyContact.findOne({ _id: id })
    .then((contact) => {
      res.status(200).json(contact);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.createContact = (req, res) => {
  const { name, email, phone } = req.body;
  const newContact = new MyContact({
    name,
    email,
    phone,
  });
  newContact
    .save()
    .then((c) => res.status(200).json(c))
    .catch((e) => {
      console.log(e);
      res.status(400).json({
        message: "Fatching some erro",
      });
    });
};

exports.updateContactById = (req, res) => {
  const { name, email, phone, _id } = req.body;
  console.log(_id);

  if (_id) {
    MyContact.findOneAndUpdate(
      { _id: _id },
      {
        $set: {
          name,
          email,
          phone,
        },
      },

      { new: true }
    )
      .then((c) => {
        res.status(201).json(c);
      })
      .catch((err) => {
        res.json(400).json(err);
      });
  } else {
    const newContact = new MyContact({
      name,
      email,
      phone,
    });
    newContact
      .save()
      .then((c) => res.status(200).json(c))
      .catch((e) => {
        console.log(e);
        res.status(400).json({
          message: "Fatching some erro",
        });
      });
  }
};

exports.deletContactById = (req, res) => {
  const { id } = req.params;
  console.log(id);
  if (id) {
    MyContact.findOneAndDelete({ _id: id })
      .then((c) => {
        console.log("from tahen");
        res.status(200).json(c);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } else {
    res.status(400).json({
      err: "Id not fount",
    });
  }
};
