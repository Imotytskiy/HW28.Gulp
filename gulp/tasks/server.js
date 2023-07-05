import * as browserSync from "browser-sync";

const bs = browserSync.create();

export function server() {
  bs.init({
    server: { baseDir: app.path.build.html },
  });

  bs.watch(app.path.watch.html).on("change", bs.reload);
}
