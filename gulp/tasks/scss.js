import dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);

export const scss = () => {
  return (
    app.gulp
      .src(app.path.src.scss)
      // .pipe(app.plugins.plumber())
      .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
      .pipe(app.gulp.dest(app.path.build.scss))
      .pipe(app.plugins.browserSync.stream())
  );
};
