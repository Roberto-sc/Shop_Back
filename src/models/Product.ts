
import mongoose,{Schema,Document} from "mongoose";


export interface IProduct extends Document {
    name:string,
    description:string,
    price:number,
    available:boolean,
    image:string
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
    image:{
        type:String,
        required: true,
        trim:true
    }
})

const Product = mongoose.model<IProduct>('Product',ProductSchema)

export default Product

