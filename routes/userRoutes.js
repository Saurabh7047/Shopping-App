import  express  from 'express';
import { forgotPassword, getAllOrders, getOrders, login, orderStatus, register, test, updateProfile } from '../controllers/userController.js';
import { requireSignIn,isAdmin } from './../middlewares/userMiddleware.js';



const router = express.Router();

//REGISTER || METHOD POST
router.post("/register", register);

//LOGIN || POST
router.post("/login", login);

//Forgot Password || POST
router.post("/forgot-password", forgotPassword);

//test routes
router.get("/test", requireSignIn, isAdmin, test);

//protected user route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//protected admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});
//update profile
router.put("/profile", requireSignIn, updateProfile);

//orders
router.get("/orders", requireSignIn, getOrders);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrders);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatus
);

export default router;
