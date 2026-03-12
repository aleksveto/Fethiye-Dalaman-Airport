document.getElementById("loadBtn").onclick = function(){

fetch("schedule.json")
.then(r=>r.json())
.then(data=>{

let now=new Date()

let table="<table>"
table+="<tr><th>Дата</th><th>День</th><th>Время</th><th>Перевозчик</th></tr>"

data.forEach(bus=>{

let today=new Date()

let timeParts=bus.time.split(":")

let busDate=new Date(
today.getFullYear(),
today.getMonth(),
today.getDate(),
timeParts[0],
timeParts[1]
)

if(busDate<now) return

let days=["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"]

let date=today.toLocaleDateString("ru-RU")
let day=days[today.getDay()]

table+=`
<tr>
<td>${date}</td>
<td>${day}</td>
<td>${bus.time}</td>
<td>${bus.company}</td>
</tr>
`

})

table+="</table>"

document.getElementById("tableBlock").innerHTML=table

})

}
