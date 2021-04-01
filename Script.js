// navigate to this link
// https://www.linkedin.com/mynetwork/invitation-manager/sent/

// current pending request index
var index = 0;

// array of pending requests
var array = document.querySelectorAll(`button[data-control-name="withdraw_single"]`);

// these are constants to deal with loading time (change them to suit your connection speed)
const WAIT_FOR_MODAL_TO_LOAD = 750;
const INTERVAL_TIME = 1500;

// withdraw request every 1500 ms
var interval = setInterval(() =>{
    const btn = array[index];
    btn.click();
    setTimeout(() => {
      document.querySelector(`button[class="artdeco-modal__confirm-dialog-btn artdeco-button artdeco-button--2 artdeco-button--primary ember-view"]`).click();
                     index++;
    },WAIT_FOR_MODAL_TO_LOAD);
    if(index === array.length) 
    {
      array = document.querySelectorAll(`button[data-control-name="withdraw_single"]`);
      index = 0;
    }
},INTERVAL_TIME);
