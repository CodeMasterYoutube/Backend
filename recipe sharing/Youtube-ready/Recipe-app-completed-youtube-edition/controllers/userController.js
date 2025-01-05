const User = require("../models/User");
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    return res.status(200).json(users);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server Error", error: error.message });
  }
};

exports.getUserProfile = async (req, res) => {
  const id = req.user.id;
  try {
    const user = await User.findById(id).select("-password");
    return res.status(200).json(user);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server Error...", error: error.message });
  }
};
exports.updateUserProfile = async (req, res) => {
  const { email, username } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { email, username },
      { new: true }
    );
    return res.status(200).json(user);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server Error", error: error.message });
  }
};
exports.followTheUser = async (req, res) => {
  try {
    const userTobeFollowed = await User.findById(req.params.userId);
    if (!userTobeFollowed) {
      return res.status(404).json({ message: "User not found" });
    }
    const user = await User.findById(req.user.id);
    if (!user.followings.includes(userTobeFollowed._id)) {
      user.followings.push(userTobeFollowed._id);
      await user.save();
    }
    res.status(200).json(user);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server Error", error: error.message });
  }
};
