const express = require('express');
const app = express();
const {createTodo, updateTodo} = require('./types.js');
const {todo} = require("../DB/db.js");
const cors = require('cors');

app.use(express.json());
app.use(cors({
  origin : "http://localhost:5173"
}));

app.post("/todo", async(req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if(!parsedPayload.success){
    res.status(411).json({
      MSG : "Invalid Inputs"
    });
  }

  await todo.create({
    title : createPayload.title,
    description : createPayload.description,
    completed : false
  });

  res.json({
      msg : "The todo created successfully."
  })
});

app.get("/todos", async (req, res) => {
  try{
    const response = await todo.find({});
    res.json({
      todos : response
    });
  } catch(error){
      res.status(500).json({
        msg : "Something went wrong while fecthing the todolist"
      });
  }
});

app.put('/completed', async(req, res) => {
  const updatePayload = req.body;
  const parsedUpdatedPayload = updateTodo.safeParse(updatePayload);
  if(!parsedUpdatedPayload.success){
    res.status(411).json({
        msg : "Invalid Input."
    });
  }

  await todo.updateOne({
    _id : req.body.id
  }, {
    completed : true
  });

  res.json({
    MSG : "The todo is completed"
  });

});

app.listen(3000);
console.log('The Todo app backend server is up and running ...........');
