realTime = () => {
    let date_variable = new Date;
    let time_variable = date_variable.toLocaleTimeString();
    let realTime_variable = document.querySelector(".real");
    realTime_variable.innerHTML = time_variable;
}
let intervalTime = setInterval(realTime, 1000)