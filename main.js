  if(document.getElementsByClassName('Search_input')[0]!==undefined)
    document.getElementsByClassName('Search_input')[0].click();
  var headbar = document.querySelectorAll('.wrap')[1];
  var controll = headbar.getElementsByClassName('page_turning')[0];
  
  
  window.onresize=function() {
    document.getElementById('curPic').height=document.getElementsByTagName('html')[0].clientHeight-48-14;
  }
  function hideElement(filiter){
    [].forEach.call(document.querySelectorAll(filiter),function(item) {
    if(!(item===undefined)&&!(item===NaN)){
      item.hidden=true;
      //item.remove();
      }
    });
  }
  function init() {
    hideElement('.Reduction_top');
    hideElement('[id^=AD_]');
    hideElement('[id^=dish]');
    hideElement('[class^=AD_]');
    hideElement('.page_turning.AD_D3');
    hideElement('iframe');
    hideElement('.tucao');
    document.getElementById('curPic').height=document.getElementsByTagName('html')[0].clientHeight-48-14;
  }

  function changeToSapn (original) {
    var replacement = document.createElement('span');

    // Grab all of the original's attributes, and pass them to the replacement
    for(var i = 0, l = original.attributes.length; i < l; ++i){
      var nodeName  = original.attributes.item(i).nodeName;
      var nodeValue = original.attributes.item(i).value;

      replacement.setAttribute(nodeName, nodeValue);
    }

    // Persist contents
    replacement.innerHTML = original.innerHTML;

    // Switch!
    original.parentNode.replaceChild(replacement, original);

    return replacement;
  }
  init();
  changeToSapn(controll);
  headbar = changeToSapn(headbar);
  for (var i = 0; i < headbar.children.length; i++) {
    headbar.children[i].removeAttribute('style');
  };
  
  
