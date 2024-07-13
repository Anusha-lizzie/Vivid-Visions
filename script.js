document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('myModal');
    if (!modal) {
        console.error('Modal element not found.');
        return;
    }

    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var images = document.querySelectorAll('#gallery img');
    
    images.forEach(image => {
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
            var filter = this.getAttribute('data-filter');
            images.forEach(image => {
                if (filter === 'all') {
                    image.style.display = 'block';
                } else {
                    if (image.getAttribute('data-category') === filter) {
                        image.style.display = 'block';
                    } else {
                        image.style.display = 'none';
                    }
                }
            });
        }
    });
});
