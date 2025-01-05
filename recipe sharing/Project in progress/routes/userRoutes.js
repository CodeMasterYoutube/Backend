const express = require("express");
const {
  getAllUsers,
  getUserProfile,
  updateUserProfile,
  followTheUser,
} = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/all", authMiddleware, getAllUsers);
router.get("/profile", authMiddleware, getUserProfile);
router.put("/profile", authMiddleware, updateUserProfile);
router.post("/follow/:userId", authMiddleware, followTheUser);

module.exports = router;
