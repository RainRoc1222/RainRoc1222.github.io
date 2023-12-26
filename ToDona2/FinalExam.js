let container = document.querySelector('.container')
let doorcontroller = document.querySelector('.doorcontroller');
let leftdoor = document.querySelector('.left-door');
let rightdoor = document.querySelector('.right-door');
let charlie = document.querySelector('.charlie');

doorcontroller.onmousedown = function(){
    leftdoor.classList.add('left-door-open');
    rightdoor.classList.add('right-door-open');
    setTimeout(DoorOpen,2000);
    setTimeout(CharlieMove,3000);
    setTimeout(SetCharilePosition,4000);
    setTimeout(DoorClose,4000);
    setTimeout(SetDoorPosition,6000);
    setTimeout(ShowMessage,7000);
}

function ShowMessage(){
    let message = document.querySelector('.message');
    message.style.display = 'block';
}

function SetCharilePosition(){
    charlie.style.top = '30em';
    charlie.style.zIndex = '2';
}

function CharlieMove(){
    charlie.classList.add('charlieMove');
}

function DoorClose(){
    leftdoor.classList.add('into-left-door');
    rightdoor.classList.add('into-right-door');
}

function SetDoorPosition(){
    leftdoor.style.transform = 'none';
    rightdoor.style.transform = 'none';
}

function DoorOpen(){
    leftdoor.style.transform = 'translateX(-60px) rotateY(70deg)';
    rightdoor.style.transform = 'translateX(60px) rotateY(-70deg)';
    CharlieMove();
}

function RemoveDoor(){
    container.removeChild(doorcontroller);
}