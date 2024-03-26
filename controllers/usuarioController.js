import Usuario from "../models/Usuario.js";

const registrar = async (req,res) =>{

    const {usuario,password} = req.body;

    try {
        const usuario = new Usuario(req.body);
        const resultado = await usuario.save()

        return res.json(resultado)
    } catch (error) {
        console.log(error)
    }
}



export {
    registrar
}