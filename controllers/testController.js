const Test = require("./../models/testModel");

exports.createDocument = async (req, res) => {
  try {
    const newDocument = await Test.create(req.body);

    res.status(200).json({
      status: "Success",
      data: {
        newDocument,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
