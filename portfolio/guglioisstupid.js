const isShowing = {
    twitter: false,
    github: false,
    discord: false
}
const clickCount = {
    twitter: 0,
    github: 0,
    discord: 0
}
const timer = {
    twitter: null,
    github: null,
    discord: null
}
const otherTimer = {
    twitter: null,
    github: null,
    discord: null
}
const originalName = {
    twitter: "@GuglioIs2Stupid",
    github: "GuglioIsStupid",
    discord: "@social.agori.dev"
}
const maxTimer = 2000;
function Tooltip(e) {
    e.onmouseover = function(){
        console.log(e.id);
        if (isShowing[e.id]) return;

        isShowing[e.id] = true;

        e.parentElement.querySelector(".username").style = `
            position: relative;
            top: 42px;
            left: -50px
            display: inline-block;
            width: 0px;
            text-align: left;
            font-size: 16px;
            opacity: 1;
            /* Draw a text backdrop (NOT A BORDER)*/
            

            transition: 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        `
        e.style = `transform: scale(1.2)
            transition: 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);`
    }

    e.onmouseout = function(){
        isShowing[e.id] = false;

        e.parentElement.querySelector(".username").style = `
            position: relative;
            top: 40px;
            left: -50px;
            text-align: left;
            display: inline-block;
            font-size: 0px;
            width: 0;
            opacity: 0;
            transition: 0.45s cubic-bezier(0.075, 0.82, 0.165, 1);
        `
        e.style = `transform: scale(1)
            transition: 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);`
        
            console.log(e.parentElement.querySelector(".username"));
    }

    e.onclick = function(){
        // Discord-like easter egg, for if you copy more than once (resets after 1 second, but every copy resets the timer)
        navigator.clipboard.writeText(e.getAttribute("username"));
        const id = e.id;
        const original = originalName[id];
        clickCount[id]++;
        // switch
        switch (clickCount[id]) {
            case 1:
                // change to copied!
                e.parentElement.querySelector(".username").innerHTML = "Copied!";
                break;
            case 2:
                // change to double copy!
                e.parentElement.querySelector(".username").innerHTML = "Double Copy!";
                break;
            case 3:
                // change to triple copy!
                e.parentElement.querySelector(".username").innerHTML = "Triple Copy!";
                break;
            case 4:
                // change to Dominating!
                e.parentElement.querySelector(".username").innerHTML = "Dominating!";
                break;
            case 5:
                // Change to rampage!
                e.parentElement.querySelector(".username").innerHTML = "Rampage!!";
                break;
            case 6:
                // change to mega copy!
                e.parentElement.querySelector(".username").innerHTML = "Mega Copy!!";
                break;
            case 7:
                // change to unstoppable!
                e.parentElement.querySelector(".username").innerHTML = "Unstoppable!!";
                break;
            case 8:
                // change to wicked sick!
                e.parentElement.querySelector(".username").innerHTML = "Wicked Sick!!";
                break;
            case 9:
                // change to monster copy!
                e.parentElement.querySelector(".username").innerHTML = "Monster Copy!!!";
                break;
            case 10:
                // change to godlike!
                e.parentElement.querySelector(".username").innerHTML = "Godlike!!!";
                break;
            case 11:
                // change to BEYOND GODLIKE
                e.parentElement.querySelector(".username").innerHTML = "BEYOND GODLIKE!!!";
        }

        // reset timer
        clearTimeout(timer[id]);
        clearTimeout(otherTimer[id]);
        otherTimer[id] = setTimeout(function() {
            // reset text
            e.parentElement.querySelector(".username").innerHTML = original;
            console.log("reset" + id + original);
        }, 1000);
        timer[id] = setTimeout(function() {
            // reset click count
            clickCount[id] = 0;
        }, maxTimer);

        // log the click count
        console.log(clickCount[id]);
                
    }

    // log the element
    //console.log(e);
}

for (element in document.getElementsByClassName("social")) {
    const e = document.getElementsByClassName("social")[element];
    Tooltip(e);
}