pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                sh 'yarn run cypress run'
            }
        }
    }
}