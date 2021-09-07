const $menuIcon = document.getElementById("menu-icon");
$menuIcon.onclick = () => {
    const $menuLinks = document.getElementById("menu-links")

    if ($menuLinks.style.display === "block") {
        $menuLinks.style.display = "none";
    } else {
        $menuLinks.style.display = "block";
    }
}

const $acordeon = document.getElementsByClassName("acordeon__titulo");
for (let i = 0; i < $acordeon.length; i++) {
    const element = $acordeon[i];

    element.addEventListener("click", function () {
        this.classList.toggle("activo")
    })
}