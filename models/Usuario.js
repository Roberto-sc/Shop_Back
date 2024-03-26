import mongoose from 'mongoose'


const usuarioSchema = new mongoose.Schema({
    usuario : {
        type: String,
        required : true,
        trim: true
    },
    password : {
        type:String,
        required : true,
        trim : true
    }
},{
    timestamps:true
});


const Usuario = mongoose.model("Usuario",usuarioSchema);

export default Usuario;