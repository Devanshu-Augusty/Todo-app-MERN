const zod = require("zod");

const todoType = zod.object({
  name: zod.string(),
  description: zod.string(),
  completed: zod.boolean(),
});

const todoIDtype = zod.string();

module.exports =  { todoType, todoIDtype };
