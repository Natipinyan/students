const uploadContainer = document.querySelector('#upload-container');
const fileInput = document.querySelector('#file-input');
const uploadText = document.querySelector('#upload-text');

function inputClick() {
    fileInput.click();
}

function dragOver(event) {
    event.preventDefault();
    uploadContainer.classList.add('dragover');
}

function handleDragLeave() {
    uploadContainer.classList.remove('dragover');
}

function handleDrop(event) {
    event.preventDefault();
    uploadContainer.classList.remove('dragover');
    const files = event.dataTransfer.files;
    if (validateFileType(files[0])) {
        fileInput.files = files;
        updateUploadText();
    } else {
        alert('נא לבחור קובץ אקסל בלבד.');
    }
}

function handleFileChange() {
    if (fileInput.files.length > 0 && !validateFileType(fileInput.files[0])) {
        alert('נא לבחור קובץ אקסל בלבד.');
        fileInput.value = ''; // Reset the input
        updateUploadText();
    } else {
        updateUploadText();
    }
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
    if (!validateFileType(fileInput.files[0])) {
        alert('נא לבחור קובץ אקסל בלבד.');
        return false;
    }
    return true;
}

function validateFileType(file) {
    const allowedTypes = [
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx
        'application/vnd.ms-excel' // .xls
    ];
    return file && allowedTypes.includes(file.type);
}

uploadContainer.addEventListener('dragleave', handleDragLeave);
uploadContainer.addEventListener('drop', handleDrop);
uploadContainer.addEventListener('dragover', dragOver);
fileInput.addEventListener('change', handleFileChange);
