function fa(){
    if(a.value==""||b.value==""){
        f() 
        document.getElementBYId("a").style.border ="3px solid red"
        document.getElementBYId("b").style.border ="3px solid red"
        bt.value="Yo! Wagwan mate?"
    }
    else{
        document.getElementById("b").style.border="3px solid green"
        document.getElementById("b").style.border="3px solid green"
        bt.value = "Haha! You had fun yh?"
        bt.style.left = "120px";
    }
}
flag = 1
function f(){
    if (flag==1){
        bt.style.left = "210px"
        flag = 2
    }
    else if (flag==2){
        bt.style.left = "80px"
        flag = 1
    }
}