const Koa = require("koa");
const app = new Koa();
const bodyParser = require("koa-body");
const mongoose = require("mongoose");
const tasks = require("./routes/tasks");

app.use(bodyParser());
app.use(tasks.routes());

mongoose.connect(
  "mongodb+srv://node-shop:node-shop@node-rest-shop-vhzs8.mongodb.net/koa?retryWrites=true&w=majority"
);
// app.use(function*() {
//   this.body = "Hello";
// });
app.listen(5000, () => {
  console.log(`Server running at port 5000`);
});
