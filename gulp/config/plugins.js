import * as browserSync from "browser-sync";
import plumber from "gulp-plumber";
import concat from "gulp-concat";
import ifPlugin from "gulp-if";
// import coffee from "gulp-coffee";
// import notify from "gulp-notify";

export const plugins = {
  browserSync: browserSync.create(),
  plumber: plumber,
  concat: concat,
  if: ifPlugin,
  // coffee: coffee,
  // notify: notify,
};
