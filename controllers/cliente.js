var Cliente = require('../models/cliente');

module.exports = {
    list: function(req,res,next) {
        Cliente.getAll((clientes)=> {res.send(clientes)});
    },
    create: function(req,res,next){
        Cliente.create({nombre: req.body.nombre},(err,nuevoUsuario)=>{
            if(err){   
                console.log(err);
                
            }
            else{
               //
            }
        });
    },
    update: function( req, res, next ) {
        Cliente.findByIdAndUpdate(req.params.id, update_name, ( err, usuario )=> {
            if(err){
                console.log(err);
            }else{
            }
        });
    },
    delete: function( req, res, next ){
        console.log(req.params);
        Cliente.findByIdAndDelete(req.params.id, ( err ) => {
            if(err) {
                next(err);
            }else{
                res.redirect('/admin');
            }
        })
    }
};