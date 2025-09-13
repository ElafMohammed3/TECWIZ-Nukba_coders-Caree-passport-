
    document.addEventListener('DOMContentLoaded', () => {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 
            tabLinks.forEach(item => item.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            const targetId = e.target.getAttribute('href');
            e.target.classList.add('active');
            document.querySelector(targetId).classList.add('active');
        });
    });
});
    document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('photo');
    const fileName = document.querySelector('#fileName span');
    const preview = document.getElementById('preview');
    
    fileInput.addEventListener('change', function() {
        if (this.files && this.files[0]){
            const file = this.files[0];
            
            /* show file name */
            fileName.textContent=file.name;
            
             /* image preview */
            if (file.type.match('image.*')) {
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    preview.src = e.target.result;
                    preview.style.display = 'block';
                }
                
                reader.readAsDataURL(file);
            }
        } else {
            fileName.textContent = 'No file selected';
            preview.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // change default verification message
    const elements = document.querySelectorAll('input, textarea, select');
    
    elements.forEach(element => {
        if (element.required && !element.title) {
            element.title = "Please fill out this field";
        }
        
        // prevent Arabic message from appearing 
        element.oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                if (e.target.type === "email") {
                    e.target.setCustomValidity("Please enter a valid email address");
                } else {
                    e.target.setCustomValidity("Please fill out this field");
                }
            }
        };
        
        element.oninput = function(e) {
            e.target.setCustomValidity("");
        };
    });
});
