pipeline {
    agent any
    options {
        ansiColor('xterm')
        nodejs('node-14.18.2')
    }
    stages {
        stage('Open') {
            steps {
                sh 'yarn install'
            }
        }
        stage('Test') {
            steps {
                sh 'yarn cy:ci'
            }
            post {
                always {
                    junit 'results/*.xml'
                }
            }
        }
    }
}