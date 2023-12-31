import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

global.app = {
  // isBuild: process.argv.includes("--build"),
  // isDev: !process.argv.includes("--build"),
  path: path,
  gulp: gulp,
  plugins: plugins,
};

// import task
import { reset } from "./gulp/tasks/reset.js";
import { scss } from "./gulp/tasks/scss.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { js } from "./gulp/tasks/js.js";

const mainTasks = gulp.parallel(html, scss, js);

function watcher() {
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.html, html);
}

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
gulp.task("build", dev);
