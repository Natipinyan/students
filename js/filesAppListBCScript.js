document.addEventListener('DOMContentLoaded', () => {
    fetch('/DownloadFiles/filesAppListBC')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(files => {
            console.log('Files fetched:', files);
            const fileList = document.getElementById('file-list');
            files.forEach(file => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = `/DownloadFiles/filesAppBC/${file}`;
                link.textContent = file;
                link.download = file;
                listItem.appendChild(link);
                fileList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching files:', error);
        });
});
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.files').forEach(fileContainer => {
        fileContainer.addEventListener('contextmenu', (event) => {
            event.preventDefault();

            const deleteButton = fileContainer.querySelector('.delete-button');
            deleteButton.style.display = 'block';
            deleteButton.style.position = 'absolute';
            deleteButton.style.left = event.clientX + 'px';
            deleteButton.style.top = event.clientY + 'px';

            deleteButton.addEventListener('click', () => {
                const fileName = fileContainer.querySelector('a').textContent;
                fetch(`/DownloadFiles/deleteFilesAppBC/${fileName}`, { method: 'DELETE' })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok ' + response.statusText);
                        }
                        fileContainer.remove();
                        showNotification('הקובץ נמחק בהצלחה');
                    })
                    .catch(error => {
                        console.error('Error deleting file:', error);
                        showNotification('שגיאה במהלך מחיקת הקובץ');
                    });
            });

            document.addEventListener('click', () => {
                deleteButton.style.display = 'none';
            }, { once: true });
        });
    });
});

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}
