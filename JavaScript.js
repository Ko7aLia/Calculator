
let animEye = setInterval(timerEye,15000);

function timerEye(){


        const point = document.getElementById('point');
        const rectan_1 = document.getElementById('rectan_1');
        const rectan_2 = document.getElementById('rectan_2');

    
            point.classList.add('pointALT');
        
            rectan_1.classList.add('rectan_1');

            rectan_2.classList.add('rectan_2');



            point.addEventListener('animationend', function() {// без этих строк не проигрывается анимация
             
             point.classList.remove('pointALT');

             rectan_1.classList.remove('rectan_1');

             rectan_2.classList.remove('rectan_2');
             
            }, { once: true });

}


function CEANIM(){
    
    const CE = document.getElementById('CE');
    const tongue_right = document.getElementById('tongue_right');

        // Используем getComputedStyle для получения текущего состояния дисплея
        
            CE.classList.add('CEANIM');
            tongue_right.classList.add('tongue_rightANIM');

    CE.addEventListener('animationend', function() {
            CE.classList.remove('CEANIM');
            tongue_right.classList.remove('tongue_rightANIM');
        
        }, { once: true });
  
}







//Array.from(document.getElementsByClassName(".listva")).forEach(
//function perebor(){Dvishenie();});




let schetchik = 0;
let schetchik2 = 0;

$(function() {
    $("#Input").on('change keyup input click', function() {
        if(this.value.match(/[^0-9\.]/g)){
            this.value = this.value.replace(/[^0-9\.]/g, "");
            //не даст пользователю ввести буквы в поле input
            //  /[^0-9\.\+\-\:\*]/ <== здесь пишутся те элементы, которые можно вписать в input;  "\" <= своего рода запятая тут
        };
    });
});

$(function() {
    $("#Input2").on('change keyup input click', function() {
        if(this.value.match(/[^+\-\:\*]/g)){
            this.value = this.value.replace(/[^+\-\:\*]/g, "");
            
        };
    });
});

$(function() {
    $("#Input3").on('change keyup input click', function() {
        if(this.value.match(/[^0-9\.]/g)){
            this.value = this.value.replace(/[^0-9\.]/g, "");
        };
    });
});




    

let operand1 = null;
let operator = null;

$(".operator").on('click', function(){

    
    
    WOWPOINT = 0;
        if(operand1 === null){alert("нужно ввести первое число");

        } else {
    
        operator = $(this).attr("value");
        $("#Input2").val($(this).attr("value"));};

            
 });


$(".number").on('click', function(){
    
    if(operator === null) { 
        if(schetchik >= 18){alert("максимум 18 символов")
            } else {
        let a = $(this).attr("value"); 
        let b = $("#Input").val();
        $("#Input").val(b + a);
        operand1 = parseFloat($("#Input").val());};

        schetchik++;
        


    } else {
        
        if(schetchik2 >= 18){alert("максимум 18 символов")
        } else {
        $("#Input3").val($("#Input3").val() + $(this).attr("value"));};
    
        schetchik2++;
    };
});

 


 $(".CE").on('click', function(){

    
 
    if(operator === null){
        
        if($("#Input").val().length == 1) {$("#Input").val("");
        } else { 
                    
                    if($("#Input").val().substring($("#Input").val().length - 1) === '.'){
                    
                    $("#Input").val($("#Input").val().slice(0,-1));
                    WOWPOINT = 0;

                    } else {

                    $("#Input").val($("#Input").val().slice(0,-1));}}
           
           
        if(schetchik >= 18){schetchik = 17;

        } else if(schetchik === 0) {alert("введите первое число")} else {schetchik--; CEANIM();}
            
            
                // let a = $("#Input").val().substring($("#Input").val().length, $("#Input").val().length -1);
           // $("#Input").val($("#Input").val() - a.val());}
            //alert(typeof $("#Input3").slice(0));
            //alert(a);
    } else {

        if($("#Input3").val().length == 1) {$("#Input3").val("");
        } else {

                if($("#Input3").val().substring($("#Input3").val().length - 1) === '.'){
                    
                    $("#Input3").val($("#Input3").val().slice(0,-1));
                    WOWPOINT = 0;
                } else {     
                $("#Input3").val($("#Input3").val().slice(0,-1));
                }
        }   

        if(schetchik2 >= 18){schetchik2 = 17;

        } else if(schetchik === 0) {alert("введите второе число")} else {schetchik--; CEANIM();}

    };

});



let WOWPOINT = 0;


$(".point").on('click', function(){
    
    const point = document.getElementById('point');
    const rectan_1 = document.getElementById('rectan_1');
    const rectan_2 = document.getElementById('rectan_2');

    
            point.classList.add('pointALT');
        
            rectan_1.classList.add('rectan_1');

            rectan_2.classList.add('rectan_2');



            point.addEventListener('animationend', function() {// без этих строк не проигрывается анимация
             
             point.classList.remove('pointALT');

             rectan_1.classList.remove('rectan_1');

             rectan_2.classList.remove('rectan_2');
             
            }, { once: true });

               
             
        
    

    


                

        
if(WOWPOINT === 1){alert("нельзя больше одной точки");

    } else {

        WOWPOINT = 1;
        schetchik++;
        

        if(operator === null) { 

            let non = false;
            let a = $(this).attr("value");
            let b = $("#Input").val();

            if($("#Input").val() != 0) {non = true;};
            
            if(non == true) {$("#Input").val(b+a);} else {$("#Input").val(0+a);};

        }   else    {

                if($("#Input3").val().includes('.') === true){alert("нельзя больше одной точки");

                    }   else    {

                                schetchik2++;

                            let non = false;
                            let a = $(this).attr("value");
                            let b = $("#Input3").val();

                            if($("#Input3").val() != 0) {non = true;};

                            if(non == true) {$("#Input3").val(b+a);} else {$("#Input3").val(0+a);};
                        }

                }
    };


    




});

   

let operand2=null;
let relt=0;

function poiskPoint() {if($("#Input3").val().substring($("#Input3").val().length - 1) === '.'){$("#Input3").val($("#Input3").val() + '00');};}


$(".result").on('click', function(){
    
 operand2 = parseFloat($("#Input3").val());

 switch(operator){

    case '+':
        //Number.isNaN(переменная) - проверяет, является ли содержимое NaN и возвращает true/false
        if(Number.isNaN(operand2) === true) {alert("Введите второе число");
        } else {
       relt = operand1 + operand2;
       poiskPoint();
       $("#Input4").val(relt);}
        break;
    case '-':
        if(Number.isNaN(operand2) === true) {alert("Введите второе число");
        } else {
        relt = operand1 - operand2;
        poiskPoint();
        $("#Input4").val(relt);}
        break;
    case '*':
        if(Number.isNaN(operand2) === true) {alert("Введите второе число");
        } else {
        relt = operand1 * operand2;
        poiskPoint();
        $("#Input4").val(relt);}
        break;
    case ':':
        if(Number.isNaN(operand2) === true) {alert("Введите второе число");
        } else {
        if(operand1 == 0) {alert("я запрещаю тебе делить ноль!"); break;} 
        else if (operand2 == 0) {alert("я запрещаю тебе делить на ноль!"); break;} else{
        relt = operand1 / operand2;};
        poiskPoint();
        $("#Input4").val(relt);}
        break;

        default:alert("я такого не знаю");

 }



});

/////////////// анимация перекати-поле
let animTumbleweed = setInterval(timerTumbleweed,13000);

function timerTumbleweed() {

    const tumbleweed = document.getElementById('tumbleweed');

        tumbleweed.classList.add('tumbleweedANIM');


    tumbleweed.addEventListener('animationend', function() {// без этих строк не проигрывается анимация
             
            tumbleweed.classList.remove('tumbleweedANIM');
             
    }, { once: true });

};
/////////////////
function plant_zombie() {
//var start = performance.now();
        zombie.classList.add('zombie');

        

       // console.log("отработал появление зомби - 1 этап");

    setTimeout(function() {
                
            plant.classList.remove('plant');
            
            plant.classList.remove('plant_endless');

            plant_attack.classList.add('plant_attack');

            //console.log("отработал ремув растения и растения бесконечного, добавил атаку растения - 2 этап");


            setTimeout(function(){

                    plant_attack.classList.remove('plant_attack');

                    zombie.classList.remove('zombie');
            
                    plant_chew.classList.add('plant_chew');

                    //console.log("отработал ремув атаки растения и зомби, добавил жевание растения - 3 этап");

                    setTimeout(function(){

                            plant_chew.classList.remove('plant_chew');
                        
                            plant_gastro.classList.add('plant_gastro');

                           // console.log("отработал ремув жевания растения, запустил переваривание растения - 4 этап");
                        
                            setTimeout(function(){
                               
                                plant_gastro.classList.remove('plant_gastro');
                               
                                plant.classList.add('plant_endless');

                               // console.log("отработал ремув переваривания растения, запустил растение бесконечное - 5 этап");
                               

                                //var end = performance.now();
                                
                               // var time = end - start;
                
                               // console.log('Время выполнения = ' + time);

                                plant_zombie();


                            },2300);

                    },10000);
                        
            },1000);

    },13000);
                
};







$(".clear").on('click', function(){
    $("#Input").val('');
    $("#Input2").val('');
    $("#Input3").val('');
    $("#Input4").val('');
    operator=null;
    operand1=null;
    operand2=null;
    relt = 0;
    WOWPOINT = 0;
    schetchik = 0;
    schetchik2 = 0;

    const CLEAR = document.getElementById('clear');
    const tongue_left = document.getElementById('tongue_left');

        // Используем getComputedStyle для получения текущего состояния дисплея
        
            CLEAR.classList.add('CLEARANIM');
            tongue_left.classList.add('tongue_leftANIM');

        CLEAR.addEventListener('animationend', function() {
            
                CLEAR.classList.remove('CLEARANIM');
                tongue_left.classList.remove('tongue_leftANIM');
        
        }, { once: true });


            let cycle_of_seed_plant = 0;


        setTimeout(function(){

                actDropletTumbleweed();

        },245);

            // let act_D_T = setTimeout(actDropletTumbleweed,245); // ДЛЯ ОДНОКРАТНОГО ПРИЗЫВА ЧЕРЕЗ ОПРЕДЕЛЕННОЕ ВРЕМЯ

            // console.log("нахожусь в jQuery on click и act_D_T здесь :", act_D_T);

///////////////// функция вызывается во время нажатия на clear, выполняет действие после соприкосновения перекати-поле tumbleweed и капли clear, воспроизводит анимацию выпадения семечки seed, останавливает интервал анимации для tumbleweed и удаляет его класс
function actDropletTumbleweed() {

    
    const position = document.getElementById('tumbleweed');
    const tum_pos = position.getBoundingClientRect();
    

    const posit = document.getElementById('test_1');
    const test_pos = posit.getBoundingClientRect();

    const seed = document.getElementById('seed');

    const sprout = document.getElementById('sprout');
    
    const plant = document.getElementById('plant');
    const plant_pos = plant.getBoundingClientRect();

    const zombie = document.getElementById('zombie');
    const zombie_pos = zombie.getBoundingClientRect();

    const plant_attack = document.getElementById('plant_attack');
    const plant_chew = document.getElementById('plant_chew');
    const plant_gastro = document.getElementById('plant_gastro');
    
 //////////////////// взаимодействие ростка sprout и капли clear для образования растения plant (за основу условного оператора берется положение семечки seed, чтобы создать промежутки семечко/росток/растение, так как seed изменяет эти координаты от каждого появления нового элемента)

    if(sprout.classList.contains('sprout')){

        
            setTimeout(function(){

                sprout.classList.add('sprout_Invs');
                
                plant.classList.add('plant');

                

                setTimeout(plant_zombie,0);

                

                sprout.classList.remove('sprout');

                

                console.log("вещаю из ростка, это 3 этап");

            },1000);

        

    };
    /////////////////// когда семечка seed уже появилась на земле и на неё упала капля clear, появляется росток sprout, seed визуально исчезает
    if(seed.classList.contains('seed')){


            setTimeout(function(){

                sprout.classList.add('sprout'); 
                        
                seed.classList.add('seed_Invs');

                seed.classList.remove('seed');


                console.log("вещаю из семечки, это 2 этап");

            },1000);

    
    };
    
    
    if(test_pos.left < tum_pos.left && test_pos.right > tum_pos.right){

                

                seed.classList.add('seed');

                clearInterval(animTumbleweed); //останавливает интервал, ищет по названию переменной. Последний цикл проигрывает до конца

                tumbleweed.classList.remove('tumbleweedANIM');

                console.log("вещаю из условия соприкосновения перекати-поле с блоком отслеживания 1 этап");
        //console.log("пересечение"); 
    }; //else {console.log("мимо");}




    //console.log(position.getBoundingClientRect(), "перекати-поле");
    //console.log(posit.getBoundingClientRect(), "тест блок");
    
};


});






function ohah(event){

    //const innerCircle = document.getElementById('innerCircle');
//две ненужные строчки кода, так как обработчик прописан в forEach
    //innerCircle.addEventListener('mousemove', (e) => {
        const circle = event.currentTarget;
        const rect = circle.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;


        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const deltaX = offsetX - centerX;
        const deltaY = offsetY - centerY;

        const movePercentageX = deltaX / -centerX * 30;
        const movePercentageY = deltaY / -centerY * 30;
        
        
        circle.style.transform = `translate(${movePercentageX - 20}%, ${movePercentageY - 20}%)`;

        //где написано style это отсылка к css, как тут^ т.e.  здесь написана часть кода css, но на js.

   // });
};



document.querySelectorAll('.listva,.image_pos_anim').forEach(circle =>{
    circle.addEventListener('mouseenter', () => 
        {circle.addEventListener('mousemove', ohah);});

    circle.addEventListener('mouseleave', () => 
        {circle.style.transform = 'translate(0, 0)';
         circle.removeEventListener('mousemove', ohah);});

});


document.addEventListener('DOMContentLoaded', function() {
    
    const WAGEN = document.getElementById('WAGEN');
    const emptyWAGEN = document.getElementById('emptyWAGEN');
    const WAGEN_gold = document.getElementById('WAGEN_gold');
    const dragon_hand = document.getElementById('dragon_hand');
    const dragon_hand_close = document.getElementById('dragon_hand_close');
    const dragon_head = document.getElementById('dragon_head');

    WAGEN.addEventListener('click', function() {
            // Используем getComputedStyle для получения текущего состояния дисплея
            WAGEN.classList.remove('WAGEN_from_RIGHT_to_LEFT');

            WAGEN.classList.add('WAGEN_from_LEFT_to_RIGHT');

            emptyWAGEN.classList.add('WAGEN_from_RIGHT_to_LEFT');


            WAGEN_gold.classList.remove('WAGEN_from_RIGHT_to_LEFT');
            WAGEN_gold.classList.remove('dragon_handing_wagen_up');
            dragon_head.classList.remove('dragon_head');
            dragon_hand.classList.remove('dragon_hand');
            dragon_hand_close.classList.remove('dragon_hand_close');
            dragon_hand_close.classList.remove('dragon_hand_close_anim');

            

            // Удаление класса анимации после окончания, чтобы можно было повторить
            //            emptyWAGEN.addEventListener('animationend', function() {
            //            emptyWAGEN.classList.remove('emptyTelezhkaAnim');
            //        }, { once: true });

            //log0.style.opacity = '1'; // полная непрозрачность
       
    });

    emptyWAGEN.addEventListener('animationend', function(){


        emptyWAGEN.addEventListener('click', function() {    

             
            WAGEN.classList.add('psevdo_WAGEN');

            emptyWAGEN.classList.remove('WAGEN_from_RIGHT_to_LEFT');
            emptyWAGEN.classList.add('WAGEN_from_LEFT_to_RIGHT'); 

            WAGEN_gold.classList.add('WAGEN_from_RIGHT_to_LEFT');       

            //        emptyWAGEN.addEventListener('animationend', function() {
            //            emptyWAGEN.classList.remove('emptyTelezhkaAnimRE');
            //        
            //        }, { once: true });    

                WAGEN_gold.addEventListener('animationend', function(){

                    dragon_head.classList.add('dragon_head');

                    setTimeout(function(){

                        dragon_hand.classList.add('dragon_hand');

                    },5000);
                    
                    dragon_hand.addEventListener('animationend', function(){

                        dragon_hand_close.classList.add('dragon_hand_close');

                                setTimeout(function(){
                                        dragon_hand_close.classList.add('dragon_hand_close_anim');
                                        
                                        WAGEN_gold.classList.add('dragon_handing_wagen_up');
                                },1000);

                    });



                    dragon_head.addEventListener('animationend', function(){

                            setTimeout(function(){

                                WAGEN.classList.remove('psevdo_WAGEN');
                                WAGEN.classList.remove('WAGEN_from_LEFT_to_RIGHT');


                                WAGEN.classList.add('WAGEN_from_RIGHT_to_LEFT');


                            },5000);
                        });





                });
        });

   });

    



    

});




