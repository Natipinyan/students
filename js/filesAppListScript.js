document.addEventListener('DOMContentLoaded', () => {
    console.log('הדף נטען, טוען קבצים...');
    fetch('/DownloadFiles/filesAppList')
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
                link.href = `/DownloadFiles/filesApp/${file}`;
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
    document.querySelectorAll('.file-container a').forEach(link => {
        link.addEventListener('contextmenu', (event) => {
            event.preventDefault();

            const fileContainer = link.parentNode;
            const deleteButton = fileContainer.querySelector('.delete-button');
            deleteButton.style.display = 'block';
            deleteButton.style.position = 'absolute';
            deleteButton.style.left = event.clientX + 'px';
            deleteButton.style.top = event.clientY + 'px';

            deleteButton.addEventListener('click', () => {
                const fileName = link.textContent;
                // שליחת בקשת DELETE לשרת
                fetch(`/DownloadFiles/delete/${fileName}`, { method: 'DELETE' })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok ' + response.statusText);
                        }
                        // הסרת האלמנטים מה-DOM לאחר מחיקה מוצלחת
                        link.parentNode.remove();
                        alert('הקובץ נמחק בהצלחה');
                    })
                    .catch(error => {
                        console.error('Error deleting file:', error);
                        alert('שגיאה במהלך מחיקת הקובץ');
                    });
            });

            document.addEventListener('click', () => {
                deleteButton.style.display = 'none';
            }, { once: true });
        });
    });
});
