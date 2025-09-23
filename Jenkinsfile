pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/vasanth31-r/minikube.git'
            }
        }
        
        stage('Install and Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    sh 'eval $(minikube docker-env)'
                    sh "docker build -t vasanth31r/minikube-app:${env.BUILD_NUMBER} -f k8s/Dockerfile ."
                }
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    sh "sed -i 's|vasanth31r/minikube-app:.*|vasanth31r/minikube-app:${env.BUILD_NUMBER}|' k8s/deployment.yaml"
                    sh 'kubectl apply -f k8s/deployment.yaml'
                }
            }
        }
    }
}