$(document).ready(function () {
    // Highlight the active navigation link
    function setActiveLink() {
        const currentPage = window.location.pathname.split("/").pop();
        $("nav ul li a").each(function () {
            if ($(this).attr("href") === currentPage) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });
    }

    // Call the function to highlight the active link
    setActiveLink();

    // Smooth scrolling to page sections (for Contact page or single-page sites)
    $("a[href^='#']").on("click", function (e) {
        e.preventDefault();
        const target = $($(this).attr("href"));
        if (target.length) {
            $("html, body").animate(
                {
                    scrollTop: target.offset().top,
                },
                600
            );
        }
    });

    // Interactive alert messages for navigation links
    $("nav ul li a").on("click", function () {
        const pageName = $(this).text();
        alert(`Navigating to ${pageName} page`);
    });

    // Form validation for the Contact page
    $("form").on("submit", function (e) {
        const name = $("#name").val().trim();
        const email = $("#email").val().trim();
        const message = $("#message").val().trim();

        if (!name || !email || !message) {
            e.preventDefault();
            alert("Please fill in all fields before submitting.");
        }
    });
});
