function openForm() {
    document.getElementById("navbar").style.display = "block";
    document.getElementById("close").style.display = "block";
}

function closeForm() {
    document.getElementById("navbar").style.display = "none";
    document.getElementById("close").style.display = "none";
}

//Smooth sliding to anchor tags
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});