let x;
let d = new Date('2020/10/12');

x = d.toString();

x = d.getTime();
x = d.valueOf();

x = d.getFullYear();

x = d.getMonth();

x = d.getDate();

x = d.getHours();
x = d.getDay();
x = d.getMinutes();
x = `${d.getFullYear()}-${d.getMonth() +1}-${d.getDate()}`

x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('en-GB').format(d);
x = Intl.DateTimeFormat('default').format(d);
x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);
x = d.toLocaleString('default', { month: 'short' });

console.log(x);