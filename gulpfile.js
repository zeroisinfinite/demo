/**
 * Auth: wenwen.caoww
 * Date: 2015-09-29
 * desc: now no use in project -- should used some days!
 */
var path = require('path')
    , fs = require('fs')
    , gulp = require('gulp')
    , GulpChanged = require('@ali/gulp-changed')
    , sass = require('gulp-ruby-sass')
    , sourcemaps = require('gulp-sourcemaps')
    , minifyCSS = require('gulp-minify-css')
    , uglify = require('gulp-uglify')
    , GulpCmdNice = require("gulp-cmd-nice")
    , CmdNice = require("cmd-nice")
    , rename = require("gulp-rename")
    , clean = require('gulp-clean')
    // , concat = require('gulp-concat')
    , notify = require('gulp-notify')
    , md5 = require('gulp-md5')
    // , cache = require('gulp-cache')
    , gulpFilter = require('gulp-filter')
    , uniq = require("uniq")
    , shutils = require("shutils")
    // , livereload = require('gulp-livereload')
    , packageJson = require("./package.json")



    
String.prototype.trim = function(){
    return this.replace(/(^[\s]*)|([\s]*$)/g, "");
}
String.prototype.lTrim = function(){
    return this.replace(/(^[\s]*)/g, "");
}
String.prototype.rTrim = function(){
    return this.replace(/([\s]*$)/g, "");
}


var filesystem = shutils.filesystem;

var isAbsolutePath = function(filePath) {
    return path.resolve(filePath) === path.normalize(filePath);
};

var findAllFilePathsByExtName = function(rootPath, extName) {
    return uniq((filesystem.listTreeSync(rootPath)).filter(function(filePath) {
        return path.extname(filePath) === extName;
    }));
};

var filterByRequire = function(filePath, dependencyUtils, rootPath) {
    var keywords = fs.realpathSync(filePath).lTrim({source: rootPath});
    keywords = (keywords).lTrim({source: "/"});
    var whoDepend = dependencyUtils.analyseWhoDepend(keywords);
    return whoDepend.length > 0;
};

var build = function(gulp, opt) {
    var isDev = true;
    var options = {
        transport: {
            total: null,
            success: null,
            fail: null
        },
        debug: {
            total: null,
            success: null,
            fail: null
        },
        concat: {
            total: null,
            success: null,
            fail: null
        },
        sourcePath  : './src', // argv.src || "src",

        distPath    : './webapp/static/h5', // argv.dist || "dist", + (isDev ? 'dev' : 'h5')
        configFile  : './bin/config.js'
    };

    var distPath = options.distPath
        , sourcePath = options.sourcePath

    if (!isAbsolutePath(sourcePath)) {
        sourcePath = path.normalize(path.join(process.cwd(), sourcePath));
    }
    if (!isAbsolutePath(distPath)) {
        distPath = path.normalize(path.join(process.cwd(), distPath));
    }

    // seajs的别名和路径
    var configFileContent = {
        alias: {},
        paths: {}
    };
    // || argv.config
    var configFile = options.configFile || path.join(sourcePath, "config.js");
    var isConfigFileExist = fs.existsSync(configFile);
    if (isConfigFileExist) {
        configFileContent = fs.readFileSync(configFile, "utf-8");
        configFileContent = eval(configFileContent);
    }
    var dependencyUtils = new CmdNice.DependencyUtils({
        rootPath: sourcePath,
        alias: configFileContent.alias,
        aliasPaths: configFileContent.paths
    });

    var transportConfig = {
        debug: true,
        useCache: true,
        rootPath: sourcePath,
        paths: [
            sourcePath
        ],
        alias: configFileContent.alias,
        aliasPaths: configFileContent.paths,
        handlebars: {
            id: configFileContent.alias.handlebars || 'alinw/handlebars/1.3.0/runtime'
        },
        lessOptions: {
            paths: findAllFilePathsByExtName(sourcePath, ".scss")
        },
        cssOptions: {
            paths: findAllFilePathsByExtName(sourcePath, ".css")
        },
        idRule: function(name) {
            return name;
        },
        total: options.transport.total,
        success: options.transport.success,
        fail: options.transport.fail
    };

    var debugOptions = {
        paths: [
            distPath
        ],
        total: options.debug.total,
        success: options.debug.success,
        fail: options.debug.fail
    };



    var handleTransport = function(source,toPath){
        return source.pipe(GulpChanged(distPath, {
            extensions: {
                '.handlebars':'.handlebars.js'
            }
        }))
        .pipe(gulpFilter(function(file){
            var extName = path.extname(file.path);

            if (extName === ".js" || extName === ".handlebars") {
                return true;
            }else{
                if (extName === ".css") return false;
            }
            return filterByRequire(file.path, dependencyUtils, transportConfig.rootPath);
        }))
        .pipe(GulpCmdNice.cmdTransport(transportConfig))
        .pipe(uglify({
            mangle: false,
            compress: {
                warnings: false,
                drop_console: true
            },
            beautify: false,
            report: "min",
            preserveComments: false
        }))
        // .pipe(rename(function(file) {
        //     var extName = file.extname;
        //     if(extName == '.handlebars'){
        //         file.extname = ".handlebars.js"
        //     }else{
        //         file.extname = ".js";
        //     }
        // }))
        .pipe(gulp.dest(toPath))
        .pipe(GulpCmdNice.cmdDebug(debugOptions))
        .pipe(rename(function(file) {
            var extName = path.extname(file.basename);
            if (!extName) {
                file.extname = "-debug.js"
            }
            else {
                file.basename = StringUtils.rstrip(file.basename, {source: extName});
                file.extname = "-debug" + extName + file.extname;
            }
        }))
        .pipe(gulp.dest(toPath))
    }


    gulp.task("transport_biz",function(){
        return handleTransport(gulp.src([sourcePath + "/js/biz/**/*.js"
                                        // , "!" + sourcePath + "/js/lib/**/*.js"
                                        // , "!" + sourcePath + "/js/lib/**/*.js"
                                        // , "!" + sourcePath + "/js/widget1.1/**/*.js"
                                        ]),distPath + '/js');
    })
    /**
     * SASS || SCSS 文件编译Copy－－还差压缩的配置叻
     *   参照：https://github.com/sindresorhus/gulp-ruby-sass
     *      1、还需要排除无关的base等文件（或挪位置）
     *      2、压缩  minifyCSS
     * TODO 区分开发环境和生产环境分别执行不同的编译命令行
     */
    gulp.task('sass', function () {
        return sass(sourcePath + '/css/biz', { verbose: true })
        // .on('error', sass.logError)
        // .pipe(minifyCSS({
        //     keepBreaks:false,
        //     keepSpecialComments: 0,
        //     benchmark: false,
        //     debug: false,
        //     compatibility: true,
        //     noAdvanced: true,
        //     processImport: true
        // }))
        .pipe(rename(function(file) {
            var extName = path.extname(file.basename);
            if (!isDev) return ;
            if (!extName) {
                file.extname = "-debug.css"
            }else {
                file.basename = StringUtils.rstrip(file.basename, {source: extName});
                file.extname = "-debug" + extName + file.extname;
            }
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(distPath + '/css'))
        .pipe(notify({ message: 'Sass task complete' }));

    });


    // 清理 css    , distPath + '/js'
    gulp.task('cleancss', function() { 
      return gulp.src([distPath + '/css/**/*-debug.css'], {read: false})
        .pipe(clean());
    });

    // 清理 js   
    // gulp.task('cleanjs', function() { 
    //   return gulp.src([
    //                 distPath + '/js/**/*.js'
    //                 , "!" + distPath + '/js/lib/**/*.js'
    //                 ], {read: false})
    //     .pipe(clean());
    // });
    // 预设任务
    gulp.task('default', ['concat_scripts']);
};

build(gulp);

module.exports = build;