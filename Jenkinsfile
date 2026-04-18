pipeline {
    agent any

    stages {

        stage('Checkout') {
    steps {
        git branch: 'main', url: 'https://github.com/reetika189/devops-lab-app.git'
    }
}

        stage('Build') {
            steps {
                sh 'chmod +x build.sh'
                sh './build.sh'
            }
        }

    }

    post {
        always  { echo 'Pipeline finished.' }
        success { echo '✅ Build passed!' }
        failure { echo '❌ Build failed — check logs.' }
    }
}
