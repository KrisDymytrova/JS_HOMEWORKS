Це ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:

<pre>let ladder = {
step: 0,
up: function () {
this.step++;
},
down: function () {
this.step--;
},
showStep: function () { // показывает текущую ступеньку
alert(this.step);
}
};</pre>

Тепер, якщо нам потрібно зробити кілька послідовних викликів, ми можемо виконати це так:

<pre>ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1</pre>

Змініть код методів up, down і showStep таким Таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад:

<pre>ladder.up().up().down().showStep(); // 1 </pre>

Такий підхід широко використовується в бібліотеках JavaScript.