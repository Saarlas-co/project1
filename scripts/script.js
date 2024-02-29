document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('exploreButton').addEventListener('click', function() {
        var mainContent = document.getElementById('mainContent');
        mainContent.scrollIntoView({ behavior: 'smooth' });
    });

    
    var signupForm = document.getElementById('signupForm');
    signupForm.addEventListener('submit', function(event) {
       
        event.preventDefault(); 
        console.log("form submitted");
    });
});
