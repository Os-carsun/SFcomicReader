  var headbar = document.querySelectorAll('.wrap')[1];
  var controll = headbar.getElementsByClassName('page_turning')[0];

  [].forEach.call(document.querySelectorAll('.Reduction_top'),function(item) {
    if(!(item===undefined)&&!(item===NaN)){
      item.hidden=true;
      //item.remove();
    }
  });
  [].forEach.call(document.querySelectorAll('[id^=AD_]'),function(item) {
    if(!(item===undefined)&&!(item===NaN)){
      item.hidden=true;
      //item.remove();
    }
  });
  [].forEach.call(document.querySelectorAll('[class^=AD_]'),function(item) {
    if(!(item===undefined)&&!(item===NaN)){
      item.hidden=true;//right ad
      //item.remove();
    }
  });
  window.onresize=function() {
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

  changeToSapn(controll);
  headbar = changeToSapn(headbar);
  for (var i = 0; i < headbar.children.length; i++) {
    headbar.children[i].removeAttribute('style');
  };

