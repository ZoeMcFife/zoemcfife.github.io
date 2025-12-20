document.addEventListener("DOMContentLoaded", () =>
{
    const burger_button_mobile_top = document.getElementById("burger-icon-mobile-top");
    const burger_button_mobile_bottom = document.getElementById("burger-icon-mobile-bottom");
    const navbar_mobile = document.getElementById("navbar-mobile");

    burger_button_mobile_top.addEventListener("click", toggle_navbar)
    burger_button_mobile_bottom.addEventListener("click", toggle_navbar)

    function toggle_navbar()
    {
        const collapsed = navbar_mobile.classList.toggle("collapsed");

        navbar_mobile.setAttribute("aria-hidden", collapsed);
    }
});

