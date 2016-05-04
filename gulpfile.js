var source      = require('vinyl-source-stream');
var gulp        = require('gulp');
var gutil       = require('gulp-util');
var browserify  = require('browserify');
var babelify    = require('babelify');
var watchify    = require('watchify');
var notify      = require('gulp-notify');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');

var basePaths = {
    src: './_src/assets/',
    dest: './_public/assets/',
};

var paths = {
    styles: {
        src: basePaths.src + '_scss/',
        dest: basePaths.src + 'css/',
        directDest: basePaths.dest + 'css/'
    },
    scripts: {
        src: basePaths.src + '_scripts/',
        dest: basePaths.src + 'js/',
        directDest: basePaths.dest + 'js/'
    }
};

var appFiles = {
    content: ['./_src/_layouts/*.html', './_src/_posts/*'],
    styles: paths.styles.src + '**/*.scss',
    scripts: paths.scripts.src + '**/*.js'
};

var jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'scripts', 'jekyll-build'], function() {
    browserSync({
        server: { baseDir: '_public' },
        notify: false
    });
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
    return gulp.src(appFiles.styles)
        .pipe(sass({
            includePaths: ['scss'],
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest(paths.styles.directDest))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest(paths.styles.dest));
});

gulp.task('scripts', function() {
  return buildScript('main.js', false); // this will run once because we set watch to false
});

function handleErrors() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);
  this.emit('end'); // Keep gulp from hanging on this task
}

function buildScript(file, watch) {
  var props = {
    entries: [paths.scripts.src + file],
    debug : true,
    cache: {},
    packageCache: {},
    transform:  [babelify.configure({stage : 0 })]
  };

  // watchify() if watch requested, otherwise run browserify() once
  var bundler = watch ? watchify(browserify(props)) : browserify(props);

  function rebundle() {
    var stream = bundler.bundle();
    return stream
      .on('error', handleErrors)
      .pipe(source(file))
      .pipe(gulp.dest(paths.scripts.directDest))
      .pipe(browserSync.reload({stream:true}))
      .pipe(gulp.dest(paths.scripts.dest))
  }

  // listen for an update and run rebundle
  bundler.on('update', function() {
    rebundle();
    gutil.log('Rebundle...');
  });

  // run it once the first time buildScript is called
  return rebundle();
}

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch(appFiles.styles, ['sass']);
    gulp.watch(appFiles.content, ['jekyll-rebuild']);
    return buildScript('main.js', true);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
