// aws-config.js
// Configure AWS SDK
AWS.config.update({
    accessKeyId: 'YOUR_AWS_ACCESS_KEY_ID',
    secretAccessKey: 'YOUR_AWS_SECRET_ACCESS_KEY',
    region: 'THE_REGION_WHERE_YOU_CREATED_BUCKET'
});
