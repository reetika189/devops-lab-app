pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                sh 'chmod +x build.sh'
                sh './build.sh'
            }
        }

    }

    post {
        always {
            echo 'Pipeline finished.'
        }

        success {
            echo '✅ Build passed!'
        }

        failure {
            echo '❌ Build failed — check logs.'
        }
    }
}
