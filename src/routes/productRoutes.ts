import { Router } from "express";
import { ProductController } from "../controllers/ProductController";
import { body } from "express-validator";
import { handleInputErrors } from "../middleware/validation";

const router = Router();

router.post(
  "/",
  body("name").notEmpty().withMessage("El nombre del producto es Obligatorio"),
  body("description")
    .notEmpty()
    .withMessage("La descripción del producto es Obligatoria"),
  body("price").notEmpty().withMessage("El precio del producto es Obligatorio"),
  body("available")
    .notEmpty()
    .withMessage("La disponibilidad del producto es Obligatoria"),
  handleInputErrors,
  ProductController.createProduct
);

export default router;
