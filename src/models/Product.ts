
import mongoose,{Schema,Document} from "mongoose";


export type ProductType = Document & {
    name:string,
    description:string,
    price:number,
    available:boolean
}

const ProductSchema: Schema = new Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true
    },
    available:{
        type:Boolean,
        required:true
    },
})

const Product = mongoose.model<ProductType>('Product',ProductSchema)

export default Product

