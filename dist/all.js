"use strict";

var textTitles = {
  categories: "ПЕРЕЛІК КАТЕГОРІЙ ТА ЗАМОВЛЕННЯ",
  goodsList: "СПИСОК ТОВАРІВ",
  arcticleInfo: "ІНФОРМАЦІЯ ПРО ТОВАР",
  buy: "КУПИТИ",
  buyed: "ТОВАР КУПЛЕНИЙ",
  edit: "РЕДАГУВАТИ",
  confirm: "ПІДТВЕРДИТИ",
  order: "МОЇ ЗАМОВЛЕННЯ"
};
var prices = [0, 1200, 1330, 5164, 4586, 1512, 4852, 5945, 4587, 4587];
var dataShop = [{
  name: "DELL",
  products: [{
    name: "DELL INSPIRION",
    description: "Dell Inspiron - це серія бюджетних та середнього класу ноутбуків від компанії Dell.",
    id: 1
  }, {
    name: "DELL LATITUDE",
    description: "Dell Latitude - це серія ноутбуків для бізнесу, виробництва компанії Dell.\
             Вони зазвичай орієнтовані на надійність, продуктивність та стійкість до зношування, що \
             часто є важливими факторами для корпоративних користувачів.",
    id: 2
  }, {
    name: "DELL XPS",
    description: "Dell XPS - це серія ноутбуків, вироблених компанією Dell. Вона є флагманським \
             рядом ноутбуків Dell і зазвичай призначена для користувачів, яким потрібна висока продуктивність\
              та якість.",
    id: 3
  }]
}, {
  name: "Apple",
  products: [{
    name: "MacBook Air",
    description: "MacBook Air - це серія ноутбуків від Apple, відомих своєю легкістю та тонким дизайном. \
             Вони зазвичай пропонують високу продуктивність для повсякденних завдань.",
    id: 4
  }, {
    name: "MacBook Pro",
    description: "MacBook Pro - це високопродуктивна серія ноутбуків від Apple. Вони зазвичай мають потужні \
             процесори, високоякісні дисплеї та інші передові технології.",
    id: 5
  }, {
    name: "iMac",
    description: "iMac - це серія настільних комп'ютерів від Apple, які відомі своїм елегантним дизайном та \
            високоякісними дисплеями.",
    id: 6
  }]
}, {
  name: "HP",
  products: [{
    name: "HP Pavilion",
    description: "HP Pavilion - це серія ноутбуків та настільних комп'ютерів середнього класу від HP, які орієнтовані \
           на широкий спектр звичайних завдань.",
    id: 7
  }, {
    name: "HP Envy",
    description: "HP Envy - це серія високоякісних ноутбуків від HP, відомих своїм стильним дизайном та високою продуктивністю.",
    id: 8
  }, {
    name: "HP EliteBook",
    description: "HP EliteBook - це серія бізнес-ноутбуків від HP. Вони зазвичай відрізняються високою надійністю, потужними \
           процесорами та опціями безпеки.",
    id: 9
  }]
}];
var catContainer = document.getElementById("catContainer");
var prodContainer = document.getElementById("prodContainer");
var descrContainer = document.getElementById("descrContainer");
var formContainer = document.getElementById("formContainer");
catContainer.textContent = textTitles.categories;
prodContainer.textContent = textTitles.goodsList;
descrContainer.textContent = textTitles.arcticleInfo;
var applyStyles = function applyStyles(element) {
  element.classList.add("block");
  if (element.tagName === "BUTTON") {
    element.classList.add("button");
  }
};
function createButton(container, text, clickHandler) {
  var buttonElement = document.createElement("button");
  buttonElement.textContent = text;
  applyStyles(buttonElement);
  container.appendChild(buttonElement);
  buttonElement.addEventListener("click", clickHandler);
}
var clearBlock = function clearBlock() {
  prodContainer.innerHTML = textTitles.goodsList;
  descrContainer.innerHTML = textTitles.arcticleInfo;
};
var clearFirstBlock = function clearFirstBlock() {
  catContainer.innerHTML = textTitles.categories;
};
var createOrderElement = function createOrderElement() {
  var orderElement = document.createElement("div");
  applyStyles(orderElement);
  orderElement.classList.add("order");
  orderElement.textContent = textTitles.order;
  catContainer.appendChild(orderElement);
  return orderElement;
};
document.getElementById("alldelete") // button delete all
.addEventListener("click", function (event) {
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    if (key.includes("order")) {
      localStorage.removeItem(key);
    }
  }
  location.reload();
});
document.getElementById("reload").addEventListener("click", function (event) {
  location.reload();
});
var orderElement = createOrderElement();
var findStorageOrder = function findStorageOrder(count) {
  for (var i = 0; i < count; i++) {
    if (localStorage.key(i).includes("order")) {
      return false;
    }
  }
  return true;
};
orderElement.addEventListener("click", function (event) {
  if (findStorageOrder(localStorage.length)) {
    alert("Замовлення відсутні");
    return;
  }
  clearFirstBlock();
  catContainer.style.display = "none";
  var accordionContainer = document.getElementById("accordion-container");
  accordionContainer.style.display = "block";
  function createAccordionSection(sectionTitle, sectionContent) {
    var button = document.createElement("button");
    button.id = idButton;
    button.classList.add("accordion");
    button.textContent = sectionTitle;
    var innerButton = document.createElement("span");
    innerButton.classList.add("delete-button");
    innerButton.textContent = "ВИДАЛИТИ";
    var panel = document.createElement("div");
    panel.classList.add("panel");
    var paragraph = document.createElement("p");
    paragraph.textContent = sectionContent;
    panel.appendChild(paragraph);
    accordionContainer.appendChild(button);
    button.appendChild(innerButton);
    accordionContainer.appendChild(panel);
    innerButton.addEventListener("click", function () {
      var closestElement = innerButton.closest(".accordion");
      var closestElementId = closestElement.id;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      }
      localStorage.removeItem(closestElementId);
      closestElement.remove();
    });
  }
  var idButton = "";
  function createAccordionSections(count) {
    for (var _i = 0; _i < count; _i++) {
      var key = localStorage.key(_i);
      var forValue = JSON.parse(localStorage.getItem(key));
      idButton = forValue.key;
      var orderInfo = "\u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043E ".concat(localStorage.key(_i).slice(0, -11), " \u0440\u043E\u043A\u0443. \u0426\u0456\u043D\u0430 \u0437\u0430 \u043E\u0434\u043D. ").concat(forValue.price, "$. \u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C ").concat(forValue.quantity, " \u0448\u0442. \u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0441\u0443\u043C\u043C\u0430 \u0434\u043E \u0441\u043F\u043B\u0430\u0442\u0438 ").concat((Number(forValue.quantity) * Number(forValue.price)).toString(), " \u0434\u043E\u043B. \u0421\u0428\u0410");
      createAccordionSection(orderInfo, forValue.description);
    }
  }
  createAccordionSections(localStorage.length);
  var acc = document.getElementsByClassName("accordion");
  var i;
  for (i = 0; i < acc.length; i++) {
    // from w3schools.com + css + html accordion
    acc[i].addEventListener("click", function () {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");

      /* Toggle between hiding and showing the active panel */
      try {
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      } catch (error) {
        console.log("Во время удаления order, при открытом аккардионе", error);
      }
    });
  }
});
dataShop.forEach(function (category) {
  var categoryElement = document.createElement("div");
  applyStyles(categoryElement);
  categoryElement.textContent = category.name;
  catContainer.appendChild(categoryElement);
  categoryElement.addEventListener("click", makeCategory);
});
function makeCategory(event) {
  var currentCategory = dataShop.find(function (category) {
    return category.name === event.target.innerText;
  });
  clearBlock();
  currentCategory.products.forEach(function (product) {
    var productElement = document.createElement("div");
    applyStyles(productElement);
    productElement.textContent = product.name;
    prodContainer.appendChild(productElement);
    productElement.addEventListener("click", productSelect(product));
  });
}
var jsonProduct = "";
var jsonIdProduct = "";
var jsonDescription = "";
function productSelect(product) {
  return function (event) {
    descrContainer.innerHTML = textTitles.arcticleInfo;
    var descriptionElement = document.createElement("div");
    applyStyles(descriptionElement);
    descriptionElement.textContent = product.description;
    jsonDescription = product.description;
    jsonProduct = product.name;
    jsonIdProduct = product.id;
    descrContainer.appendChild(descriptionElement);
    createButton(descrContainer, textTitles.buy, function (event) {
      formContainer.style.display = "block";
      clearBlock();
    });
  };
}

//  script for form

function formWarehouse() {
  var checkBox = document.getElementById("warehouse");
  var wareHouse = document.getElementById("newPost");
  checkBox.addEventListener("input", function () {
    if (!checkBox.checked) {
      wareHouse.disabled = false;
      wareHouse.placeholder = "Введіть номер складу";
      wareHouse.value = "";
    } else {
      wareHouse.disabled = true;
      wareHouse.placeholder = "Заблоковано";
      wareHouse.value = "";
    }
  });
}
formWarehouse(); // check box для склада Новой почты

var inputName = document.getElementById("name");
var inputSurname = document.getElementById("surname");
var inputFatherName = document.getElementById("father-name");
function makeUpperCaseForName(input) {
  input.addEventListener("input", function () {
    input.value = input.value.toUpperCase();
  });
}
makeUpperCaseForName(inputName); // uppercase для ФИО
makeUpperCaseForName(inputSurname);
makeUpperCaseForName(inputFatherName);
(function () {
  var rangeInput = document.getElementById("customRange2");
  rangeInput.addEventListener("input", function () {
    document.getElementById("rangeValue").textContent = rangeInput.value; // бегунок формы обновляем realtime value
  });

  var actualForm = document.getElementById("buyerform");
  actualForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var formData = new FormData(actualForm);
    var string = "";
    formData.forEach(function (value, key) {
      string += "<div class=\"formarray\">".concat(key, ":&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;").concat(value, "</div>");
    });
    document.getElementById("formPost").innerHTML = "<div class=\"formarray\">I\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u043F\u0440\u043E \u0442\u043E\u0432\u0430\u0440 \u0442\u0430 \u043F\u0440\u043E \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0443<br>".concat(string, " </div>");
    deleteButtons();
    createButton(formContainer, textTitles.edit, function () {
      enableFormElements();
    });
    var dateForJson = function dateForJson() {
      var now = new Date();
      var year = now.getFullYear();
      var month = now.getMonth() + 1;
      var day = now.getDate();
      var hour = now.getHours();
      var minute = now.getMinutes();
      var second = now.getSeconds();
      month = month < 10 ? "0" + month : month;
      day = day < 10 ? "0" + day : day;
      hour = hour < 10 ? "0" + hour : hour;
      minute = minute < 10 ? "0" + minute : minute;
      second = second < 10 ? "0" + second : second;
      var formattedDate = "".concat(day, " ").concat(month, " ").concat(year).concat(hour).concat(minute).concat(second, "order");
      return formattedDate;
    };
    var createJsonFormData = function createJsonFormData() {
      var jsonFormData = {};
      jsonFormData.key = dateForJson();
      jsonFormData.id = jsonIdProduct;
      jsonFormData.quantity = actualForm["quantity"].value;
      jsonFormData.product = jsonProduct;
      jsonFormData.date = jsonFormData.key.slice(0, -11);
      jsonFormData.price = prices[jsonIdProduct].toString();
      jsonFormData.description = "\u0417\u0430\u043C\u043E\u0432\u043D\u0438\u043A: ".concat(actualForm["name"].value, " ").concat(actualForm["surname"].value, " ").concat(actualForm["father-name"].value, ". \n        \u041C\u0456\u0441\u0442\u043E \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438: ").concat(actualForm["city"].value, ". \u0421\u043F\u043E\u0441\u0456\u0431 \u043E\u043F\u043B\u0430\u0442\u0438: ").concat(actualForm["paymentmethod"].value, ". \u0422\u043E\u0432\u0430\u0440: ").concat(jsonDescription);
      if (actualForm["number-of-post"].value) {
        jsonFormData.description += " \u0421\u043A\u043B\u0430\u0434 \u041D\u043E\u0432\u043E\u0457 \u043F\u043E\u0448\u0442\u0438 \u0434\u043B\u044F \u043D\u0430\u0434\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u2116 ".concat(actualForm["number-of-post"].value, ".");
      }
      if (actualForm["comment"].value) {
        jsonFormData.description += " \u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440:  ".concat(actualForm["comment"].value, ".");
      }
      return jsonFormData;
    };
    createButton(formContainer, textTitles.confirm, function () {
      var jsonFormData = createJsonFormData();
      localStorage.setItem(jsonFormData.key, JSON.stringify(jsonFormData));
      document.getElementById("buyerform").reset();
      location.reload();
    });
    for (var i = 0; i < actualForm.elements.length; i++) {
      //   все elements form Off
      actualForm.elements[i].disabled = true;
    }
  });
  function deleteButtons() {
    // button edit and approve for form
    var buttons = document.querySelectorAll("button");
    buttons.forEach(function (button) {
      if (button.textContent.trim() === "РЕДАГУВАТИ" || button.textContent.trim() === "ПІДТВЕРДИТИ") {
        button.remove();
      }
    });
  }
  function createButton(container, text, clickHandler) {
    var buttonElement = document.createElement("button");
    buttonElement.textContent = text;
    applyStyles(buttonElement);
    container.appendChild(buttonElement);
    buttonElement.addEventListener("click", clickHandler);
  }
  function enableFormElements() {
    // все elements form ON
    for (var i = 0; i < actualForm.elements.length; i++) {
      actualForm.elements[i].disabled = false;
    }
  }
<<<<<<< HEAD
})();
=======
})();
>>>>>>> 0050dbb (add js babel)
