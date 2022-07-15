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

let array = [
    {id:1,lift:1,checked:false,floor:1},
    {id:2,lift:2,checked:false,floor:1},
    {id:3,lift:3,checked:false,floor:1},
    {id:4,lift:4,checked:false,floor:1},
    {id:5,lift:5,checked:false,floor:1},
];

let floor =[{floor:1 ,checked:false},{floor:2,checked:false},{floor:3,checked:false},{floor:4,checked:false},{floor:5,checked:false}]


const liftMovments = function(i){
        var closest = array.map(el=>el.floor).reduce(function(prev, curr) {
            return (Math.abs(curr - i) < Math.abs(prev - i) ? curr : prev);
          });
        for(let el of array){
             if(closest==el.floor && el.checked==false){
                console.log(el.floor)
                for(let id =el.id;id>=el.id;id--){
                    marginbottom=Number(margin*i)
                    margintop=740-marginbottom;
                    var posbtm =Number(margin*el.floor) ; 
                    var postop= 740-posbtm;
                    let n=el.floor
                    let mb=posbtm
                    let mbt=postop
                   
                    console.log("cur",postop, posbtm)
                   

                    clearInterval(animation);
                    animation= setInterval(frame, 0);
                    function frame() {
                      if (postop == margintop || posbtm==marginbottom) {
                        if(posbtm==marginbottom){
                            if(Number(mb)==posbtm){
                                mb+=148
                                document.querySelector(`.el${el.id}`).value=`${n}`
                                n++;
                                console.log(n)
                              
                            }
                        }
                        else{
                            if(Number(mbt)==postop){
                                mbt+=148
                                n--;
                                document.querySelector(`.el${el.id}`).value=`${n}`
                                console.log(n)
                              
                            }
                        }
                        clearInterval(animation);
                      } 
                      else {
                            if(postop > margintop){
                                if(Number(mb)==posbtm){
                                  mb+=148
                                  document.querySelector(`.el${el.id}`).value=`${n}`
                                  n++;
                                  console.log(n)
                                
                              }
                                postop--; 
                                posbtm++;
                           
                                document.querySelector(`.elevator${el.id}`).style.marginTop=`${postop}px`
                                document.querySelector(`.elevator${el.id}`).style.marginBottom=`${posbtm}px`
                        
                            }
                            else{
                                if(Number(mbt)==postop){
                                    mbt+=148
                                    n--;
                                    document.querySelector(`.el${el.id}`).value=`${n}`
                                    console.log(n)
                                  
                                }
                                postop++; 
                                posbtm--;
            
                                document.querySelector(`.elevator${el.id}`).style.marginTop=`${postop}px`
                                document.querySelector(`.elevator${el.id}`).style.marginBottom=`${posbtm}px`
                    
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

            document.querySelector(`.elevator${el.id}`).style.marginTop='592px'
            document.querySelector(`.elevator${el.id}`).style.marginBottom='148px'
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






