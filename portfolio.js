{/* <i class="fa-solid fa-house-user"></i>;
<i class="fa-solid fa-address-card"></i>;
<i class="fa-solid fa-laptop-file"></i>;
<i class="fa-solid fa-phone"></i>; */}
//Show and Hide Skills
function flip (id) {
    var skill = document.getElementById(id);
    var span1 = skill.getElementsByTagName('span')[0];
    var span2 = skill.getElementsByTagName('span')[1];

    if (span1.className.indexOf("show-skill") == -1 && span2.className.indexOf("hide-skill") == -1 ) {
        skill.className = skill.className.replace("skill", "skill-light");
        span1.className = span1.className.replace("hide-skill", "show-skill");
        span2.className = span2.className.replace("show-skill", "hide-skill");
    } else {
        skill.className = skill.className.replace("skill-light", "skill");
        span1.className = span1.className.replace("show-skill", "hide-skill");
        span2.className = span2.className.replace("hide-skill", "show-skill");
    }
}

// Nav Toggle 

const showMenu = () => {
    var listMenu = document.getElementById('list-menu');
    var showtab = window.matchMedia("(max-width: 870px)");
    if ( showtab.matches && listMenu.className.indexOf('no-active') == 0) {
        listMenu.classList.replace('no-active', 'active');
    }
    else if (!showtab.matches) {
        listMenu.style.removeProperty('display');
    }
    else {
        listMenu.classList.replace('active', 'no-active');
    }
}  