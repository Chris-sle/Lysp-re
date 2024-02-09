//M
let powerStatus = 'Off'
//V
ViewAll()
function ViewAll() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <div class="container">
            <div id="lightSource" onclick="TogglePower()"></div>
            <div id="infoBox">${powerStatus}</div>
        </div>
        `;
    }
//C
function TogglePower() {
let lightSource = document.getElementById('lightSource')
if(powerStatus === 'Off'){
    powerStatus = 'On';
    lightSource.style.backgroundColor = 'yellow';
}   else {
        powerStatus = 'Off';
        lightSource.style.backgroundColor = 'gray';
    }    
    document.getElementById('infoBox').innerHTML = powerStatus;    
}