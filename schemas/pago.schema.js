const Joi = require('joi');

const id = Joi.string()
              .uuid();
const nombre = Joi.string()
                   .alphanum()
                   .min(3)
                   .max(15);
const cliente = Joi.number()
                  .integer()
                  .min(10);

const createPagoSchema = Joi.object({
  nombre: nombre.required(),
  cliente: cliente.required()
});

const updatePagoSchema = Joi.object({
  nombre: nombre,
  cliente: cliente
});

const getPagoSchema = Joi.object({
  id: id.required()
});

module.exports = {createPagoSchema, updatePagoSchema, getPagoSchema};


