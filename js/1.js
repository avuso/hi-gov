

        function showDownloadPopup() {
            const popup = document.getElementById('downloadPopup');
            popup.style.display = 'block';
            

            setTimeout(() => {
                popup.style.display = 'none';
            }, 20000);
        }


        document.getElementById('downloadButton').addEventListener('click', () => {
            showDownloadPopup(); 


            const downloadUrl = 'https://melbetapk-bd.com/registration';  
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = 'melbet.apk';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
