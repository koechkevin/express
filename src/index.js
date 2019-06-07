import app from './app';
import chalk from "chalk";

const port = 3000;

app.listen(port, () => {
  console.info(chalk.blue(`This is an express app port ${port}`));
});


