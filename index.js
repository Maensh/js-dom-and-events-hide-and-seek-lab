function getFirstSelector(selector){
    let x = document.querySelector(selector);
    return x;
}

function nestedTarget(){
    let x = document.getElementById('nested').getElementsByClassName('target')[0];
    return x;
}

/* function deepestChild(){
    let x = document.querySelectorAll('div#grand-node div');
    return x[x.length-1];
} */

function deepestChild(){
    let child = document.getElementById('grand-node');
    while (child.firstElementChild != null){
        child = child.firstElementChild;
    }
    return child;
}

function increaseRankBy(n){
    const lis = document
  .getElementById('app')
  .querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML)+ n).toString();
  }
    return lis;
}
