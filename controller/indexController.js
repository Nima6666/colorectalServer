const Service = require("../model/service");

module.exports.postService = async (req, res) => {
  console.log("adding service");
  try {
    const serviceAdded = await Service.create({
      image: req.body.image,
      title: req.body.title,
      description: req.body.description,
      content: req.body.content,
    });
    res.status(201).json(serviceAdded);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

module.exports.getServices = async (req, res) => {
  console.log("getting all services");
  try {
    const allSevices = await Service.find({});
    res.status(200).json(allSevices);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err,
    });
  }
};
