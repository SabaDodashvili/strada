const Var1 = 'hi';

localStorage.removeItem('Var1');
localStorage.setItem('Var1', Var1);
console.log(localStorage.getItem('Var1'));
