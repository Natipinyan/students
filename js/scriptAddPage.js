const uploadContainer = document.querySelector('#upload-container');
const fileInput = document.querySelector('#file-input');
const uploadText = document.querySelector('#upload-text');

function inputClick() {
    fileInput.click();
}

function dragOver(event) {
    console.log(event);
    event.preventDefault();
    uploadContainer.classList.add('dragover');
}

function handleDragLeave() {
    uploadContainer.classList.remove('dragover');
}

function handleDrop(event) {
    event.preventDefault();
    uploadContainer.classList.remove('dragover');
    fileInput.files = event.dataTransfer.files;
    updateUploadText();
}

function handleFileChange() {
    updateUploadText();
}

function updateUploadText() {
    if (fileInput.files.length > 0) {
        uploadText.textContent = fileInput.files[0].name;
        uploadText.classList.add('highlight');
    } else {
        uploadText.textContent = 'גרור ושחרר את הקובץ כאן או לחץ לבחירה';
        uploadText.classList.remove('highlight');
    }
}

function validateForm() {
    if (fileInput.files.length === 0) {
        alert('נא לבחור קובץ להעלאה.');
        return false;
    }
    return true;
}

uploadContainer.addEventListener('dragleave', handleDragLeave);
uploadContainer.addEventListener('drop', handleDrop);
fileInput.addEventListener('change', handleFileChange);
