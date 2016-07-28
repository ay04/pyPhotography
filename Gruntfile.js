module.exports = function(grunt) {

    grunt.registerTask( 'default', ['watch'] );

    grunt.initConfig({

        watch: {
                files: [
                    
                    './pyPhotography/**/*.js',
                    './pyPhotography/**/*.css',
                    './pyPhotography/**/*.html',
                    './pyPhotography/**/*.html',
                    'Gruntfile.js'
                    
                
                    
                ],
    
                options: {
                    spawn: false
                    }
                }
            }   
        ),


    grunt.loadNpmTasks('grunt-contrib-watch');
    
            
};