# Image Recognition Website

## Overview
This project is an image recognition web application(Responsive) that leverages several Amazon Web Services (AWS) such as AWS Lambda, AWS Rekognition, AWS S3, AWS IAM, AWS CloudWatch Logs, AWS Amplify, and AWS SES. The website allows users to upload images, which are then analyzed to identify objects, scenes, and other image attributes. The results, including labels and confidence scores, are sent to registered email addresses.

[Visit the Website](https://staging.d2z4hfzfv13lit.amplifyapp.com/#)

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript,Bootstrap
- **Backend Services:**
  - **AWS Lambda:** Handles backend logic and processing.
  - **AWS Rekognition:** Performs image analysis.
  - **AWS S3:** Stores uploaded images.
  - **AWS IAM:** Manages permissions and roles.
  - **AWS CloudWatch Logs:** Monitors and logs events.
  - **AWS Amplify:** Hosts and deploys the frontend.
  - **AWS SES:** Sends emails with image analysis results.

## How It Works
1. **Image Upload:**
   - Users upload images using the website's upload button.
   - The image is stored in an S3 bucket.

2. **Triggering Lambda:**
   - The S3 bucket triggers an event that invokes an AWS Lambda function.

3. **Image Analysis:**
   - The Lambda function sends the image to AWS Rekognition for analysis.
   - Rekognition returns labels, confidence scores, and other relevant data.

4. **Sending Results:**
   - The Lambda function processes the received data.
   - It sends the analysis results to registered email addresses via AWS SES.

## Setup Instructions
### Prerequisites
- AWS Account
- git-bash

### Steps
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/kirti-salini/Rekognition-Realm
   cd Rekognition-Realm


## Frontend Setup

Navigate to the frontend directory and set up the environment:

sh
cd frontend
npm install
npm run build

## Deploy Frontend

Deploy the frontend using AWS Amplify.

## Backend Setup

Configure and deploy the Lambda functions and S3 bucket:

## AWS Rekognition and SES

Ensure Rekognition and SES services are set up in your AWS account. Update Lambda functions with appropriate ARNs and configurations.

## IAM Roles

Create and configure IAM roles with necessary permissions for S3, Lambda, Rekognition, and SES.

## Monitoring

Set up CloudWatch Logs to monitor and log events and errors.

## Usage

### Open the Website

Navigate to the deployed frontend URL.

### Upload an Image

Click the upload button and select an image.

### View Results

Check the registered email for analysis results including labels and confidence scores.

## Contact

For any questions or support, please contact [kirtisalini@example.com](kirtisalini@example.com).
