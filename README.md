## Setup CI/CD pipeline using CircleCI & GCP Cloud Run

## Flows
````
Commit changes in staging branch:
Commit -> CI runs tests -> Test Passed -> CI build image & deploy to staging Cloud run app

Commit changes in prod branch:
Commit -> CI runs tests -> Test Passed -> CI build image & deploy to producuction Cloud run app

Commit changes in other branches:
Commit -> CI runs tests
````

### GCP
````
1. Log into your GCP account.
2. Use the GCP console to navigate to the "IAM & Admin" tab.
3. Choose the "Service accounts" option.
4. Create a new service account by providing a name and description for the account.
5. Add the following permissions to the service account:
    - Service Account User
    - Cloud Run Service Agent
    - Owner
    - Cloud Run Admin
    - Storage Admin
6. Select the newly created service account and create a new key in JSON format.
````
### CircleCI
````
1. Log into your CircleCI account.
2. Select the repository you want to configure.
3. Add environment variables by going to "Project Settings" and then "Environment Variables." 
   For each environment variable, provide the following:
    - APP_NAME: The name of your app (can be whatever you choose).
    - GCLOUD_SERVICE_KEY: The GCP JSON key in base64 format.
    - PROJECT_ID: The ID of your GCP project, which can be found under "Cloud Overview" -> "Dashboard."
    - REGION: The GCP Cloud Run region that you specified in the "Service account" settings.
````
### NodeJS app
````
The configuration for CircleCI is stored in the .circleci/config.yml file.
````