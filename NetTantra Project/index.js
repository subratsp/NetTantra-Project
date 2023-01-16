var data1 = {
};
var data2 = {
};
var data3 = {
}
const changeData1 = (event)=>{
    data1 = {...data1, [event.target.name] : event.target.value.trim()}
    console.log(data1);
}
const changeData2 = (event)=>{
    data2 = {...data2, [event.target.name] : event.target.value.trim()}
    console.log(data2);
}
const changeData3 = (event)=>{
    data1 = {...data3, [event.target.name] : event.target.value.trim()}
    console.log(data3);
}
function validateMail(inputText){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat)){
    return true;
}
else{
    alert("Invalid Email id");
    return false;
}
}

function submitData1(){
    localStorage.setItem("Data1",JSON.stringify(data1));
    console.log("data submitited 1");
}
function submitData2(){
    localStorage.setItem("Data2",JSON.stringify(data2));
}
function submitData3(){
    localStorage.setItem("Data3",JSON.stringify(data3));
}