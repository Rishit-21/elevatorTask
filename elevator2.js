let subBlock = document.querySelector('.subBlock');

let block1=document.querySelector('.block--1');
let elevator1=document.querySelector('.elevator1');
let switch1 = document.querySelector('.switch1');

let block2=document.querySelector('.block--2');
let elevator2=document.querySelector('.elevator2');
let switch2 = document.querySelector('.switch2');

let block3=document.querySelector('.block--3');
let elevator3=document.querySelector('.elevator3');
let switch3 = document.querySelector('.switch3');

let block4=document.querySelector('.block--4');
let elevator4=document.querySelector('.elevator4');
let switch4 = document.querySelector('.switch4');

let block5=document.querySelector('.block--5');
let elevator5=document.querySelector('.elevator5');
let switch5 = document.querySelector('.switch5');


let floor1Up = document.querySelector('.btn1up');

let floor2Up  = document.querySelector('.btn2up');
let floor2dwn = document.querySelector('.btn2dwn');

let floor3Up  = document.querySelector('.btn3up');
let floor3dwn = document.querySelector('.btn3dwn');

let floor4Up=document.querySelector('.btn4Up');
let floor4dwn=document.querySelector('.btn4dwn');

let floor5dwn=document.querySelector('.btn5dwn');

let call=0 
let marginbottom=0
let margintop=740
let margin=148

let animation=null;
let animationDoors=null;

let ids=0;

let numLift = prompt("Enter number of lift you want",3)
let numfloor=prompt("Enter number of floor you want",7)

let htmlfl

let array = [];

document.querySelector('.mainElevator').innerHTML=''
let liftheight=Number((numfloor*150));
let flheight =(numfloor*150);
const displaylifts = function(){
    
    for(let t=1;t<=numLift;t++){
        let html = `<div class="subBlock  subBlock${t}">
        <div class="block--${t} blockss" style="height:${liftheight}px">
        <div class="elevator${t} el" style="top:${liftheight-150}px">
        <div class="leftDoor leftDoor${t}"></div>
        <div class="rightDoor rightDoor${t}"></div>
        <span><input class="el${t}" type="text" value="1" disabled>
        </div>
        </div>
        <label class="switch">
        <input type="checkbox" class=" switchs switch${t}" onchange="checks('${t}')">
        <span class="slider round"></span>
        </label>
        </div>`
        //document.querySelector(`.blockss`).style.height=`${liftheight}px`
    array.push({id:++ids,lift:t,checked:false,floor:1})
    document.querySelector('.mainElevator').insertAdjacentHTML("beforeend",html)
    }
    document.querySelector('.mainElevator').insertAdjacentHTML("beforeend",`<div class="block-buttons"></div>`)
    document.querySelector(`.block-buttons`).style.height=`${flheight}px`
    for(let t=numfloor; t>=1;t--){
        if(t==1){
         htmlfl=`<div class="floor-${t} floor">
            <div class="floorNo ${t}"><span>${t}</span></div>
            <div class="up-btn"><button class="btns btn${t}up" ></button></div>
            <div class="up-btn"><button class="btns btn${t}up" onclick="upbtn('${t}')"><i class="fa-solid fa-circle-chevron-up"></i></button></div>
        </div>`
        }
        else if(t==numfloor){
            htmlfl=`<div class="floor-${t} floor">
            <div class="floorNo ${t}"><span>${t}</span></div>
           <div class="down-btn"> <button class="btns btn${t}dwn" onclick="dwnbtn('${t}')"> <i class="fa-solid fa-circle-down"></i></button></div>
        </div>`
        }
        else{
            htmlfl =`<div class="floor-${t} floor">
            <div class="floorNo ${t}"><span>${t}</span></div>
            <div class="up-btn"><button class="btns btn${t}Up" onclick="upbtn('${t}')"><i class="fa-solid fa-circle-chevron-up"></i></button></div>
           <div class="down-btn"> <button class="btns btn${t}dwn" onclick="dwnbtn('${t}')"><i class="fa-solid fa-circle-down"></i></button></div>
        </div>`
    }
    document.querySelector('.block-buttons').insertAdjacentHTML("afterbegin",htmlfl)

    }
    document.querySelector(`.block-buttons`).insertAdjacentHTML("afterbegin",`<div class="maintenance"><span >MAINTENANCE</span></div>`)
}


displaylifts()
console.log(array)

let floor =[{floor:1 ,checked:false},{floor:2,checked:false},{floor:3,checked:false},{floor:4,checked:false},{floor:5,checked:false}]


const liftMovments = function(i){
        var closest = array.map(el=>el.floor).reduce(function(prev, curr) {
            return (Math.abs(curr - i) < Math.abs(prev - i) ? curr : prev);
          });
        for(let el of array){
             if(closest==el.floor && el.checked==false){
                console.log(el.floor)
                for(let id =el.id;id>=el.id;id--){
                    marginbottom=Number(150*i)
                    margintop=(liftheight-marginbottom);
                    console.log(marginbottom,margintop)
                    var posbtm =Number(150*el.floor) ; 
                    var postop= liftheight-posbtm;
                    let n=el.floor
                    let mb=posbtm
                    let mbt=postop
                    let posl=0
                    let posr=0
                    let clposl=50
                    let clposr=50
                   
                    console.log("cur",postop, posbtm)
                   

                    clearInterval(animation);
                    animation= setInterval(frame, 0);
                    function frame() {
                      if (postop == margintop) {
                        document.querySelector(`.rightDoor${el.id}`).style.border=`solid brown`
                        document.querySelector(`.leftDoor${el.id}`).style.border=`solid brown`
                        clearInterval(animationDoors);
                        animationDoors=setInterval(frame,15);
                        function frame(){
                            if(el.floor==i){
                                if(posl==50 && posr==50){
                                    clearInterval(animation)
                                    setTimeout(function(){
                                        if(clposl==0&& clposr==0){
                                            clearInterval(animationDoors)
                                        }
                                        else{
                                            clposl--;
                                            clposr--;
                                            console.log(posl,posr)
                                            document.querySelector(`.rightDoor${el.id}`).style.left=`${clposr}px`
                                            document.querySelector(`.leftDoor${el.id}`).style.right=`${clposl}px`
                                            document.querySelector(`.el${el.id}`).style.opacity='0'
                                        }
                                    },2000)
                                }
                                else{
                                    posl++;
                                    posr++;
                                    console.log(posl,posr)
                                    document.querySelector(`.rightDoor${el.id}`).style.left=`${posr}px`
                                    document.querySelector(`.leftDoor${el.id}`).style.right=`${posl}px`
                                    document.querySelector(`.el${el.id}`).style.opacity='1'
                                }
                            }
                        }

                        if(postop==mbt){
                            mbt-=150
                            document.querySelector(`.el${el.id}`).value=n
                            n++

                        }

                        clearInterval(animation);
                      } 
                      else {
                            if(postop > margintop){
                                if(postop==mbt){
                                    mbt-=150
                                    document.querySelector(`.el${el.id}`).value=n
                                    n++
                                }
                                postop--; 
                                posbtm++;
                           
                                document.querySelector(`.elevator${el.id}`).style.top=`${postop}px`
                                //document.querySelector(`.elevator${el.id}`).style.bottom=`${posbtm}px`
                                document.querySelector(`.rightDoor${el.id}`).style.border=`solid green`
                                document.querySelector(`.leftDoor${el.id}`).style.border=`solid green`
                        
                            }
                            else{
                                if(postop==mbt){
                                    mbt+=150
                                    document.querySelector(`.el${el.id}`).value=n
                                    n--
                                }
                                postop++; 
                                posbtm--;
            
                                document.querySelector(`.elevator${el.id}`).style.top=`${postop}px`
                                //document.querySelector(`.elevator${el.id}`).style.bottom=`${posbtm}px`
                                document.querySelector(`.rightDoor${el.id}`).style.border=`solid green`
                                document.querySelector(`.leftDoor${el.id}`).style.border=`solid green`
                    
                            }
                            array[id-1].floor=i
                     
                      }
                      
                    }
               }

               break;
            }   
        }
}

const upbtn=function(i){
    document.querySelector('.up-btn').classList.add('action')
    document.querySelector ('.down-btn').classList.remove('action')
        liftMovments(i) 
}
const dwnbtn=function(i){
    document.querySelector('.up-btn').classList.remove('action')
    document.querySelector ('.down-btn').classList.add('action')
    liftMovments(i)
}
const maintain = function(){
    for(let el of array){
        
        if(el.checked==true){

            document.querySelector(`.elevator${el.id}`).style.top=`${liftheight-100}px`
            //document.querySelector(`.elevator${el.id}`).style.marginBottom='148px'
            document.querySelector(`.elevator${el.id}`).style.border=' red'
            document.querySelector(`.elevator${el.id}`).style.opacity='0.3'
            document.querySelector(`.el${el.id}`).value=`1`
            el.floor=10000000000000;
            //break
        }
        else if(el.checked==false){
            document.querySelector(`.elevator${el.id}`).style.border='solid black'
            document.querySelector(`.elevator${el.id}`).style.opacity='0.8'
          if(el.floor==10000000000000){
            el.floor=1
          }
          else{
            el.floor=el.floor
          }
        }  
    }
}

function checks(i){
    
    const index = array.findIndex(x=> x.id == i)
    array[index].checked=!array[index].checked
    maintain()
}