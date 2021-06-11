var mongoose = require('mongoose');
var Float = require('mongoose-float').loadType(mongoose);

var schema = mongoose.Schema;

//esquema para un modelo de la BD
var platoSchema = new schema({
    titulo:{
        type:String,
        trim: true,
        required:[true,'Debe ingresar un titulo para este plato'],
    },
    descripcion:{
        type:String,
        trim:true
    },
    precio:{
        type:Float,
        default: 0.00 
    },img:{
        data: Buffer,
        contentType: String
    }
});

/**
     * retorna un listado con todos los documentos.
     * @function getAll
     * @public
     * @param  {callback} cb function(){}
     * @return {query}      objeto query de mongoose
     */
platoSchema.statics.getAll = function (cb) {
    return this.find({},cb);
}

/**
     * crea un nuevo documento y lo agrega a la coleccion.
     * @function add
     * @public
     * @param  {Object} obj {prop:value,....}
     * @param  {callback} cb function(){}
     * @return {void}     el return lo hace via callback 
     */
 platoSchema.statics.add = function (obj,cb) {
    return this.create(obj,cb);
}

/**
     * obtiene un documento segun el _id.
     * @function getById
     * @public
     * @param  {Number} id {identificador del documento}
     * @param  {callback} cb function(){}
     * @return {void}     retorna un documento a travez del cb 
     */
platoSchema.statics.getById = function (id, cb) {
    return this.findOne({ _id: id }, cb);
}

/**
     * busca un documento por id, y lo actualiza
     * @function updateById
     * @public
     * @param  {query} obj id
     * @param  {string} obj name
     * @param  {callback} cb function(){}
     * @return {void}     el return lo hace via callback 
     */
platoSchema.statics.updateById = function (id, nombre, cb) {
    return this.findOneAndUpdate(
        { _id: id }, 
        { nombre: nombre }, 
        {   
            returnNewDocument: true,
            runValidators: true, 
            context: 'query' 
        }, 
        cb);
}

/**
     * elimina el documento buscado por id.
     * @function crearInstancia
     * @public
     * @param  {Number} id id del doc a buscar
     * @param  {callback} cb function(){}
     * @return {void}     el return lo hace via callback 
     */
platoSchema.statics.deleteById = function (id, cb) {
    return this.deleteOne({ _id: id }, cb);
}

module.exports = mongoose.model('Cliente', platoSchema);