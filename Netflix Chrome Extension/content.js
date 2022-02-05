
setPageBackgroundColor();

function setPageBackgroundColor() {
    
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if(mutation.addedNodes.length > 0 && mutation.addedNodes[0].className && mutation.addedNodes[0].className.toString().match(/watch-video--skip-content/)) {
                
                console.log("inside if");
                let button = document.getElementsByClassName("button-primary watch-video--skip-content-button")[0];
                button.click();
                console.log("skipped");
              
            }
        });
    });
    observer.observe(document.querySelector('body'), { childList: true, subtree: true });
  }
  
  