document.addEventListener("DOMContentLoaded", function() {
    console.log("Website Loaded!");
    
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Thank you for your feedback!");
            form.reset();
        });
    }
});
