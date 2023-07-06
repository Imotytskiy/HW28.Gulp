import babel from "gulp-babel";
import concat from "gulp-concat";
export const js = () => {
  return (
    app.gulp
      .src(app.path.src.js, { sourcemaps: true })
      .pipe(concat("all.js"))
      .pipe(app.plugins.plumber())
      // .pipe(babel())
      .pipe(app.gulp.dest(app.path.build.js))
      .pipe(app.plugins.browserSync.stream())
  );
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
