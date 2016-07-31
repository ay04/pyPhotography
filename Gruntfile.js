module.exports = function(grunt) {

    grunt.registerTask( 'default', ['open', 'watch']);
    grunt.registerTask('dev' ['open:dev', 'watch']);
    grunt.registerTask('build'['build','server', 'open:build', 'watch:build']);

    grunt.initConfig({
        open : {
            dev : {
                path:'http://127.0.0.1:8888/src',
                app:'Safari'
        
            },
            build : {
                path: 'http://google.com/',
                app: 'Firefox'
            },
            file : {
                path : '/etc/hosts'
            },
            custom : {
                path : function () {
                    return grunt.option ('path');
                }
            }
        }
    })
//
//        watch: {
//                files: [
//                    
//                    './pyPhotography/**/*.js',
//                    './pyPhotography/**/*.css',
//                    './pyPhotography/**/*.html',
//                    './pyPhotography/**/*.html',
//                    'Gruntfile.js'
//                    
//                ],
//    
//                options: {
//                    spawn: false
//                    }
//                }   
    
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
            
};