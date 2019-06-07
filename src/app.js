import express from 'express';
import routes from "./routes";
import chalk from "chalk";

global.logger = (message, arg1='', arg2='', arg3='', arg4='', arg5='') =>
  console.log(chalk.rgb(0,0,204)(message, arg1, arg2, arg3, arg4, arg5));

global.bug = (message, arg1='', arg2='', arg3='', arg4='', arg5='') =>
  console.log(chalk.red(message, arg1, arg2, arg3, arg4, arg5));

const expressApp = express();
const app = routes(expressApp);

app.use('*', (req, res) => {
  res
    .status(200)
    .json({
      message: 'Nothing'
    })
});
export default app;
