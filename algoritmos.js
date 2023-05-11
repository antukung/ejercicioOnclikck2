const recuadro1= document.querySelector ("#imagenes")
IMG_1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdurD8T5XiHCfVLbYcz9jthDbgw5HBdUq1VC9w-UWXRPFjzFseRtSyHqZWEqCg3373NgI&usqp=CAU"
IMG_2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB-06gC5PCMcIAK0mba6dz6ny2izb_HvyDSmj9xBvGCJSPZDRXGwzDSup2fx0YcV4hTMs&usqp=CAU"
IMG_3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPcHqcSxWDAkj-8d_ZQvLnep8gAD3-RaiSIUPHDLsa2YWCoVU59CFrW5u9xn76_qk_VNo&usqp=CAU"

imagen1=0;

function clickAgregar(){
    imagen1= ++imagen1;
   if (imagen1==1){
    recuadro1.innerHTML+=`<img src="${IMG_1}" alt="test">`
   } else if (imagen1==2){
    recuadro1.innerHTML+=`<img src="${IMG_2}" alt="test">`
    } else if (imagen1==3) {
    recuadro1.innerHTML+=`<img src="${IMG_3}" alt="test">`
    }

}