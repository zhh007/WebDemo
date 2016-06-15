//引入插件
var gulp = require('gulp');
var connect = require('gulp-connect');
var fs = require("fs");
var path = require('path');
var gutil = require('gulp-util');
var batch = require('gulp-batch');
var tmodjs = require('gulp-tmod');

var controlsPath = 'src/js/controls';
function getFolders(dir) {
  return fs.readdirSync(dir)
    .filter(function (file) {
      return fs.statSync(path.join(dir, file)).isDirectory();
    });
}
function string_src(filename, string) {
  var src = require('stream').Readable({ objectMode: true })
  src._read = function () {
    this.push(new gutil.File({ cwd: "", base: "", path: filename, contents: new Buffer(string) }))
    this.push(null)
  }
  return src
}

gulp.task('allcontrols', function () {
  var folders = getFolders(controlsPath);

  var txt = "//自动生成文件，请不要修改。\r\n";
  txt += "define(\r\n";
  txt += "  [\r\n";
  for (var k in folders) {
    txt += '    "controls/' + folders[k] + '/' + folders[k] + '",\r\n';
  }
  txt += "  ],\r\n";
  txt += "  function () {\r\n";
  txt += "    return {\r\n";
  for (var k in folders) {
    txt += '      "' + folders[k] + '": arguments[' + k + '],\r\n';
  }
  txt += "    }\r\n";
  txt += "  });\r\n";

  //console.log('allcontrols doing!');
  return string_src("allcontrols.js", txt)
    .pipe(gulp.dest('src/js/controls/'))
});

//创建watch任务去检测html文件,其定义了当html改动之后，去调用一个Gulp的Task
gulp.task('watch', function () {
  gulp.watch(['./*.html', './src/*.html', './test/*.html'], ['html']);
  //gulp.watch(['./src/js/controls/**/*.js'], ['allcontrols', 'js']);
  //gulp.watch(['**/*.js'], ['js']);
  // gulp.watch('**/*.js', batch(function (events, done) {
  //       gulp.start('allcontrols', done);
  //   }));
  gulp.watch(['./src/templates/*.html', './src/templates/**/*.html'], ['tpl-tmod']);
});

//使用connect启动一个Web服务器
gulp.task('connect', function () {
  connect.server({
    root: '.',
    port: 9909,
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});

gulp.task('js', function () {
  gulp.src('**/*.js')
    .pipe(connect.reload());
});

gulp.task('tpl-tmod', function () {
  console.log("running tpl-tmod");
  return gulp.src(['./src/templates/*.html', './src/templates/**/*.html']).
    pipe(tmodjs({
      templateBase: 'src/templates/',
      output: './src/js/tpl',
      charset: "utf-8",
      syntax: "simple",
      helpers: null,
      escape: true,
      compress: false,/*取消压缩*/
      type: "amd",
      runtime: "template.js",
      combo: true,
      minify: true,
      cache: false
    }));
});

//运行Gulp时，默认的Task
gulp.task('default', ['connect', 'watch', 'allcontrols']);