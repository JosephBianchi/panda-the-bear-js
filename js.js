var listItem = document.createElement('li');

var leftSpan = document.createElement('span');

var lastUpdated = document.createTextNode('Page last updated on');

var rightSpan = document.createElement('span');

var lastUpdatedInfo = document.createTextNode('date holder')


leftSpan.appendChild(lastUpdated);

listItem.appendChild(leftSpan);

rightSpan.appendChild(lastUpdatedInfo);

listItem.appendChild(lastUpdatedInfo)

var bioInfo = document.querySelector('.bio-info')

bioInfo.appendChild(listItem)
