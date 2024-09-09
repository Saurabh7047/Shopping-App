import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/userMiddleware.js";
import {
  category,
  createCategory,
  deleteCategory,
  singleCategory,
  updateCategory,
} from "./../controllers/categoryController.js";

const router = express.Router();

//routes
// create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategory
);

//update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategory
);

//getALl category
router.get("/get-category", category);

//single category
router.get("/single-category/:slug", singleCategory);

//delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategory
);

export default router;
