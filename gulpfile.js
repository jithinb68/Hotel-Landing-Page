var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var del = require('del');
var concat = require('gulp-concat');
var merge = require('merge-stream');


gulp.task('sass', function () {
    return gulp.src('./assets/scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./assets/css'))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', gulp.series('sass', function () {

    browserSync.init({
        port: 3001,
        server: "./",
        ghostMode: false,
        notify: false
    });

    gulp.watch('**/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('**/*.html').on('change', browserSync.reload);
    gulp.watch('**/js/**/*.js').on('change', browserSync.reload);

}));


gulp.task('clean:vendors', function () {
    return del([
        'vendors/**/*'
    ]);
});

/*Building vendor scripts needed for basic template rendering*/
gulp.task('buildBaseVendorScripts', function () {
    return gulp.src([
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/popper.js/dist/umd/popper.min.js',
        './node_modules/bootstrap/dist/js/bootstrap.min.js'
    ])
        .pipe(concat('vendor.bundle.base.js'))
        .pipe(gulp.dest('./assets/vendors/js'));
});

/*Scripts for addons*/
gulp.task('copyAddonsScripts', function () {
    var aScript1 = gulp.src(['./node_modules/owl.carousel/dist/owl.carousel.min.js'])
        .pipe(gulp.dest('./assets/vendors/owl.carousel/dist'));
    var aScript2 = gulp.src(['node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js'])
        .pipe(gulp.dest('./assets/vendors/bootstrap-datepicker'));
    return merge(aScript1, aScript2);

});

/*Styles for addons*/
gulp.task('copyAddonsStyles', function () {
    var aStyle1 = gulp.src(['./node_modules/owl.carousel/dist/assets/owl.carousel.min.css'])
        .pipe(gulp.dest('./assets/vendors/owl.carousel/dist/assets'));
    var aStyle2 = gulp.src(['./node_modules/owl.carousel/dist/assets/owl.theme.default.min.css'])
        .pipe(gulp.dest('./assets/vendors/owl.carousel/dist/assets'));
    var aStyle3 = gulp.src(['./node_modules/@mdi/font/css/materialdesignicons.min.css'])
        .pipe(gulp.dest('./assets/vendors/mdi/css'));
    var aStyle4 = gulp.src(['./node_modules/@mdi/font/fonts/*'])
        .pipe(gulp.dest('./assets/vendors/mdi/fonts'));
    var aStyle5 = gulp.src(['node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css'])
        .pipe(gulp.dest('./assets/vendors/bootstrap-datepicker'));
    return merge(aStyle1, aStyle2, aStyle3, aStyle4, aStyle5);
});

/*sequence for building vendor scripts and styles*/
gulp.task('bundleVendors', gulp.series('clean:vendors', 'buildBaseVendorScripts', 'copyAddonsStyles', 'copyAddonsScripts'));

gulp.task('default', gulp.series('serve'));