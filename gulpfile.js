import gulp from "gulp";
import { path } from "./gulp/config/path.js";

global.app = {
  path: path,
  gulp: gulp,
};

// import tasks
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { scss } from "./gulp/tasks/scss.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";

const mainTasks = gulp.parallel(copy, html, scss);

function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.html, html);
}

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
gulp.task("default", dev);
