const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
  removeBorder();
  removeShow();
  // Add border to current tab by dynamically adding css class
  this.classList.add('tab-border');
  //Grab content item from DOM based on tab-tem selected
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  //Add show class to selected tabcontentitem
  tabContentItem.classList.add('show');
}

function removeBorder() {
  tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
  tabContentItems.forEach(item => item.classList.remove('show'));
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));
