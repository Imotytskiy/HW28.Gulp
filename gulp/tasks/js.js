import babel from "gulp-babel";
import webpack from "webpack-stream";
export const js = () => {
  return app.gulp
    .src(app.path.src.js)
    .pipe(app.plugins.plumber())
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(app.plugins.plumber())
    .pipe(
      webpack({
        mode: app.isBuild ? "production" : "development",
        output: {
          filename: "main.js",
        },
      })
    )
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browserSync.stream());
};
