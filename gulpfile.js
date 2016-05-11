var gulp = require('gulp'),
  inject = require('gulp-inject'),
  del = require('del');
var tslint = require("gulp-tslint");

  var paths = {
    webroot: './',
    src: './src/',
    dist: './dist/',
    vendorJs: [
      'es6-shim/es6-shim.js',
      'es6-shim/es6-shim.map',
      'zone.js/dist/zone.js',
      'reflect-metadata/Reflect.js',
      'systemjs/dist/system.src.js',

      'jquery/dist/jquery.min.js',
      'bootstrap/dist/js/bootstrap.min.js',

      'jasmine-core/lib/jasmine-core/jasmine.js',
      'jasmine-core/lib/jasmine-core/jasmine-html.js',
      'jasmine-core/lib/jasmine-core/boot.js'
    ],
    vendorCss: ['bootstrap/dist/css/bootstrap.css',
                'bootstrap/dist/css/bootstrap.css.map',
                'jasmine-core/lib/jasmine-core/jasmine.css'],
    libDevCss: './src/libs/vendor/css',
    libDevJs: './src/libs/vendor/js',
    lteJs: ['./src/assets/js/app.js'],
    lteCss: ['./src/assets/css/AdminLTE.css',
             './src/assets/css/skins/_all-skins.css'],
    testJs: ['./src/libs/vendor/js/jasmine.js',
             './src/libs/vendor/js/jasmine-html.js',
             './src/libs/vendor/js/boot.js'],
    testCss: ['./src/libs/vendor/css/jasmine.css'],
    test: ['./src/app/test/*.js']
  };

gulp.task('clean:vendor:js', function(cb){
  return del(['./src/libs/js'], cb);
});
gulp.task('clean:vendor:css', function(cb){
  return del(['./src/libs/css'], cb);
});

gulp.task('clean', ['clean:vendor:js', 'clean:vendor:css']);
gulp.task('copy:vendor:angular', function() {
  return gulp.src('@angular/**/*', { cwd: './node_modules/'})
      .pipe(gulp.dest(paths.libDevJs + '/@angular'));
});
gulp.task('copy:vendor:rxjs', function() {
  return gulp.src('rxjs/**/*', { cwd: './node_modules/'})
      .pipe(gulp.dest(paths.libDevJs + '/rxjs'));
});
gulp.task('copy:vendor:angularInMemoryApi', function() {
  return gulp.src('angular2-in-memory-web-api/**/*', { cwd: './node_modules/'})
      .pipe(gulp.dest(paths.libDevJs + '/angular2-in-memory-web-api'));
});
gulp.task('copy:libDevJs', ['copy:vendor:angular', 'copy:vendor:rxjs', 'copy:vendor:angularInMemoryApi'], function(){
  return gulp.src(paths.vendorJs, { cwd: './node_modules/'})
      .pipe(gulp.dest(paths.libDevJs));
});
gulp.task('copy:libDevCss', function(){
  return gulp.src(paths.vendorCss, { cwd: './node_modules/'})
      .pipe(gulp.dest(paths.libDevCss));
});

gulp.task('copy', ['clean', 'copy:libDevJs', 'copy:libDevCss']);

gulp.task('inject:dev', ['clean', 'copy'], function(){
  return gulp.src(paths.webroot + 'index.html')
    .pipe(inject(gulp.src([ paths.libDevJs + '/jquery*.js',
                            paths.libDevJs + '/bootstrap*.js',
                            paths.libDevJs + '/system*.js',
                            paths.libDevJs + '/*.js',
                            '!./src/libs/vendor/js/boot.js',
                            '!./src/libs/vendor/js/jasmine*.js'],
                      { read: false }),
                      { ignorePath: 'src', addRootSlash: false, starttag: '<!-- inject:vendor:{{ext}} -->' }))
    .pipe(inject(gulp.src(paths.libDevCss + '/*.css', { read: false }), { ignorePath: 'src', addRootSlash: false, starttag: '<!-- inject:vendor:{{ext}} -->' }))
    .pipe(inject(gulp.src(paths.libDevJs + '/', { read: false }), { ignorePath: 'src', addRootSlash: false, starttag: '<!-- inject:vendor:{{ext}} -->' }))
    .pipe(inject(gulp.src('./src/systemjs.config.js', { read: false }), { ignorePath: 'src', addRootSlash: false, starttag: '<!-- inject:systemjs:{{ext}} -->' }))

    //-------------------------------
    .pipe(inject(gulp.src(paths.lteJs, { read: false }), { ignorePath: 'src', addRootSlash: false, starttag: '<!-- inject:lte:{{ext}} -->' }))
    .pipe(inject(gulp.src(paths.lteCss, { read: false }), { ignorePath: 'src', addRootSlash: false, starttag: '<!-- inject:lte:{{ext}} -->' }))
    //--------------INJECT TEST--------------------------
    .pipe(inject(gulp.src(paths.testJs, { read: false }), { ignorePath: 'src', addRootSlash: false, starttag: '<!-- inject:test:{{ext}} -->' }))
    .pipe(inject(gulp.src(paths.testCss, { read: false }), { ignorePath: 'src', addRootSlash: false, starttag: '<!-- inject:test:{{ext}} -->' }))
    .pipe(inject(gulp.src(paths.test, { read: false }), { ignorePath: 'src', addRootSlash: false, starttag: '<!-- inject:testspec:{{ext}} -->' }))
    
    .pipe(gulp.dest(paths.webroot + '/src'));
});

gulp.task('inject:test', function(){
  return gulp.src(paths.webroot + 'unit-test.html')
    //--------------INJECT TEST--------------------------
    .pipe(inject(gulp.src(paths.testJs, { read: false }), { ignorePath: 'src', addRootSlash: false, starttag: '<!-- inject:test:{{ext}} -->' }))
    .pipe(inject(gulp.src(paths.testCss, { read: false }), { ignorePath: 'src', addRootSlash: false, starttag: '<!-- inject:test:{{ext}} -->' }))
    
    .pipe(gulp.dest(paths.webroot + '/src'));
});

gulp.task('dev', ['clean', 'copy', 'inject:dev']);

gulp.task('default', function(){
  console.log('Gulp');
});
gulp.task('watch', function() {
  gulp.watch(paths.webroot + 'index.html', ['inject:dev']);
});

gulp.task("tslint", function() {
  gulp.src("src/app/**/*.ts")
    .pipe(tslint())
      .pipe(tslint.report("prose", {
        summarizeFailureOutput: true
      }));
});