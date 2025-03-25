const dropdownMenu = document.getElementById("dropdown-menu");

function dropdown() {
    dropdownMenu.innerHTML = `
        <div class="dropdown-options">
            <a href="">About Me</a>
            <a href="">Projects</a>
            <a href="">Experience</a>
            <a href="">Contact Me</a>
        </div>
    `;
}