document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('myModal');

    if (!modal) {
        console.error('Modal element not found.');
        return;
    }

    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var galleryItems = document.querySelectorAll('#gallery .gallery-item');
    
    galleryItems.forEach(item => {
        var image = item.querySelector('img');
        image.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    });

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    }

    var filterButtons = document.querySelectorAll('#filters button');

    filterButtons.forEach(button => {
        button.onclick = function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            var filter = this.getAttribute('data-filter');
            galleryItems.forEach(item => {
                var image = item.querySelector('img');
                if (filter === 'all') {
                    item.style.display = 'block';
                } else {
                    if (image.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        }
    });
});
