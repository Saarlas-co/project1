document.addEventListener('DOMContentLoaded', function() {
    var exploreButton = document.getElementById('exploreButton');
    exploreButton.addEventListener('click', function() {
        var mainContent = document.getElementById('mainContent');
        mainContent.style.display = mainContent.style.display === 'none' ? 'block' : 'none';
    });

    var signupForm = document.getElementById('signupForm');
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        console.log("form submitted");
    });
});
