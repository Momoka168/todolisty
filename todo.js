// Le code JavaScript va ici

var storage = [];
var liId = 0;
var spanId = 0;
var noteBtnClicked = 0;

(function () {
    if (getItemOnLocalStorage('tasks')) {
        var parsed = JSON.parse(getItemOnLocalStorage('tasks'));
        var max = 0;
        for (var i = 0; i < parsed.length; i++) {
            creatElement(parsed[i]);
            if (parsed[i].id > max) {
                max = parsed[i].id;
            }
        }
        storage = parsed;
        liId = max;
        spanId = max * -1;
    }
})();

var domSections = document.getElementsByClassName('tasksSection');
for (var i = 0; i < domSections.length; i++) {
    addEventsToSection(domSections[i]);
}

function addEventsToSection(section) {
    section.addEventListener('dragover', function (event) {
        event.preventDefault();
    });

    section.addEventListener('drop', function (event) {
        event.preventDefault();
        if (event.target.className == 'tasksSection') {
            var data = event.dataTransfer.getData('text/plain');
            var draggedElement = document.getElementById(data);

            event.target.appendChild(draggedElement);

            var liSpanId = ((parseInt(data)) * -1) + '';
            var elementObj = {
                id: parseInt(data),
                value: document.getElementById(liSpanId).innerText,
                parent: event.target.id
            };
            storage.push(elementObj);
            setItemOnLocalStorage('tasks', JSON.stringify(storage));
        }
    });
}

document.getElementById('submit').addEventListener('click', function (e) {
    if (document.getElementById('userInput').value) {
        e.preventDefault();
        var objData = {
            id: ++liId,
            value: document.getElementById('userInput').value,
            parent: 'inProgress'
        };
        creatElement(objData);
        setItemOnLocalStorage('tasks', JSON.stringify(storage));
        document.getElementById('userInput').value = '';
    } else {
        alert('There is no data to be added');
    }
});

function creatElement(objData) {
    var obj = {
        id: objData.id,
        value: objData.value,
        parent: objData.parent
    };

    var list = document.createElement('li');
    document.getElementById(obj.parent).appendChild(list);
    createListChildren(list, objData.id);
    document.getElementById(spanId + '').innerText = obj.value;
    list.id = objData.id;
    list.setAttribute('draggable', true);

    list.addEventListener('dragstart', function (event) {
        event.dataTransfer.setData('text/plain', event.target.id);
        event.dataTransfer.effectAllowed = 'move';

        for (var i = 0; i < storage.length; i++) {
            if (storage[i].id == event.target.id) {
                storage.splice(i, 1);
            }
        }
    });

    storage.push(obj);
}

function createListChildren(list, id) {
    var paragraph = document.createElement('p');
    var spanCreated = document.createElement('span');
    var icon = document.createElement('i');
    var uList = document.createElement('ul');
    var note = document.createElement('button');
    note.innerText = 'Notes';
    var del = document.createElement('button');
    del.innerText = 'Delete';

    spanCreated.id = --spanId;
    icon.className = 'fas fa-angle-down';
    icon.id = 'i' + id;
    uList.className = 'listOptionsWrapper';
    note.className = 'notes';
    del.className = 'delete';

    icon.addEventListener('click', handleIconClick);
    note.addEventListener('click', handleNoteBtnClick);
    del.addEventListener('click', handleDeleteBtnClick);

    list.appendChild(paragraph);
    list.appendChild(uList);
    paragraph.appendChild(spanCreated);
    paragraph.appendChild(icon);
    uList.appendChild(note);
    uList.appendChild(del);
}

function setItemOnLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function getItemOnLocalStorage(key) {
    return localStorage.getItem(key);
}

function handleIconClick(e) {
    var uList = document.getElementById(e.target.id).parentElement.nextSibling;
    if (e.target.className == 'fas fa-angle-down') {
        e.target.className = 'fas fa-angle-up';
        uList.style.display = 'block';
        uList.style.zIndex = '1';
    } else {
        e.target.className = 'fas fa-angle-down';
        uList.style.display = 'none';
        uList.style.zIndex = '0';
    }
}

function handleNoteBtnClick(e) {
    var icon = e.target.parentElement.parentElement.children[0].children[1];
    icon.className = 'fas fa-angle-down';
    var uList = e.target.parentElement;
    uList.style.display = 'none';
    uList.style.zIndex = '0';

    noteBtnClicked = e.target.parentElement.parentElement.id;

    for (var i = 0; i < storage.length; i++) {
        if (storage[i].id == noteBtnClicked && storage[i].note) {
            document.getElementById('description').value = storage[i].note;
        }
    }

    document.getElementById('descrpContainer').style.animationName = 'show';
    setTimeout(function () {
        document.getElementById('descrpContainer').style.maxHeight = '90vh';
    }, 1800);

    document.getElementsByTagName('main')[0].className = 'mainAfter';
}

function handleDeleteBtnClick(e) {
    var confirmation = confirm('Do you want to delete this task?');
    if (confirmation) {
        var targetId = e.target.parentElement.parentElement.id;
        var newStorage = [];

        for (var i = 0; i < storage.length; i++) {
            if (storage[i].id != targetId) {
                newStorage.push(storage[i]);
            }
        }
        storage = newStorage;
        setItemOnLocalStorage('tasks', JSON.stringify(storage));

        document.getElementById(targetId).remove();
    }
}

document.getElementById('cancel').addEventListener('click', cancelNoteHandler);
document.getElementById('save').addEventListener('click', saveNoteHandler);

function cancelNoteHandler() {
    setTimeout(function () {
        document.getElementById('description').value = '';
    }, 2000);

    document.getElementById('descrpContainer').style.animationName = 'hide';
    setTimeout(function () {
        document.getElementById('descrpContainer').style.maxHeight = '0';
    }, 1800);

    document.getElementsByTagName('main')[0].className = '';
}

function saveNoteHandler() {
    for (var i = 0; i < storage.length; i++) {
        if (storage[i].id == noteBtnClicked) {
            storage[i].note = document.getElementById('description').value;
        }
    }
    setItemOnLocalStorage('tasks', JSON.stringify(storage));

    cancelNoteHandler();
}
