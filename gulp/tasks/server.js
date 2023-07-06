// import * as browserSync from "browser-sync";

export function server() {
  app.plugins.browserSync.init({
    server: { baseDir: "dist" },
  });
}
