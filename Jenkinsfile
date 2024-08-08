pipeline {
    agent any

    environment {
        // Define environment variables if needed
        NODE_VERSION = '20.11.1' // Example version
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout your code from version control
                https://github.com/rahulsha01/eccommerce-webapi/tree/master/public/web/eccomerce
                git 'https://github.com/your-repository/your-angular-project.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Install Node.js version
                script {
                    def node = tool name: "NodeJS ${env.NODE_VERSION}", type: "NodeJS"
                    env.PATH = "${node}/bin:${env.PATH}"
                }

                // Install Angular CLI globally
                sh 'npm install -g @angular/cli'

                // Install project dependencies
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Build the Angular project
                sh 'ng build --prod'
            }
        }

        stage('Test') {
            steps {
                // Run unit tests
                sh 'ng test --watch=false'
            }
        }

        stage('Archive Artifacts') {
            steps {
                // Archive build artifacts, e.g., dist folder
                archiveArtifacts artifacts: 'dist/**/*', allowEmptyArchive: true
            }
        }
    }

    post {
        always {
            // Clean up after build
            cleanWs()
        }
        success {
            echo 'Build and test succeeded!'
        }
        failure {
            echo 'Build or test failed.'
        }
    }
}
