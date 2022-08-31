window.onload = function () {
  document.querySelector('head').innerHTML += '<script src="https://kit.fontawesome.com/809920df63.js"></script>';
}


class cs_btn extends HTMLElement {
  constructor() {
    super();
    this.onclick = function () {
  
      document.querySelector('cs-body').classList.toggle('active')

    }
    check();


  }
}

window.customElements.define("cs-btn", cs_btn);

class cs_con extends HTMLElement {
  constructor() {
    super();

  }
}

window.customElements.define("cs-con", cs_con);



class cs_body extends HTMLElement {
  constructor() {
    super();

  }
}

window.customElements.define("cs-body", cs_body);

class cs_ul extends HTMLElement {
  constructor() {
    super();
  }
}

window.customElements.define("cs-ul", cs_ul);




class cs_li extends HTMLElement {
  constructor() {
    super();

  }
}

window.customElements.define("cs-li", cs_li);




function check() {
      if(document.querySelector('cs-btn').hasAttribute('holder')) {
      var text = document.querySelector("cs-btn").getAttribute("holder");
      if (text == "") {
        var html = '<h2>Select</h2> <div class="angle-down cs_btn_angle"></div>';
      }
      else {
                var html = '<h2>'+text+'</h2> <div class="angle-down cs_btn_angle"></div>';
      }
    }
    else {
      var html = '<h2>Select</h2> <div class="angle-down cs_btn_angle"></div>';
    }
   document.querySelector("cs-btn").innerHTML = html;
  
}


