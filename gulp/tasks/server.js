// import * as browserSync from "browser-sync";

export function server() {
  app.plugins.browserSync.init({
    server: { baseDir: app.path.build.html },
  });

  app.plugins.browserSync
    .watch(app.path.watch.html)
    .on("change", app.plugins.browserSync.reload);
}
