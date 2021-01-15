$(function () {

    function loadItems() {

        const community = {
            1: ["Jenna Alaskar", "Jenna-Alaskar.jpeg", "Member Education and Event Coordinator @ The Washington State Association for Justice"],
            2: ["Anna Marie Martin", "Anna-Marie-Martin.jpg", "Propietor @ SpokeAnna"],
            3: ["Andrew Galloway", "Andrew-Galloway.jpg", "Architect/Founder @ Galloway Architecture Laboratory"],
            4: ["Chris McAllister", "Chris-McAllister.jpeg", "Senior Instructional Designer"],
            5: ["Dustin Haynes", "Dustin-Haynes.png", "Technical Artist @ Imbellus"],
            6: ["Anna Canfield", "Anna-Canfield.jpeg", "Artist/Owner @ ALC Watercolor LLC"],
            7: ["Mariah McKay", "Mariah-McKay.jpg", "Spokane Independent Metro Business Alliance"],
            8: ["Christine Machado", "Christine-Machado.jpeg", "Finance Business Partner @ GitLab Inc"],
            9: ["Matt McGahen", "Matt-McGahen.jpg", "Pastor of Outreach and Community Life @ Berean Bible Church"],
            10: ["Robin Haynes", "Robin-Haynes.jpg", "Principal Attorney @ GIANTlegal PLLC"]

        };

        for (const [key, value] of Object.entries(community)) {
               $("#load-items").append(`
                <div class="carousel-item">
                <img src="../img/community/${value[1]}" alt="${value[0]}">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${value[0]}</h5>
                    <p>${value[2]}</p>
                </div>
                </div>
            `);
        };
        
        $("#load-items .carousel-item:first").addClass("active");         
    };

    document.body.addEventListener("load", loadItems(), false);

});