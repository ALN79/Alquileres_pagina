document.getElementById('imageBox').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgElement = document.createElement('img');
            imgElement.src = e.target.result;
            const imageBox = document.getElementById('imageBox');
            imageBox.innerHTML = ''; // Elimina el texto de "Haz clic para añadir una imagen"
            imageBox.appendChild(imgElement);
        }
        reader.readAsDataURL(file);
    }
});
