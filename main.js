const nav = document.getElementById('nav-list');
const nav1 = document.getElementById('nav-list1');
const nav2 = document.getElementById('nav-list2');
const logob = document.getElementById('logo-b');
const logog = document.getElementById('logo-g');
window.addEventListener('scroll', () => {
    //white
    if (window.scrollY >= 0 && window.scrollY < 1024) {
        console.log("hi......")

        nav1.classList.add('fc-blue');
        nav1.classList.remove('fc-white');
        nav2.classList.add('fc-blue');
        nav2.classList.remove('fc-white');
        logob.classList.add('cl-h');
        logog.classList.remove('cl-h');
    }

    //blue
    else if (window.scrollY >= 1024 && window.scrollY < 2048) {
        console.log("hi......")

        nav1.classList.add('fc-white');
        nav1.classList.remove('fc-blue');
        nav2.classList.add('fc-white');
        nav2.classList.remove('fc-blue');
        logob.classList.remove('cl-h');
        logog.classList.add('cl-h');

        //white
    } else if (window.scrollY >= 2048 && window.scrollY < 3072) {
        console.log("hi......1")

        nav1.classList.add('fc-blue');
        nav1.classList.remove('fc-white');
        nav2.classList.add('fc-blue');
        nav2.classList.remove('fc-white');
        logob.classList.add('cl-h');
        logog.classList.remove('cl-h');
        // logog.classList.add('cl-h');
    }
    //blue
    else if (window.scrollY >= 3072 && window.scrollY < 4096) {
        console.log("hi......1")

        nav1.classList.add('fc-white');
        nav1.classList.remove('fc-blue');
        nav2.classList.add('fc-white');
        nav2.classList.remove('fc-blue');
        logob.classList.remove('cl-h');
        logog.classList.add('cl-h');
    }
    //white
    else if (window.scrollY >= 4096 && window.scrollY < 5120) {
        console.log("hi......1")

        nav1.classList.add('fc-blue');
        nav1.classList.remove('fc-white');
        nav2.classList.add('fc-blue');
        nav2.classList.remove('fc-white');
        logob.classList.add('cl-h');
        logog.classList.remove('cl-h');
        // logog.classList.add('cl-h');
    }
    //blue
    else if (window.scrollY >= 5120 && window.scrollY < 6144) {
        console.log("hi......1")

        nav1.classList.add('fc-white');
        nav1.classList.remove('fc-blue');
        nav2.classList.add('fc-white');
        nav2.classList.remove('fc-blue');
        logob.classList.remove('cl-h');
        logog.classList.add('cl-h');
    }
    //white
    else if (window.scrollY >= 6144 && window.scrollY < 7168) {
        console.log("hi......1")

        nav1.classList.add('fc-blue');
        nav1.classList.remove('fc-white');
        nav2.classList.add('fc-blue');
        nav2.classList.remove('fc-white');
        logob.classList.add('cl-h');
        logog.classList.remove('cl-h');
        logog.classList.add('cl-h');
    }
    else {
        nav1.classList.add('fc-blue');
        nav2.classList.add('fc-blue');
    }

})