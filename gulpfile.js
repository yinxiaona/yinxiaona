var gulp=require("gulp"),
	sass=require("gulp-sass"),
	minify=require("gulp-minify-css"),
	server=require("gulp-webserver");




	gulp.task("css",function(){
		gulp.src("css/style.scss")
		.pipe(sass())
		.pipe(minify())
		.pipe(gulp.dest("dist/"))
	});

	gulp.task("server",function(){
		gulp.watch("css/style.scss",['css']);
		return gulp.src("./")
		.pipe(server({
			livereload:true,
			directoryListing:true,
			open:true
		}))
	})

	gulp.task("default",['server']);