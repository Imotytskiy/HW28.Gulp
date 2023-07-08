// import babel from "gulp-babel";
import webpackconcat from "webpack-concat-files-plugin";
import webpack from "webpack-stream";
export const js = () => {
  return app.gulp
    .src(app.path.src.js)
    .pipe(
      webpack({
        mode: "production",
        output: {
          filename: "main.js",
        },
      })
    )
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browserSync.stream());
};

// import webpack from "webpack-stream";
// export const js = () => {
//   return app.gulp
//     .src(app.path.src.js, { sourcemaps: true })
//     .pipe(
//       webpack({
//         mode: "development",
//         output: {
//           filename: "app.min.js",
//         },
//       })
//     )
//     .pipe(app.gulp.dest(app.path.build.js));
//   // .pipe(app.browserSync.stream());
// };
