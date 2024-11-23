import type { Request, Response } from "express";
import Product from "../models/Product";
import multer from "multer";
import cloudinary from "../config/cloudinaryConfig";




export class ProductController {
 
  static createProduct = async (req: Request, res: Response) => {
    //const upload = multer({ dest: "uploads/" });

    const product = new Product(req.body);

    try {
      await product.save();
      res.send("Product Creado");
    } catch (error) {
      console.log(error);
    }
  };


  static getAllProducts = async (req: Request, res: Response) => {
    const product = new Product(req.body);

    try {
      const product = new Product(req.body);
      await product.save();
      res.send("Product Creado");
    } catch (error) {
      console.log(error);
    }
  };
}
