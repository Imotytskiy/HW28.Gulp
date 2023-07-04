import gulp from "gulp";
import { path } from "./gulp/config/path.js";

global.app = {
  path: path,
  gulp: gulp,
};

// import tasks
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
// import { html } from "./gulp/tasks/html.js";

const mainTasks = gulp.parallel(copy); //html

function watcher() {
  gulp.watch(path.watch.files, copy);
  // html
}

const dev = gulp.series(reset, mainTasks, watcher);
gulp.task("default", dev);
