//Query Selectors
var productHoverDesktop = document.getElementById("product");
var productLinkDesktop = document.getElementById("product-link");
var companyHoverDesktop = document.getElementById("company");
var companyLinkDesktop = document.getElementById("company-link");
var connectHoverDesktop = document.getElementById("connect");
var connectLinkDesktop = document.getElementById("connect-link");


//Class name to be added to show the element
var className = 'show';

function onHover(element, targetClass, className) {
    
  element.addEventListener("mouseenter", e =>
    targetClass.classList.add(className)
  );
  element.addEventListener("mouseleave", e =>
    targetClass.classList.remove(className)
  );
}

//Calling the function
onHover(productHoverDesktop, productLinkDesktop,className );
onHover(companyHoverDesktop, companyLinkDesktop, className);
onHover(connectHoverDesktop, connectLinkDesktop, className);