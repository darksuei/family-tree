
//  * Creating a dynamic Input field for the family info
// */
console.log("a");
// const addbtn = document.querySelector(".add");

const body = document.querySelector("body");

const form = document.querySelector("form");

const input = document.querySelector(".inp-group");

var i = 0;
var j = 0;

// Function to remove input
function removeInput() {
    this.parentElement.remove();
}

// Function to add plus
function appendfirstplus() {
    const firstaddSign = document.createElement("a");
    firstaddSign.className = "addNew";
    firstaddSign.innerHTML = "&plus;";

    document.querySelector(".flex").appendChild(firstaddSign)
    firstaddSign.addEventListener("click", createNode)
}
appendfirstplus();

// Function to remove node
function removeNode() {
    this.parentElement.parentElement.remove();
}

//function to add input
function addInput() {
    const deleteNode = document.createElement("a");
    deleteNode.className = "deleteNode";
    deleteNode.innerHTML = "&times";

    const addSign = document.createElement("a");
    addSign.className = "add";
    addSign.innerHTML = "&plus;";


    const name = document.createElement("input");
    name.type = "text";
    name.name = "child";
    name.placeholder = "Enter the name";

    const spouse = document.createElement("input");
    spouse.type = "text";
    name.name = "childspouse"
    spouse.placeholder = "Enter spouse's name";


    const btn = document.createElement("a");
    btn.className = "delete";
    btn.innerHTML = "&times";

    const addNode = document.createElement("a");
    addNode.className = "addNode";
    addNode.innerHTML = "&plus;";

    const flex = document.createElement("div");
    flex.className = "flex";
    flex.id = (i++);

    input.appendChild(flex);
    flex.appendChild(name);
    flex.appendChild(spouse);
    flex.appendChild(btn);
    flex.appendChild(addNode);

    console.log("a");

    btn.addEventListener("click", removeInput);
    addNode.addEventListener("click", createNode);
};

var k = 0;
// function to add node
function createNode() {
    var i = 0;
    var l = 0;
    const deleteNode = document.createElement("a");
    deleteNode.className = "deleteNode";
    deleteNode.innerHTML = "&times";

    const containerNew = document.createElement("div");
    containerNew.className = `container ${i}`;
    containerNew.id = `generation${k}`;

    const wrap = document.createElement("div");
    wrap.className = "wrap";

    const title = document.createElement("h2");
    title.innerHTML = "Input Family Child";

    const addSignNew = document.createElement("a");
    addSignNew.className = "addNew";
    addSignNew.innerHTML = "&plus;";
    k++;
    // creating elements
    for (var i = 0; i < 5; i++) {
        window['name' + i] = document.createElement("input");
        window['name' + i].type = "text";
        window['name' + i].name = `child${i}`;
        window['name' + i].placeholder = "Enter the name";

        window['spouse' + i] = document.createElement("input");
        window['spouse' + i].type = "text";
        window['spouse' + i].name = `childspouse${i}`;
        window['spouse' + i].placeholder = "Enter spouse's name";

        window['btn' + i] = document.createElement("a");
        window['btn' + i].className = "delete";
        window['btn' + i].innerHTML = "&times";

        window['addNode' + i] = document.createElement("a");
        window['addNode' + i].className = "addNode";
        window['addNode' + i].innerHTML = "&plus;";

        window['flex' + i] = document.createElement("div");
        window['flex' + i].className = "flex" + 1;

        console.log(window['flex' + i]);
    }


    // Appending elements 
    const inpGroupNew = document.createElement("div");
    inpGroupNew.className = "inp-group" + (k) + " " + (l++);

    body.appendChild(form);
    form.appendChild(containerNew);
    containerNew.appendChild(wrap);
    wrap.appendChild(title);
    wrap.appendChild(addSignNew);
    wrap.appendChild(deleteNode);
    containerNew.appendChild(inpGroupNew);
    console.log("a" + containerNew.className);

    for (var i = 0; i < 5; i++) {
        inpGroupNew.appendChild(window['flex' + i]);
        flex1.appendChild(window['name' + i]);
        flex1.appendChild(window['spouse' + i]);
        //flex1.appendChild(window['btn' + i]);
        flex1.appendChild(window['addNode' + i]);
    }

    for (var i = 0; i < 5; i++) {
        window['btn' + i].addEventListener("click", removeInput);
        window['addNode' + i].addEventListener("click", createNode);
        deleteNode.addEventListener("click", removeNode);
    }


};


// addbtn.addEventListener("click", addInput);

