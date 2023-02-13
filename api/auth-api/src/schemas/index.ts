const Joi = require("joi");
const registerSchema = Joi.object({
  firstname: Joi.string().min(2).max(20).required(),
  lastname: Joi.string().min(2).max(20).required(),
  email: Joi.string()
    .required()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
  mobile_number: Joi.string.required(),
  residence: Joi.string().required(),
  password: Joi.string().required().min(8).max(20),
});

const loginSchema = Joi.object({
  email: Joi.string()
    .required()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
  password: Joi.string().required().min(8).max(20),
});

module.exports = {
  registerSchema,
  loginSchema,
};
