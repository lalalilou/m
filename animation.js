
function updateClock() {
    const now = new Date();
    let day = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const timeString = `dnia ${day}.${month}.${year}\n godz ${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();


    var S = []; 

    function init(IM, HM) {
        for (let i = 0; i < HM; i++) {
            S[i] = {};
            S[i].o = document.createElement('img');
            S[i].o.src = IM;
            S[i].o.style.position = "absolute";
            S[i].o.style.width = "30px";  
            S[i].o.style.height = "30px"; 
            document.body.appendChild(S[i].o);

            let screenWidth = window.innerWidth;
            let screenHeight = window.innerHeight;

            S[i].dx = 0;
            S[i].xp = Math.random() * (screenWidth - 50);
            S[i].yp = Math.random() * screenHeight * 0.5; 
            S[i].am = Math.random() * 20;
            S[i].stx = 0.02 + Math.random() / 10;
            S[i].sty = 0.7 + Math.random();
            S[i].rot = Math.random() * 360; 
            S[i].rotSpeed = (Math.random() - 0.5) * 2; 

        }
        snow(HM);
    }

    function snow(HM) {
        let screenWidth = window.innerWidth;
        let screenHeight = window.innerHeight;
    
        for (let i = 0; i < HM; i++) {
            let obj = S[i];
            obj.yp += obj.sty;
    
            if (obj.yp > screenHeight - 50) {
                obj.xp = Math.random() * (screenWidth - 50); 
                obj.yp = -30; 
                obj.stx = 0.02 + Math.random() / 10;
                obj.sty = 0.7 + Math.random();
                obj.rot = Math.random() * 360;
            }
    
            obj.dx += obj.stx;
            obj.rot += obj.rotSpeed;

            obj.o.style.left = ~~(obj.xp + obj.am * Math.sin(obj.dx)) + "px";
            obj.o.style.top = ~~(obj.yp) + "px";
            obj.o.style.transform = `rotate(${obj.rot}deg)`;

        }
    
        setTimeout(() => snow(HM), 10);
    }
    

    window.onload = function() {
        init('images/kwiatek.png', 20);
    };