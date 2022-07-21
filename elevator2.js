
let call=0 

let margin=148



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
    array.push({id:++ids,lift:t,checked:false,floor:1,moving:false})
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
let index
let funcount=0;


let moving;


    let closest= function(i){
        let clfloor = array.map(el=>el.floor).reduce(function(prev, curr) {
        return (Math.abs(curr - i) < Math.abs(prev - i) ? curr : prev);

    })
    return array.findIndex(el=>el.floor==clfloor)
}
  


const liftMovments = function(closest,i){
    funcount++;

    let index = closest;
    
        if(array[index].checked==false ){
          
                let animation=null;
                let animationDoors=null;
                let marginbottom=Number(150*i)
                let margintop=(liftheight-marginbottom)
                var posbtm =Number(150*array[index].floor)  
                var postop= liftheight-posbtm;
                let n=array[index].floor
                let mb=posbtm
                let mbt=postop
                let posl=0;
                let posr=0;
                let clposl=55
                let clposr=55                                  
                array[index].floor=i
                let elee=document.getElementsByClassName(`el`)[array[index].id - 1]
                clearInterval(animation)
                animation=setInterval(frame, 5)
                   function  frame () {
                    if (postop == margintop) {
                       elee.style.top=`${postop}px`
                        document.querySelector(`.rightDoor${array[index].id}`).style.border=` solid rgb(83, 83, 83)`
                        document.querySelector(`.leftDoor${array[index].id}`).style.border=` solid rgb(83, 83, 83)`
                       
                        clearInterval(animationDoors);
                        animationDoors=setInterval(frame1,15);
                        function frame1(){
                            if(array[index].floor==i){
                                if(posl==55 && posr==55){
                                    clearInterval(animation)
                                        if(clposl==0&& clposr==0){
                                            clearInterval(animationDoors)
                                        }
                                        else{
                                            clposl--
                                        clposr--
                                        
                                        document.querySelector(`.rightDoor${array[index].id}`).style.left=`${clposr}px`
                                        document.querySelector(`.leftDoor${array[index].id}`).style.right=`${clposl}px`
                                        document.querySelector(`.el${array[index].id}`).style.opacity='0'
                                    }
                               
                            }
                            else{
                                posl++;
                                posr++;
                               
                                document.querySelector(`.rightDoor${array[index].id}`).style.left=`${posr}px`
                                document.querySelector(`.leftDoor${array[index].id}`).style.right=`${posl}px`
                                document.querySelector(`.el${array[index].id}`).style.opacity=`1`
                            }
                        }
                    }
                    if(postop==mbt){
                        mbt-=150
                        document.querySelector(`.el${array[index].id}`).value=n
                        n++
                    }
                   
                    clearInterval(animation)

                } 
                else {

             

                      if(postop > margintop){
                          if(postop==mbt){
                              mbt-=150
                              document.querySelector(`.el${array[index].id}`).value=n
                              n++
                            }
                            postop--; 
                           
                            
                            elee.style.top=`${postop}px`
                            document.querySelector(`.rightDoor${array[index].id}`).style.border=`solid green`
                            document.querySelector(`.leftDoor${array[index].id}`).style.border=`solid green`
                        }
                        else{
                            if(postop==mbt){
                                mbt+=150
                                document.querySelector(`.el${array[index].id}`).value=n
                                n--
                            }
                            postop++; 
                                  
                            elee.style.top=`${postop}px`
                            document.querySelector(`.rightDoor${array[index].id}`).style.border=`solid green`
                            document.querySelector(`.leftDoor${array[index].id}`).style.border=`solid green`                    
                        }
           
                        
                    }
                    
                }
               
            
            
        }   
    
}

const upbtn=function(i){
     

    liftMovments(closest(i),i) 
}
const dwnbtn=function(i){
     
   
liftMovments(closest(i),i)
}

const maintain = function(){
    for(let el of array){
        if(el.checked==true){
            document.querySelector(`.elevator${el.id}`).style.top=`${liftheight-100}px`
            document.querySelector(`.elevator${el.id}`).style.border=' red'
            document.querySelector(`.elevator${el.id}`).style.opacity='0.3'
            document.querySelector(`.el${el.id}`).value=`1`
            el.floor=10000000000000;
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