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


let array = [
    {id:1,lift:1,checked:false,floor:1},
    {id:2,lift:2,checked:false,floor:1},
    {id:3,lift:3,checked:false,floor:1},
    {id:4,lift:4,checked:false,floor:1},
    {id:5,lift:5,checked:false,floor:1},
];

let floor =[{floor:1 ,checked:false},{floor:2,checked:false},{floor:3,checked:false},{floor:4,checked:false},{floor:5,checked:false}]
// const display = function(array){
//     array.forEach(items => {
//         console.log(items)
//         const html=` <div class="subBlock  subBlock${items.id} ">
//         <div class="block--${items.id}">
//             <div class="elevator${items.id}"></div>
//         </div>
//         <label class="switch">
//             <input type="checkbox" class="uyiyuiuyi switchs switch${items.id}" ${items.checked ? 'checked':""} onchange="alert('hy')">
//             <span class="slider round"></span>
//         </label>`
//         document.querySelector('.mainElevator').innerHTML(html);        
//     });
// }

// const buttons = function(){
//     floor.forEach(fl=>{
//         if(fl.floor==1|| fl.floor==5){
//             if(fl.floor==1){
//                 const html1 = `<div class="floor-${fl.floor} floor">
//                 <div class="floorNo ${fl.floor}"><span>${fl.floor}</span></div>
//                 <div class="up-btn"><button class="btns btn${fl.floor}up"><i class="fa-solid fa-circle-chevron-up"></i></button></div>
//             </div>`
//             }
//             else{
//                 const htnl5 =`<div class="floor-${fl.floor} floor">
//                 <div class="floorNo ${fl.floor}"><span>${fl.floor}</span></div>
//                <div class="down-btn"> <button class="btns btn${fl.floor}dwn"> <i class="fa-solid fa-circle-down"></i></button></div>
//             </div>`
//             }
//         }
//         const flHtml=`<div class="floor-${fl.floor} floor">
//         <div class="floorNo ${fl.floor}"><span>${fl.floor}</span></div>
//         <div class="up-btn"><button class="btns btn${fl.floor}up"><i class="fa-solid fa-circle-chevron-up"></i></button></div>
//        <div class="down-btn"> <button class="btns btn${fl.floor}dwn"><i class="fa-solid fa-circle-down"></i></button></div>
//     </div>`
//     })
// }
// display(array)
// buttons(floor)


const upbtn=function(i){
    console.log('hello')
    if(call==0){
        for(let id =array.length;id>=i;id--){
            marginbottom=Number(margin*i)
            margintop=740-marginbottom;
           if(i!=1){
               console.log(document.querySelector(`.elevator${id}`))
               document.querySelector(`.elevator${id}`).style.marginTop=`${margintop}px`
               document.querySelector(`.elevator${id}`).style.marginBottom=`${marginbottom}px`
               array[id-1].floor=i
               floor[i].checked=true
               console.log(array)
           }
           else{
               document.querySelector(`.elevator${id}`).style.marginTop=`546px`
               array[id].floor=i

           }
           break;

       }
       call=1
    }
    else if(call==1){
        let floors
        for(let el of array){
            floors =Math.abs(i-el.floor)
            if(floors==1){
                console.log(el.floor)
                for(let id =el.id;id>=el.id;id--){
                    marginbottom=Number(margin*i)
                    margintop=740-marginbottom;
                       console.log(document.querySelector(`.elevator${el.id}`))
                       document.querySelector(`.elevator${el.id}`).style.marginTop=`${margintop}px`
                       document.querySelector(`.elevator${el.id}`).style.marginBottom=`${marginbottom}px`
                       array[id-1].floor=i
                       console.log(array)
                  
               }

               break;
            }
        }
        call=1

    }
    
}
const dwnbtn=function(i){
    console.log('hello')
    if(call==0){
        for(let id =array.length;id>=i;id--){
            marginbottom=Number(margin*i)
            margintop=740-marginbottom;
               console.log(document.querySelector(`.elevator${id}`))
               document.querySelector(`.elevator${id}`).style.marginTop=`${margintop}px`
               document.querySelector(`.elevator${id}`).style.marginBottom=`${marginbottom}px`
               array[id-1].floor=i
               console.log(array)
           break;
       }
       call=1
    }
    else if(call==1){
        let floors
        for(let el of array){
            floors =Math.abs(i-el.floor)
            if(floors==1){
                console.log(el.floor)
                for(let id =el.id;id>=el.id;id--){
                    marginbottom=Number(margin*i)
                    margintop=740-marginbottom;
                       console.log(document.querySelector(`.elevator${el.id}`))
                       document.querySelector(`.elevator${el.id}`).style.marginTop=`${margintop}px`
                       document.querySelector(`.elevator${el.id}`).style.marginBottom=`${marginbottom}px`
                       array[id-1].floor=i
                       console.log(array)
                  
               }

               break;
            }
        }
        call=1

    }
    
}


const maintain = function(){
    array.forEach(el=>{
        console.log(el)
        if(el.checked==true){
            console.log( document.querySelector(`.elevator${el.id}`))

            document.querySelector(`.elevator${el.id}`).style.marginTop='546px'
            document.querySelector(`.elevator${el.id}`).style.border='solid red'
        }
    })
}

function checks(i){
    console.log(array)
    const index = array.findIndex(x=> x.id == i)
    array[index].checked=!array[index].checked
    maintain()
}


    // floor5dwn.addEventListener('click', function(){
       
    //     elevator1.style.marginBottom='740px'
    //     elevator1.style.marginTop='0px'
    // })
    
    // floor4dwn.addEventListener('click', function(){
       
    //     elevator1.style.marginBottom='592px'
    //     elevator1.style.marginTop='148px'
    // })
    
    // floor4Up.addEventListener('click', function(){
       
    //     elevator1.style.marginBottom='592px'
    //     elevator1.style.marginTop='148px'
    // })
    
    // floor3dwn.addEventListener('click', function(){
      
    //     elevator1.style.marginBottom='444px'
    //     elevator1.style.marginTop='296px'
    // })
    
    // floor3Up.addEventListener('click', function(){
       
    //     elevator1.style.marginBottom='444px'
    //     elevator1.style.marginTop='296px'
    // })
    
    // floor2dwn.addEventListener('click', function(){
     
    //     elevator1.style.marginBottom='296px'
    //     elevator1.style.marginTop='440px'
    // })
    
    // floor2Up.addEventListener('click', function(){
       
    //     elevator1.style.marginBottom='296px'
    //     elevator1.style.marginTop='440px'
    // })
    
    // floor1Up.addEventListener('click', function(){
        
    //     //elevator1.style.marginBottom='0'
    //     elevator1.style.marginTop='546px'
    // })
    // call=1





