var put = document.getElementById('put');

document.addEventListener('keyup',function(e){
    if(e.keyCode == 49 || e.keyCode == 97){
        put.value += 1;
    }else if(e.keyCode == 50 || e.keyCode == 98){
        put.value += 2;
    }else if(e.keyCode == 51 || e.keyCode == 99){
        put.value += 3;
    }else if(e.keyCode == 52 || e.keyCode == 100){
        put.value += 4;
    }else if(e.keyCode == 53 || e.keyCode == 101){
        put.value += 5;
    }else if(e.keyCode == 54 || e.keyCode == 102){
        put.value += 6;
    }else if(e.keyCode == 55 || e.keyCode == 103){
        put.value += 7;
    }else if(e.keyCode == 56 || e.keyCode == 104){
        put.value += 8;
    }else if(e.keyCode == 57 || e.keyCode == 105){
        put.value += 9;
    }else if(e.keyCode == 48 || e.keyCode == 96){
        put.value += 0;
    }else if(e.keyCode == 107){
        put.value += '+';
    }else if(e.keyCode == 109 || e.keyCode == 189){
        put.value += '-';
    }else if(e.keyCode == 106){
        put.value += '*';
    }else if(e.keyCode == 191 || e.keyCode == 111){
        put.value += '/';
    }else if(e.keyCode == 110 || e.keyCode == 190){
        put.value += '.';
    }else if(e.keyCode == 8){
        put.value = put.value.toString().slice(0,-1);
    }else if(e.keyCode ==  13){
        put.value = eval(put.value);
    }
});