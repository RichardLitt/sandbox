var gulp = require('gulp')
var browserify = require('browserify')
var source = require('vinyl-source-stream')

gulp.task('main', function() {
  return browserify(['./index.js'])
	// .transform(reactify)
	.transform({global: true}, 'brfs')
	.bundle()
	.pipe(source('bundle.min.js'))
	// .pipe(sourcemaps.init())
	// .pipe(g_if('*.jsx', react()))
	// .pipe(uglify())
	// .pipe(concat('bundle.min.js'))
	// .pipe(sourcemaps.write())
	.pipe(gulp.dest('build/'))
})

gulp.task('default', ['main'])
