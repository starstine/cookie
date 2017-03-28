/* Dropdown feature */
var list = ['default', 'style1', 'style2', 'style3'];
var listMenu = document.querySelector('select');

for (var i = 0; i < list.length; i++) {
  var listItem = document.createElement('option');
  listItem.value = list[i];
  listItem.textContent = list[i];
  listMenu.appendChild(listItem);
}

listMenu.addEventListener('change', function () {
  if (listMenu.value === 'default') {
        document.body.classList = '';
    } else {
        document.body.classList = listMenu.value;
          }
});

/* Collapsable tabs */
// function tabClicked() {
//   var tabButton = this.event.target;
//   var tabInner = tabButton.nextElementSibling;
//
//   tabHide(tabInner);
// }
//
// function tabHide(element) {
//   if (element.classList.contains('hide')) {
//     element.style.display = "block"
//     setTimeout(function () {
//       element.classList.remove('hide');
//     }, 250);
//   } else {
//     element.classList.add('hide');
//     setTimeout(function () {
//       element.style.display = "none"
//     }, 500);
//   }
// }

function hideTab () {
  var clickedOn = this.event.target;
  console.log($(clickedOn).next());
  $(clickedOn).next().fadeToggle(1000);
};
