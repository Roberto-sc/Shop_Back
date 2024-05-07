import type {Request,Response} from 'express'
import Product from '../models/Product'

export class ProductController{

    static createProduct = async (req:Request , res:Response) => {
       
        const product = new Product(req.body)
        
        try {
           await product.save()
           res.send('Product Creado')
        } catch (error) {
            console.log(error)
        }
    }

    static getAllProducts = async (req:Request , res:Response) => {
       const product = new Product(req.body)
        
        
        try {
            const product = new Product(req.body)
           await product.save()
           res.send('Product Creado')
        } catch (error) {
            console.log(error)
        }
    }
}