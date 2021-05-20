var mongoose = require('mongoose');

var clienteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        trim: true,
        required: [true, 'El nombre es obligatorio'],
        unique: true,
    }
});


/*CRUD Basico BEGIN***************************************/
clienteSchema.statics.createInstance = function (nombre, email) {
    return new this({ nombre, email});
}

clienteSchema.statics.getAll = function (callback) {
    return this.find({}, callback);
}

clienteSchema.statics.add = function (usuario, callback) {
    return this.create(usuario, callback);
}

clienteSchema.statics.getById = function (id, callback) {
    return this.findOne({ _id: id }, callback);
}

clienteSchema.statics.update = function (id, nombre, callback) {
    return this.findOneAndUpdate({ _id: id }, { nombre: nombre }, { returnNewDocument: true, runValidators: true, context: 'query' }, callback); // alternative use findByIdAndUpdate
}

clienteSchema.statics.deleteById = function (id, callback) {
    return this.deleteOne({ _id: id }, callback);
}
/*CRUD Basico END***************************************/

module.exports = mongoose.model('Cliente', clienteSchema);