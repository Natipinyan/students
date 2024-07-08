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