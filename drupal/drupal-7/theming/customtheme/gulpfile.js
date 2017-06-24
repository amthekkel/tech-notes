const gulp = require("gulp"),
     sass = require("gulp-sass"),
     sourcemaps = require('gulp-sourcemaps'),
     autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function() {   
    gulp.src('src/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))       
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('./dist'));
        
});

//Watch task
gulp.task('default',function() {
    gulp.watch('src/**/*.scss',['sass']);
});
