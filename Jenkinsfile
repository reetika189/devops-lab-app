pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devops-lab-app .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker stop devops-container || true
                docker rm devops-container || true

                docker run -d \
                  --name devops-container \
                  -p 3000:3000 \
                  devops-lab-app
                '''
            }
        }

    }

    post {
        success {
            echo '✅ Pipeline completed successfully!'
        }

        failure {
            echo '❌ Pipeline failed!'
        }
    }
}
