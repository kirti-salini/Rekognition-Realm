// aws-functions.js

// Function to show content based on ID
function showContent(contentId) {
    // Hide all content elements
    var contents = document.getElementsByClassName('content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }

    // Show the selected content
    var selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    } else {
        console.error('Content with id ' + contentId + ' not found.');
    }
}

// Ensure AWS SDK is loaded before using AWS
if (typeof AWS !== 'undefined') {
    // Create S3 instance
    var s3 = new AWS.S3({
        apiVersion: '2006-03-01',
        params: { Bucket: 'imageuploadrekog' }
    });

    // Function to upload file
    function uploadFile() {
        var fileInput = document.getElementById('fileInput');
        var file = fileInput.files[0];

        if (!file) {
            alert('Please select a file to upload.');
            return;
        }

        var params = {
            Bucket: 'imageuploadrekog',
            Key: file.name,
            Body: file,
            ContentType: file.type
        };

        s3.upload(params, function(err, data) {
            if (err) {
                console.log('There was an error uploading your file: ', err.message);
                alert('Error uploading file.');
            } else {
                console.log('Successfully uploaded file.', data);
                alert('File uploaded successfully.');
            }
        });
    }
} else {
    console.error('AWS SDK not loaded.');
}
