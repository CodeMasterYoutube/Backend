const express = require("express");
const {
  createRecipe,
  searchController,
  getRecipe,
  deleteRecipeById,
  rateRecipe,
  comment,
} = require("../controllers/recipeController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, createRecipe);
router.get("/search", authMiddleware, searchController);
router.get("/:id", authMiddleware, getRecipe);
router.delete("/:id", authMiddleware, deleteRecipeById);
router.post("/:id/rate", authMiddleware, rateRecipe);
router.post("/:id/comments", authMiddleware, comment);

module.exports = router;
