var,let are same but let is blocked-scoped(cannot access local variable(variable inside function) outside the funciton)
MODERN JAVASCRIPT(ie ecmascript 6) we don't use var

⭐TO DISABLE BUTTON⭐
<button id="" disabled>click</button>


for(const child of element.children)
if("mango" in fruits)


🧡object literal
book.author
OR
book['author name']    //use it when there is space in name bcoz you cannot use book.author name

book['price'] = 34


🧡FUNCTION
function add(){
    return num1+num2
}

const adder = function (){
    return num1+num2
}
adder()                 //calling

🟠const multiply = (a,b)=> a*b;       //no curly braces and no need to write return
multiply(3,5)


💛DESTRUCTURING
const {name,age} = vaibhav;         //vaibhav is object literal {name:"renu",age:39}
const [first,second,third] = [1,2,3]


💛SWAPPING
[a,b] = [b,a]

alert("you cannnot do this")
let iccha = alert("are you sure?")


setTimeout(()=>{                                    //after 3+ seconds it logs it
    console.log("hi")
},3000)  

🧡function add(){
    return 1+2
}
const vaa = add
vaa()                            ##it will print 3


🧡const vai = "vaibhav"
vai.replace("a","b")            #not a good practice bcoz original gets Changed
const ren = vai.replace("a","b")            #insted do this


🧡//PRIMITIVE(String,boolean,Number,undefined) AND OBJECT
const var = new String("vaibhav")     //THIS IS OBJECT
const var = "vaibhav"                  //THIS IS STRING

🧡//Date object
const date = new Date();
date.now()
date.getDate()
date.getMonth()                           //starts from jan==0
date.getFullYear()
date.toDateString()

🧡//RegExp
const vai = new RegExp("")
//or
const regx = /[a-z]+/       //checks small case first word as +
vai.test(given email or something that we need to check)
//for eg
const contains_g = new RegExp("g")
const var1 = "hi this is good"
const var2 = "hi this is soodf"
contains_g.test(var1)                         //gives true as contains g
contains_g.test(var2)                           //give false
//or you can do is 
/[g]/.test(var1)                  //this too works
//ADVANCED
/[a-zA-Z0-9]/.test()
/./ ===equivalent to /[a-zA-Z]/
/\d/ ===equivalent to /[0-9]/
/^/                              //represents begining of the string
/^f/.test(var1)              //it checks whether var1 starts with f or not
/f/.test(var1)              //now it checks whether var1 contains f or not
/f$/.test(var1)              //now it checks whether var1 ends with f or not
/(vaibhav|sanket)/.test(var1)    //now it checks whether var1 have vaibhav or sanket

//exec
/[a-z]/.exec(var1)     // gives h
/[a-z]+/.exec(var1)     // gives "hi" first word it is as no space so no more words
/[a-z ]+/.exec(var1)    //give whole string 
/[a-z ]+/.exec(var)  is equivalent to /.+/.exec(var)

//suppose we have paragraph stored in var and we need to find someone's email then do this
/[a-z ]+@gmail.com/.exec(var)
/.@gmial.com/.exec(var)

//Advanced
password.match(regularexpression)         //regularexpression= /^[0-9]{4}$/    which is exactly 4numbers only
// or we can use    /^\d{4}|\d{6}$/.test(password)


// 🧡string methods
//replaceAll(CASE SENSITIVE), toUpperCase, substring(startindex,endindex), .trim()                            
const var1 = "my dog is dirty and he is bad Dog"
//we need to replace all dog with cat but we have capital and small Dog
const var3 = var1.replaceAll(/[dD]{1}og/g/ , "cat")   
//here we told that in [] small d and D from both any can come for only one time so we gave{1} occurance and followed by og and /g means to do this on all so global /g is used

const var1 = "vaibhav"
const var2 = var1[0].toUpperCase()+var1.substring(1,var1.length)


//🧡 String Method
lastIndexOf()
replace('a','b')
includes()
typeof arr              //gives object
concat()
.length

Number("45")          
+num2                       //converts string to number
parseInt("45px")            //converts only 45 not px
parseFloat("45.45px")
.toFixed(2)                 //2 means two decimal places la round off karte  
.toExponential()
.isNaN()                //not a number

String(45)
num1.toString()


//🧡 Binary to Decimal
const data = '1011'
console.log(parseInt(data,2))    //2 is base parse int means converting to integer


//🧡 Math
Math.floor()
Math.ceil()
Math.PI()
Math.abs(-60)               //gives absolute value of -60 that is 60
Math.round()
Math.min()
Math.max()
Math.random()

//🧡 Array creation
const arr = new Array(5)
const arr = Array.of(5)
CLONING Array
const arr2 = Array.from(arr1)   //even though arr1 is not array it will be converted to array

//🧡 Array Method
Push(4,5,6)                         //add element at end
pop                                 //removing last element
shift                               //removing first element
unshift                             //adding element at fromt 
slice(first_index,last_index)       //same like substring,python
splice(index,from index till where, string or number to be replaced with)
splice(3,1,"hi")
splice(indexto remove, 1)       //splice returns the element that is been removed 1 means only that index to be removed 238 ani 239 video bg
splice(index-at-which-new element to be placed, 0 , new element)     //0 means no.of elements to remove but we are not removing
.length
.join("")
indexOf("mango")
findIndex((x) => { 
    return x.lastname == parsewar})                        //used to search in object literal we give function in brackets
    
includes("orange")

arr1.foreach((x,y)=>{              //x=item,y=index   or .foreach(fun(x)=>{sum+x})
    console.log(x)
})

const arr2 = arr1.map(fun(x)=>{                  //map and foreach are same but map() returns new array does not change original array
    return x+3
})

objectliteral.map((x) =>{
    x.category == "vai"
    return x
})

.filter((x)=>{
    return x.name;          //in object literal
    return x%2 ===0;        //creates array of even no.
})
.reduce((x,sum)=>{           //we pass two arguments
    return sum+x                 //0 indicates start array from index 0
},0)

//🧡 2D-Arrays


isEqual()

//🧡 Error 
ReferenceError      //undeclared variable printing gives this error
SyntaxError         //
TypeError           //applying toUpperCase on number

//🧡 Error Handling
try{
    const var = 36
    var.toUpperCase()
    console.log(error instanceof TypeError)   // we are saying error can be example of TypeError
    console.log(error.message())
}
catch{
}

////🧡 
//1) Nan(not-a-number)
let var1 = "vaibhav is good"
let var2 = Number(var1)                //give NaN

// 2) undefined
let var2 = undefined                  //not initiated


//🧡
in array if you want to remove an element do 
item !==arrItem;

//🧡 foreach(item,index,originalarray)

//🧡 SORT01258////////////
arr.sort((first_no,second_no) => second-first).reverse().join("")

//🧡 
window.alert("alerted")
window.confirm("are you sure?")
window.location()
localStorage.setItem("roll",30)
window.onscroll = function(){
    console.log("bye")
}

//💥💥 creating HTML( <p class="some-class">hi vaibhav</p>) element in javascript 
const elementNode = document.createElement("p")
const textNode = document.createTextNode("content")
const attributeNode = document.createAttribute("class")

//now put textNode in <p>
elementNode.appendChild(textNode)

//write class name in attribute
attributeNode.value = "some-class"

//now assigning this attribute in <p> tag
elementNode.setAttributeNode(attributeNode)

//now finally append this to document
document.body.appendChild(elementNode)

//💥💥 BUTTON LA FUNCTIONALITY ADD KARAYLOT
const btn = document.querySelector("#butt-1");
btn.addEventListener("click",addparagraph);

//OR
btn.onclick = addparagraph;

//OR inline deu shakto
<btn onclick= addparagraph()> in react onclick={addparagraph}

function addparagraph(){
    }

//IF WE WANT TO CREATE ELEMENT i.e paragraph on clicking
const element = document.createElement('p')
element.textContent = "hi this is vaibhav"      //like innerText,innerHTML
document.body.appendChild(element)

//IF WE WanT TO SELECT SECOND PARAGRAPH
const element = document.querySelector("p").item(1)  //index starts from 0
//now we have to insert paragraph before this 
const newp = document.createElement("p");
newp.textContent = "vaibhav is good"
//now use parent div's class and tell parent you want to insert newp before second p
const parent = document.querySelector(".main-body");
parent.insertBefore(newp,element);         //parent la sangayla ki elemnt chya adhi newp la insert kr


//We can check the type of selected element by
parent.nodeType()

//
imageElement.setAttribute('src','linkurl')

//
const random-image-url = getRandomData('memes')   //we have memes data from which we want to take randomly

//if image element already there check that and if yes use innerhtml and make it null
imageElement.innerHtml = ""

//SUPPOSE WE HAVE OBJECT LITERAL named object WITH TWO fields only question and answer
const questn= object.question
const answers= object.answer
//INSTED OF ABOVE WE CAN DO IS
const {questn,answers} = object;

//TO HIDE ELEMENT THAT WE CREATE 
pelement.hidden = True;


💥STRING = immutable

💛PASSED BY Reference
person = {}
person1 = person    //person1 points to person only
// now if you change person1 it will change person object literals also as reference

💛Object.assign
students.map((student,index)={
    return Object.assign({},student,update[index])      //update = [{grade:'a'},{grade:'b'}]
})

💛.find                     //returns the object
patients.find((patient)=>{
    patient.disease==cold;
})

💛.some()    and .every()                  //returns true or false if object literal is available then  .every() can be used to find whether all students are status is passed or not
patients.some((patient)=>{
    patient.disease==cold;
})


💛DOM (interface betwn web document and script used for dynamically styling)
ATTRIBUTE node (means class=) , ELEMENT node (means <html>), COMMENT node, document node
window.innerHeight, window.innerWidth, window.navigator, window.screen, window.location, window.alert(), window.confirm(), window.open()
//WINDOW MADHE  DOCUMENT AST ANI DOCUMENT MHNJE HTML
document.body
document.getElementById('head') //document he window-object ch method aahe.  our whole html code is window.document
querySelector('.home')             //returns only first match  
querySelector(".home [datarating='3.5']")
querySelectorAll('img')             //it will select all matches and that are named nodelist we can convert it to array using array.from()and then use map() or you can use forEach method  
document.getElementById("home").querySelector('house')



💛child means everything under parent 
💛children means only elements. not comments and not text 
const parentel = document.querySelector('#parent')
parentel.childNodes.forEach((node)=>console.log(node.nodeType))
console.log(parentel.childNodes)    //gives everything inside parent
console.log(parentel.children)      //give only elements of parent 

💛accessing parent and child elements 

const parent = document.querySelector('#parent')
//but we want to acces dadaji
console.log(parent.parentNode)          //parentNode is function
console.log(parent.firstChild)          //firstChild is function here you will get value
console.log(parent.firstElementChild)   //here you will get element i.e <p> or <h1>


💛getAttribute, setAttribute
user.setAttribute('data-role','teacher')  //data-role is already a attribute in element teacher is new setting attribute
user.getAttribute('data-role')          //you will directly get the value of that attribute
//OR WE CAN DIRECTLY DO
user.dataset.role

💛DOM traversing (going top down in html document)
user.parentNode
user.childNodes
user.childNodes[0]
button.previousSibling;   //gives previous bhau
button.previousElementSibling;   //gives previous bhau
button.nextSibling;   //for text   .nodeType will be 3

💛METHODS ON ELEMENT
paragraph.innerHtml ='<h3>heading</h3>'
paragraph.innerHtml +='<br>more content will be conntinuoously added</br>'
.innerText
.textContent = "vaibhav is good boy"
blog.style.color='red';

💛CeateElement(), appendChild()
appendChild()                       //appends at last

element.setAttribute("class","task");
OR
element.className="task";               //works same very very important

const text =element.createTextNode("vaibhav programmer")
element.appendChild(text)


💛insertBefore()

💛replaceChild()    //271 video   imp it should be direct child of parent
oldelement.parentNode.replaceChild(oldelements id ,newelement content)

💛removeChild()
parentelement.removeChild(li);      //li is child we wanted to remove we got it from for(li of parent.children)

💛classList                         //suppose kahi classes la styles aahe css madhe pn t classes apan create kela nahi so classlist can be used to create the class attribute
pelement.classList.add('bold')       //here bold is a class value and adding this attribute class to element 
pelement.classList.add("bold","italic")       //here bold is a class value and adding this attribute class to element 
pelement.classList.remove("bold","italic")       //here bold is a class value and adding this attribute class to element 
pelement.classList.toggle("italic")       //here bold is a class value and adding this attribute class to element 
pelement.classList.contains("italic")       //returns true if class has value italic
pelement.classList.replace("old class name", "new class name")       //returns true if class has value italic

💛EVENTS 
onclick=onclickhandler()                 //you can give attribute in html or can give in javascript as element.onclick = function click(){} or    
ondbclick 
onmouseover
mouseout
mouseenter
mouseleave

onkeydown
onkeyup

onsubmit            //<form onsubmit="onsubmit()>"
onfocus             //<input onfocus="">
onblur


💛 addEventListener
element.addEventListener("click",function(){}, (e))    here click is type we don't write on and you can use arrow function ()=>{}
element.addEventListener("click",add, (e))    

💛 removeEventListener       //ekda apan tv ch button channel 3 dabla ani channel ala ata azhun ekda dabla tech 3 tr kahi zhala nahi pahije
FAKTA FUNCTION MADHE LAv 
function removeAlert(){
    element.removeEventListener('click',showAlert);
}
button.addEventListener("click",removeAlert)


💛💛 281,282  event propogation
event.stopPropagation()              // inner madhe jr he lavla tr alret la ekda ok kela ki parent ch alert yet nahi titch stop houn jata

💛event deligation = use only one addEventListener when you want to add to multiple childs 
document.getElementById("itemList").addEventListener("click",function(e){
    const clickedon = e.target;     //e.target will return whole element(i.e li) you clicked

    if(clickedon.tagName == 'LI');{
        const itemnumbre = clickedon.getAttribute("data-item")          //returns value of attribute data-item
        console.log(itembumber)
    }
})

💛💛 285 ekda bg imp ae Creating Custom Event like click,buttonup

const zhoop = new CustomEvent("zhoop",{
    bubbles:true,
    cancelable:true,
    detail: {text:""},
})
//now
document.addEventListener("zhoop",function (){})


💛💛 ASYNCHRONOUS PROGRAMMING
// video chalu houstr scroll karto kahi imp bhet te ka  mhanje tasks independent work hotay ani 
//used in API calls and DOM manipulation
//does not blocks current execution


//non blocking code
💛💛setTimeout   //function will executed after some delay
     setInterval  //after particular delay function will executed repetedly
let counter = 0;
const temp =setInterval(()=>{
    counter++
    console.log(counter)
    if(counter>5){
        clearInterval(temp)             //to stop interval
    }
},3000)

//WE CAN STOP THIS INTERVAL 

💛💛CALLBACK()

fucntion callback(){        //he call back function
    console.log("hi")
}
function HOF(callbackwala){ //he highorder function karan hena callback function as a parameter gheto
    callbackwala()
}
HOF(callback)       //fuction calling


💛💛Error
const divideNumbers= (dividend,divisor,callback)=>{
    
    if (divisor == 0) {
        callback(new Error("you cannot divide by 0",null))        //funciton is callback function first arguement is error message and second is actual result
    }
    else{
        callback(null, dividend/divisor)
    }
}
divideNumbers(10,2, (error,result)={        //calling function
    if(error){
        console.log(error.message)
    }
})



callback funciton made 2 parameters (error,result)


💛💛PROMISE 
//result of async operation
//they are processed by web-api either it is fullfilled or rejected or pending
cost simplepromise = new Promise((resolved,rejected)=>{
    const success = true;
    if(success){
        resolved('the promise operation is successful')
    }
    else{
        rejected("the promise operation failed")
    }
})
simplepromise.then((result)=>{console.log(result)}).catch((err)={console.log(err)}).finally(()={console.log("this will always be printed")})
🌼🌼🌼HERE .then will get result from resolved() and .catch will get err from rejected()

ANOTHER EXAMPLE OF EVEN Number
const isevennumber(number){
    return new Promise((resolve,reject)=>{
        if(number%2==0){
            resolve('number is even')
        }
        else{
            reject('number is not even')
        }
    })
}
isevennumber(4).then((result)=>{console.log(result)}).catch((err)=>{console.log()})

💛💛
Promise.all         //wait till all the promises are resolved
Promise.race        //proceeding when even one promise is resolved 


💛💛async await     //async means the function is going to take time  
//await means waiting for response or promise
//creating promise
async function waitAndRun(value){
    return new Promise((resolve,reject)=>{
        resolve(value)
    })
}
//usage of promise
const handleOutcome = async()=>{
    try{
        const result = await waitAndRun(2)
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
//always try to wrap in try catch block


306,307
💛💛AJAX💛💛    //asynchronous javascript and xml allows to send/fetch data using xmlHttp request from server without full page reload 
//we are going to use fetch or axios api for request better than XMLHttpRequest
💛using fetch
const fetchdata2 = async ()=>{
    try{
        const result = await fetch(url);
        return result.json()
    }
    catch(error){
        console.log(error);
    }
}

//calling promise
fetchdata2().then((result)=>{console.log(result)})

💛//using axios     //profit is you dont need to convert the data to json //go to axios cdnjs copy
const fetchdata2 = async ()=>{
    try{
        const data = await axios.get(url)
        console.log(data)
    }
    catch(error){
        console.log(error);
    }
}

//calling promise
fetchdata2()


💛💛API💛💛   //set of rules for communication , connect or get data to frontend from other application backend therefore communicate with different application
endpoint = it is url of server from where we are getting data
💔💔rapid api website is bank of api

💛💛LOCAL STORAGE💛💛   
localStorage.setItem("name","vaibhav")
localStorage.getItem("name")
localStorage.removeItem("name")
JSON.stringify(data)                            //setItem kartana JSON.stringify() kar
JSON.parse(localStorage.getItem('tasks'))       //get kartana JSON.parse



//fetch api promise return karte mhnun .then kela pn result.json() pn promise return karte mhnun azhun ekda .then kela
fetch(url).then((result)=>{
    result.json().then(data)=>{console.log(data)}});
//OR
const fetchpost = async()=>{
    try{
        const result = await fetch(url)
        const data = result.json()
    }
    catch(error){
        console.log(error)
    }
}
fetchpost()


💛💛COMMANDS💛💛
// -Navigation:
// - `pwd': Print current working directory.
// - `cd <directory_name>`: Change to specified directory.
// - `cd ..`: Navigate up one directory.
// - `cd`: Navigate to home directory.

// - File Management:
// - `Is` (Linux/macOS)/ `dir` (Windows): List current directory contents.
// - `touch <filename>` (Linux/macOS): Create empty file.
// - `mkdir <directory_name>`: Create directory.
// - `rm <filename>` (Linux/macOS)/ `del <filena e> (Windows): Delete file.
// - `rm-directory_name>` (Linux/macOS)/ `rmdir /s <directory_name>` (Windows): Delete directory and contents.
// - `cp <source> <destination>` (Linux/macOS)/ `copy <source> <destination>` (Windows): Copy files.
// - `mv <filename> <folder name>` (Linux/macOS)/ `move <source> <destination>` (Windows): Move or rename files.

💛💛Nodejs💛💛 //not framework it's environment server side javascript running just because V8-engine(compiles js code into machine code using jit. it optimizes code and memory allocation)
node app.js        //to run file
node -v             //for version
🔰nodejs repl(read eval print loop)🔰   
🔰Event loop🔰            //always checks if there is any code in callback queue if yes then check callstack empety if yes then push code to callstack for execution   
🔰node api🔰                            //allows to perform funcitons such as http request   
🔰npm🔰                                 //for libraries   
🔰node js single threaded🔰            //tasks performed on one thread concurrent 

🔰nodejs global objects and methods🔰  //
// console.log(__filename)                  //in cmd we use ls
// console.log(__dirname)                  //in cmd we use pwd
// setTimeout()
// setTimeinterval()

🔰nodejs process objects and methods🔰  //
// - `process.exit()`: Terminate Node.js process.
// - `process.cwd()': Get current working directory.
// `process.chdir(directory)`: Change working directory.
// process.nextTick(callback)`: Execute callback on the "next tick".
// process.hrtime(): Get high-resolution timestamp.
// process.memoryUsage(): Retrieve memory usage info.
// - `process.uptime()`: Get process runtime in seconds.
// - `process.kill(pid, [signal])`: Send signal to a process (default is SIGTERM
💔💔 ENVIRONMENT (mhnje apla appication produciton madhe ahe ka development madhe aahe he kalte)
const appEnvironment = process.env.APP_ENV || development;
console.log(`our application is running on ${appEnvironment}`)         //ata run kr kela ki terminal open hoil tith jr tula development to produciton karaych asal tr terminal madhe lihi App_Env = produciton node app
💔💔 TO EXIT THE PROCESS
if(process.env.Node_Env !=='production'){
    console.log("THIS SHOULD ONLY RUN IN PRODUCTION")
    process.exit()
}

//340,341
🔰MODULES AND REQUIRE🔰    //modules(modules can be file containing code ) require(reuqire is a funciton used to import modules in other modules)
//modules are exported using (module.exports=functionname or export)  and catch that in other file using   (const name = require(filepath wehre we written export) or i+mport )

//🟠🟠ecmascript based =example using module.exports
module.exports = {
    add:function_name1;
    subtract:function_name2;
}
//now we want to catch it 
cosnt {add,sub} = require("filepath from wehre we exported")


//🟠🟠common js based =example using only export we have export default  and export 
export default funciton(name){
    return name;
}
//now in other file where we want to catch
import greet from "filepath from where we export default"

//when you export everything  you can catch everything catching code is
import * as utils from "filepath fro wehre we export everything"
utils.add(3,4)

🤢API🤢  //go to nodejs website => documentation=>api
⭐file system (fs) api⭐
const fs = require("fs")                //fs is module in nodejs so we required it
//READING sychronous way
const data = fs.readFileSync("path of text file").toString();         //sychronous and      tostring because it will read bit by bit  
//Asychronous way
const dataa = fs.readFile("path of text file", "utf-8", (error,data)={
    if(error){
        console.log(error)
    }
    else{
        console.log(data)
    }
})
//WRITING
fs.writeFile("path of file to write","some new content", (error)=>{             //you can use .appendFile
    if(error){
        console.log(error)
    }
    else{
        console.log("content is writen")
    }
})
//CHECKING IF FILE EXIST
fs.access("filepath of file we want","fs.constants.F_OK",(error)={
    if(error){
        console.log(error)
    }
    else{
        console.log("file exists")
    }
})
//DELETE/UNLINK THE FILE
fs.unlink("./new.txt",(error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log("deleted")
    }
})
//USING PROMISES
const fs = require("fs/promises");
try{
    const data = fs.readFile("./index.txt","utf-8");
    console.log(data)
}
catch(error){
    console.log(error)
}
⭐operating system (os) api⭐
const os = require("os")                //os is module in nodejs so we required it
os.arch()                             //returns cpu archicture
os.cpus()                             //cpu info
os.freemem()                           //in bytes
os.totalmem()                           //in bytes
os.homedir()                           //
os.hostname()                           //
os.loadavg()                           //
os.networkInterfaces()                           //
os.platform()                           //
os.release()                           //version

⭐path module⭐
const path = require("path")                //os is module in nodejs so we required it
path.dirname("filepath de ith")
path.extname("filepath de ith")                                  //gives extension
const joined = path.join("/user","text","readme.txt")                                  //gives extension
path.resolve("text","file.txt")                                  //you'll get complete path
path.isAbsolute("/user/text")                                  //absolute mhnje ardha pth   
const parsed = path.parse("/user/text")                                  //you'll get complete path
parsed.dirname
parsed.filename
parsed.pathname
parsed.ext                  //extension



⭐⭐ CREATING node js SERVER  using vanilla js⭐⭐                   //if nodejs then create app.js file if expressjs then server.js file
//STEP1) importing libraries
const http = require("http")
//STEP2) create handler
const requestHandler = (req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"})        //200 means everything is okay
    res.and("vaibhav is good")
} 
//STEP3) creating server
const server = http.createServer(requestHandler)
//STEP4) start server
const PORT = process.env.PORT||3000
server.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})


⭐⭐ node js ROUTE parameters ⭐⭐     //express js will make this easy
//STEP1) importing libraries
const http = require("http")
const url = require("url");
//STEP2) create handler
const requestHandler = (req,res)=>{
    const passedurl = url.parse(req.url, true);             //suppose url  https://localhost:3000/product/13

    const pathname = passedurl.pathname;                    //localhost t kadun takta        remained will be product/13

    const pathcomponent = const pathname.split("/").filter(Boolean);                //fakta 13 gheil as boolean filter lavla
    if(pathcomponent[0]=="product" && pathcomponent[1]){                //means [product , 13] pathcomponent[1] mhnje true return karal karan 13 aahe already
        const productid = pathcomponent[1]

        //send response 
        res.writeHead(200,{"Content-Type":"text/plain"})
        res.end(productid)
    }                 
//STEP3) creating server
const server = http.createServer(requestHandler)
//STEP4) start server
const PORT = process.env.PORT||3000
server.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})

⭐⭐query paramerter ⭐⭐
www.vaibhav.com/menu?cheese=extra&tomato=none&add=bacon               //? ch nantarch sagla query

//STEP1) importing libraries
const http = require("http")
const url = require("url");
//STEP2) create handler
const requestHandler = (req,res)=>{
    const passedurl = url.parse(req.url, true);             //

    const queryparameter = passedurl.query;                    //
    console.log(queryparameter)
    }                 
//STEP3) creating server
const server = http.createServer(requestHandler)
//STEP4) start server
const PORT = process.env.PORT||3000
server.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`)


⭐⭐ JSON data ⭐⭐                                                 //JSON.stringify()   and change Content-Type:JSON

//STEP1) importing libraries
const http = require("http")
const url = require("url");
//STEP2) create handler
const requestHandler = (req,res)=>{
    const passedurl = url.parse(req.url, true);             //
    const data = {
        id:2,
        name:"vaibhav"
    }

    //send response 
    // res.writeHead(200,{"Content-Type":"text/plain"})
    res.setHeader(Content-Type:"application/json")
    res.end(JSON.stringify(data))
    }                 
//STEP3) creating server
const server = http.createServer(requestHandler)
//STEP4) start server
const PORT = process.env.PORT||3000
server.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`)




//go to finalproject => express=> book api       to start node name.js
⭐⭐ EXPRESS JS ⭐⭐            // framework ease in making api faster for httprequest, routing
npm i express@4.18.1            //creates node_module folder and package-lock.json(snapshot) to download particular version
npm init                        //create package.json
// expressjs.com => getstarted => api
//CREATING SERVER WITHOUT HTTP AND VANILLA JS 
const express = require("express")
const app = express()
app.use(express.json())                 //to accept data from client to server mhnje req.body karta yet nahi jr he use kela nahi tr
//DEFINE ROUTER HANDLER
app.get("/",(req,res)=>{
    res.send("hello world")
})

//CREATE PORT
const PORT = process.env.PORT||8082
//START SERVER
app.listen(PORT, ()=>{
    console.log(`server is runnign on ${PORT}`)
}) 

⭐ req.param.id                         //suppose tu url dila http://localhost:8082/books/2    
tr code madhe tula asa lihav lagal
app.get("/books/:id",(req,res)=>{           //:id he parameters aahe request ch
    console.log(req.param.id)               //to access id
})

⭐ TO ACCEPT THE DATA INTO SERVER FROM CLIENT 
app.use(express.json)                       //he lihi const app = express() ch khali

💛//TILL DATE IF ANY CAHNGES IN .JS WE WERE SAVING IT AND THEN RUN MANUALLY LIKE  node filename.js   BUT NOW AUTOMATIC
💛package.json => in script => "start":"node filename.js"  and "server": "nodemon filename.js"  he doni lihi   ani save kr => now to run  npm run start 
npm i nodemon -D
nodemon server.js
npm --watch server


⭐ EXPRESS ROUTER
create routes folder in our project inside make userRouter.js
const router = express.Router()
//module.exports = router
//NOW IN server.js file 
app.get("/",(req,res)=>{})      //this code is replaced by app.use("/",router)
//NOW YOU CAN USE router.get,post,delete,put insted of app.get,post,put,delete in userRouter.js

⭐EXPRESS ROUTER CHAINING  369              //apan jith router.get("/",(req,res)=>{res.json()}) karat hota n tyala replacement aahe he. mhnje teen chaar lokanna same endpoint asal tr ekatch karta yeil
userRouter.route('/').get((req,res)=>{                      //route() madhe apan j nehemi end point use hote t dilay
    res.json({
        "message":"all user fetched"
    })
})            

⭐ MIDDLEWARE        //used for authentication or security takes threee arguement (req,res,next)
//make folder middelware and create authentication.js file inside this
const isAuthenticated = (req,res,next)=>{
    const login = true;
    if(login){
        next();                                         //next() means callback passed to next middleware
    }
    else{
        res.json({
            "message":"UNOTHORIZED"
        })}};
module.exports = isAuthenticated                               //now in server.js do const authenticated = require("path form where exported")
//ATA JITH💥app.use("/user",authenticated,router)

//OR
//in server.js madhech lihi direct 
app.use((req,res,next)=>{
    console.log("i am middleware")
    //call next
    next()                                          //he tolnaka sarkha ast jr next() lihila nahi tr next code la jaatch nahi  
})


⭐ BUILTIN MIDDLEWARES
express.json()                    //app.use(express.json())         to acces the json data from client to server
app.use(express.json({limit:'1mb'}))
app.use(express.static())                                                    //for client side fetchable files,deals with files,css,js
express.urlencoded({extended:true})                                         //sends data from html forms
res.sendFile(path.join("firstPath","secondPath"))


//RENDERING TEMPLATE USING EJS
⭐ EJS(embedded javascript just by changing .html with .ejs for creating html with blank space where we can put our data)
npm i ejs
//views navach folder madhe .HTML file la  .ejs files tak
app.set("view engine","ejs")                        //type of template engine is ejs
res.render('home.ejs',{datahere to be sended to client})                                            //insted of res.sendFile() or res.json()
// use this in ejs file to acces data from server to ejs file ejs is like html:
// 1. `<%= variable %>`: Output/assign value to variable, HTML-escaped.
// 2. `<%- variable %>`: Output unescaped value.
// 3. <% code %>`: Execute JavaScript, no output.
// 4. <% code %>: Same as `<% code %>,` strip whitespace.
// 5. `<%# comment %>`: Add non-visible HTML comment.
// 6. `<%%>`: Output literal `<%`.
// 7. `<% include('file') %>`: Include another EJS file (partials).
⭐PASSING DATA FROM SERVER TO CLIENT 
1)create userdata.ejs in view folder
2)in srerver.js render that userdata.ejs while rendering pass data there only
3)and this sended data from server.js to be accepted in userdata.ejs file 

⭐EJS PARTIALS              //aplyala header ani footer saglya .ejs files  madhe lagte tr apan view folder madhe partial folder banavla tyat header.ejs ani footer.ejs banavla ani content takla along with baki jya .ejs files la .css lagta t pn header ani footer madhe add kela mhnje baki .ejs files madhe boiler plate ch nahi
//tyala acces karaych home.ejs madhe tr <%-include('partials/header.ejs')%> ani tyzhya home.ejs madhe boiler plate nasla tri chalal
⭐EJS TITLE 
//kay kar jecha home.ejs madhe tu <%-include("partials/header.ejs") karto n tr azhun ek argument add kr <%-include("partials/header.ejs","title":"home page")
//ani mg hech tith mhnje header.ejs madhe acces kr jith main html ch code aahe <title><%title%></title

⭐EJS LAYOUT          //this can replace partials
npm i express-ejs-layouts
//in server.js do               
const ejsLayout = require("express-ejs-layouts")
app.use(ejsLayout)
//INSIDE view folder create layout folder create file main-layout.ejs
app.set("layout","layout/main-layout.ejs")                              //in server.js write this     folder name, path of the file

//ata mainlayout.ejs madhe ye ani boilerplate lihi ani header ani footer lav ata tyat ch 
<main>
    <%-body%>                                       //ekdach lihaych     he body yeil purna home.ejs,about.ejs,contact.ejs  chi
</main>
//ani sarva .ejs files la lagnara css files he main-layout.ejs madhe link kar</main>

⭐DYNAMIC ERROR page(customized via middleware)          //404(not found) 504(internal server error)
1)view madhe error.js file banav 
2)server.ejs madhe don middleware lihi 
// app.use(req,res,next)=>{
//     const error = new Error("404 page not found")
//     next(error)
// }
// app.use(err,req,res,next)=>{
//     res.render('error',{error:err.message})                            //render kela karan apan ejs use kartoy
// }
3)ata error.ejs madhe lihi
<h1><%=error%></h1>





⭐⭐⭐⭐⭐⭐MONGODB⭐⭐⭐⭐⭐⭐
//nosql , documentbased , horizontalscalable(multiple servers can be added)
//collection == table
//document == row
//fields == columnname
⭐MONGODB ATLAS           //cloud based DB services allows to manage,update databases
⭐MONGODB DRIVERS           //connect app(js,py,c#) to databases
npm i mongodb
//you will require mongodb connection string 398 vido
mongodb.com=>resources=>mongodbdrivers=>select node.js=>click on quickstart=>download and install=>mongodb deployment=>create connection string=>go to mongodb.com=>try free



//!watch 492
⭐CONNECTION  (mongodb atlas madhun connection string bhetal ani ti takaychi mongodbcompass madhe connect karaysathi)
const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();

// Database credentials                         
const username = "vaithon";
const password = "Vaibhav@123";
const databaseName = "student-database"; // Corrected database name
const mongodburl = `mongodb+srv://${username}:${password}@vaibhav.oucgfq7.mongodb.net/${databaseName}student-database`;
//FINAL URL    ==  mongodb+srv://vaithon:Vaibhav%40123@vaibhav.oucgfq7.mongodb.net/student-database
const serverApiOptions = {
  version: ServerApiVersion.v1,
  strict: true,
  deprecationErrors: true,
};

// Function to connect to MongoDB
const connectDb = async () => {
  try {
    const client = new MongoClient(mongodburl, { serverApi: serverApiOptions });
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};

// Connect to MongoDB
connectDb();

const PORT = process.env.PORT||8082;
app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));


⭐MONGODB COMPASS AND VS CODE EXTENSION
//go to mongodbcompass(gui for mongodb) => download mongodbcompass => openit and paste your mongodb connection string(means url) there
//vs code extension mongodb download kr
⭐insert,insertOne,insertMany([{},{},{}])
⭐find,findOne,aggregate()                  
// const resultreturn = students.find();                        //students is collection name
// const resultarray = await resultreturn.toArray();            //before console.log do to array

// const resultreturn = students.findOne({age:23});                        //students is collection name
// console.log(resultreturn)
⭐updateOne(),updateMany,findOneAndUpdate()                             //findOneAndUpdate and update returns the documents
collectionname.updateOne({name:"san"},{$set:{age:40}})

⭐deleteOne(),deleteMany(),findOneAndDelete()                             //findOneAndUpdate and update returns the documents

⭐QUERY OPERATOR
Common operators:
// `$eq': Equal to specified value
// `$ne`: Not equal to specified value
//  $gt: Greater than specified value
//  $gte: Greater than or equal to specified value
//  $lt': Less than specified value
// `$lte`: Less than or equal to specified value
//  $in': In specified array values
//  $nin: Not in specified array values                         // find({age:{$nin:[23,34,56]}})
//RESULT IS ALWAYS A CURSOR SO
const resultCursor = student.find({age:{$gt:40}})               //now you got cursor now use forEach loop to print or use toArray method
const result = resultCursor.forEach((doc)=>{console.log(doc)})  //

Common operators:LOGICAL operators
// $and
// $or                                      //collectionname.find({$or:[{age:30},{marks:{$gt:40}}])
// $not
// $nor

⭐⭐⭐ MONGOOSE             //ODM(object-data-modelling library of mongodb for decides the STRUCTURE of document and DATATYPE of fields)
//USED TO DESIGN SCHEMA
npm i express mongoose
const mongoose =require("mongoose")

mongoose.connect('connection string de ith').then(()=>{console.log("db connected")}).catch((e)=>{console.log(e)})

SCHEMA=>MODEL=>DOCUMENT
⭐MODEL = used to create instance of document
⭐DESIGN SCHEMA
// const userProfileSchema = new mongoose. Schema ({
//     username: String, //String
//     age: Number, //Number
//     birthday: Date, //Date
//     isActive: Boolean, //Boolean
//     hobbies: [String], //Arrays of strings
//     objectId: mongoose. Schema.Types.ObjectId, //ObjectId
//     address:
//     street: String,
//     city: String,
//     postCode: Number,
//     }, //Embed
//     customData: mongoose. Schema.Types. Mixed,

//COMPILE THE SCHEMA TO FORM THE MODAL
const User = mongoose.model('User',userProfileSchema)           //users navach colleciton bante

//CRUD OPERATION 
//Create DOCUMENT from model using
const newUser = new User({                  //creating instance(document) of User
    username:"vaibhav",age:45,birthday:new Date('2000-12-19'),isActive:true,hobbies:["football","riceball"],address:{street:"sathe",city:"nanede",postCode: 43324,},customData:{country:"india",}
})

//SAVE THE DOCUMENT
newUser.save().then((data)=>console.log(data)).catch((e)=>console.log(e))

⭐CRETEOPERATIONS
.save()     //ith new modal karun document create karav lagal
.create()   //ith no need to use new keyword direct modelname.create()
.insertMany()   //ith no need to use new keyword direct modelname.insertMany()

⭐READOPERATIONS
.find()     //ith new modal karun document create karav lagal
.findOne()   //ith no need to use new keyword direct modelname.create()
.findById()   //ith no need to use new keyword direct modelname.insertMany()

User.find().then((user)=>console.log(user)).catch((e)=>console.log(e))
User.findOne({age:40}).then((user)=>console.log(user)).catch((e)=>console.log(e))

⭐.wehre(),sort(),limit()
User.find().where('age').gte(34).sort({username:-1}).limit(4)

⭐UPDATE 
User.updateOne({username:vaibhav},{age:30},{new:true})
.findOneAndUpdate()
.findByIdAndUpdate(req.user,     {
    password: hashedPassword,
  },
  {
    new: true,
    runValidators: true,
  }

⭐ADVANCED UPDATE 
User.findOneAndUpdate({},{$set:{}})
// - `$set`: Set field value in document.
// - `$unset`: Remove field from document.
Array Update Operators:
// $addToSet Add item if not exists in array.
// - $push': Adutitem to array.
// `$pop`: Remove item from array.
// - `$pull`: Remove all instances of value from array.
// - `$pullAll': Remove all matching values from array.
Arithmetic Operators:
// - `$inc`: Increment field's value.
// - `$mul`: Multiply field's value.
// - `$min': Update field to minimum of current and given values.
// - $max': Update field to maximum of current and given values.
Date Operators:
// - `$currentDate: Set field to current date.

⭐DELETE   
User.findByIdAndDelete({})                      //it wil return
.findOneAndDelete()
.deleteMany()


⭐VALIDATION
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"please username is required"],
        unique:true,
        minLength:2,
        maxLength:3,
        max:23,
        min:34,     //for number
        match: /@/  //should contain @  email madhe lau shakto

        enum: ["male","female"]         //mhnje user should select from these two only
        default:"male"
    }
})


⭐CUSTOM VALIDATION
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        validate:{
            validator: function ((value)=>{
                reutrn /^[a-zA-Z0-9]+$/.test(value)
            },
            message:"user name can only alphanumeric"
            )}}})
            
            
⭐THIRDPARTY VALIDATION
npm i validator
cosnt validator = require("validator")
const userSchema = new mongoose.Schema({
    age:{
        type:Number,
        validate:{
            validator: function ((value)=>{
                validator.isInt(value,{min:0,max:30})
            },
            message:"invalid"
            )}}})
            
            
⭐set and get
const userSchema = new mongoose.Schema({
    age:{
        type:Number,
        set:(value)=>{value.trim()}





⭐⭐DATA MODELING               //convert ideas To Data To colleciton To replationship
  //addressSchema
  const addressSchema = new mongoose.Schema(
    {
      street: String,
      city: String,
      state: String,
      zip: Number,
    },
    {
      timestamps: true,
    }
  );
  //UserSchema
  const userSchema = new mongoose.Schema(
    {
      name: String,
      email: String,
      address: addressSchema, //embedded approach               //if you wamt to create multiple addressess then one change just do     address:[addressSchema]  means you can give [{},{},{}]
    },
    {
      timestamps: true,
    }
  );
  
  //!Models
  const User = mongoose.model("User", userSchema);
  
  const createUser = async () => {                          //creating user
    try {
      //create the user
      const newUser = await User.create({
        name: "Emmanuel",
        email: "emma@gmail.com",
        address: {
          street: "Kumasi OT2",
          city: "Camp",
          state: "Ghana",
          zip: 1122,
        },
      });
      console.log(newUser);
    } catch (error) {
      console.log(error);
    }
  };



  ⭐ REFERENCING
  //authorSchema
const authorSchema = new mongoose.Schema(
    {
      name: String,
    },
    {
      timestamps: true,
    }
  );
  const Author = mongoose.model("Author", authorSchema);
  //bookschema
  const bookSchema = new mongoose.Schema(
    {
      title: String,
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author", //REFERENCING                            //ONE TO ONE RELATIONSHIP HERE AS AUTHOR USED IN BOOK SCHEMA
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );
  
  //!Models
  const Book = mongoose.model("Book", bookSchema);





 ⭐AUTHENTICATION FLOW⭐
 Client is (browser,postman) not the user
HTTPS is stateless means it doesnot remember the logedin client so we used AUTHENTICATION Mehtods(cookie,token)
COOKIE BASED 
//once logedin server gives cookie to browser and after that whenever you want to acces you give cookie with request
Therefore it generates coockies(random string given and stored at client),token(random string given and stored at server)

res.redirect('/dashboard')

///COOKIE
res.cookie("userData",JSON.stringify(userFound),{
    maxAge:3*24*60*1000,         //3days expiration   cookie needs to be expired
    httpOnly:true,                  //saves from sss attacks
    secure:false,
    sameSite:'strict',
})
npm i cookie-parser
const cookieparser = require("cookie-parser")
app.use(cookieParser())                             //to pass the cookie to the server
app.get(/dashboard, (req,res)=>{
    //grab user from cookies
    const userData = req.cookies.userData ? JSON.parse(req.cookies.userData):null,
    const userName = userData? userData.username:null
    if(userName){
        res.render('dashboard',{username})          //passing username so it will be catched in <%=username%>
    }
    else{
        res.redirect('/login')
    }
})

res.clearCookie('userData')
res.redirect('/login')




⭐FOR API's WE use res.json() not res.render()⭐
⭐npm i bcryptjs⭐          //your username and password stored in database can be hacked
//while register in website we do like this 
const bcrypt = require(bcryptjs)

const salt = await bcrypt.genSalt(10)
const hastpassword = await bcrypt.hash(password,salt)

const hashedpassword = await bcrypt.hash(password,10)
if(userFound && bcrypt.compare(password, userFound.password))

⭐npm i express-session⭐
⭐npm i connect-mongo⭐
const session = require("express-session")
const MongoStore = require("connect-mongo")
app.use(session({
    secret:'gsls039434',
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge:60*60*100,       //expires in 1 hr
    }
    store:MongoStore.create({
        mongoUrl:"paste url here",
    }),
}))

req.session.userData ={
    username:userFound.username,
    role:userfound.role,
}

if(req.session.userAuth)
req.session.destroy()


⭐JWT TOKEN BASED AUTHENTICATION⭐
npm i jsonwebtoken
npm i cookie-parser
const jwt = require("jsonwebtoken")
app.use(cookieparser())
//generate token
 //token to be stored in localstorage or session
const token = jwt.sign({username: userFound.username}, "anykey this is stored in other place",{expiresIn:"3d"})
//  SAVE THE TOKEN INTO COOKIE
res.cookie("token",token,{
    maxAge: 3*24*60*60*100,
    httpOnly:true,
})
//NOW ACCESS THAT IN isAuthenticated middleware
const isAuthenticated = (req,res,next)=>{
    //access the token from req.cookie
    const token = req.cookie?req.cookie.token:null

    jwt.verify(token,'anykey',(err,decoded)=>{
        if(err){
            console.log("token invalid")
        }
        else{
             // ADD USER INTO req object
             req.userData = decoded
        }
    })
}


⭐ERROR HANDLING⭐
app.use(req,res,next)=>{
    const error = true;
    if(error){
        const err = new Error("user not found");
        next(err)
    }
    else{
        next()
    }}
⭐ERROR HANDLING MIDDLEWARE⭐           //status(server error sarkh),message(actual message),staCK(in which file and line error occured
//!MIDDLEWARE folder madhe  globalErrorHnadler.js navach file banav
const globalErrorHnadler = async(err,req,res,next)=>{
    const stack = err.stack;
    const message= err.message;
    const status= err.status?err.status:'failed';
    const statusCode = err.statusCode?err.statusCode:500;
    //send response
    res.status(statusCode).json({
        message,
        status,
        stack,
    })
}
module.exports = globalErrorHnadler


)
//!in server.js file
app.use(globalErrorHandler)                                 //middleware
app.use(err,req,res,next)=>{
    //SETTING HTTP STATUS CODE
    res.status(err.status|| 500)
    res.json({
        message:err.message,
        
    })
}
    


⭐MVC⭐   453 bg sagla kalal
client=requrests=>CONTROLLER=>MODEL=>DATABASE=>MODEL==sending data to controller for processing==>CONTROLLER==>VIEW
model(manages data communcation)
view(display data)
controller(processes input and return it to view,contains alll logic) js ki callback functioin

⭐UPLOAD VIDEO TO CLOUD⭐
cloudinary.com
npm i express cloudinary multer multer-storage-cloudinary           //cloudinary(to save files to cloudinary) , multer(to let server access form data)
node --watch  server                                                    //works similar to nodemon
npm i dotenv
require("dotenv").config()
process.env.mongourl                    //use this in mongoose.connect()




⭐REACT JS ⭐               //JS LIBRARY, WITHOUT RELODING(gmail), SINGLE PAGE APP
/npx create-react-app quizapp --use-npm
/ nodemodule => contains dependencies
/ public folder => contains static files
/ src folder => where source code goes

index.js =>  it takes root id from html of publicfolder       
//IN SRC FOLDER create index.js inside that
import React form "react"
import ReactDom from "react-dom/client"
import App from "./App"                     //App is component
const root = ReactDom.createRoot(document.getElementById("root")
root.render(
    <React.StrictMode>
    <App/>
    </React.StrictMode>
)


//IN SRC FOLDER create App.js  which is component
component(rafce) => is a funcito where we return html and we do export default component and catch that in index.js as import componentName from "path" and we use in <component/>
const App=()=>{
    return (
        <div><h1>hello {2+2}</h1></div>
    )} 

⭐JSX ⭐        //mixes HTML with js code, simplifies adding html in react 
//IN APP.JS FILE insted of return <h1> hello </h1> we do 
const element= (
    <div>
        <h1>hello {2+2}</h1>
    </div>
)
return element

⭐CSS IN REACT 4 WAYS ⭐
1) import "./username.css"
3) you can create userprofile.module.css file in src folder   and then in component you can import import style from "userprofile.module.css"
2) <h2 style={{color:"black"}}
4) use REACT BOOTSTRAP where we get css for component you just need to get cdn script link and paste it in index.html


⭐PORPS⭐           //arguments passed from parent-component to child-component
import childcomponent from "./component/childcomponent"
const App=()=>{
    return (
        <div>
            <childcomponent                                     //child component called in parent component
            name="vaibhav"                                      //passing props to child component
            age=23
            />
        </div>
    )} 
const childcomponent = (props)=>{
    return(
        <div>
            <h1>{props.age}  </h1>
        </div>
    )   
}


STATE => is anything that is going to change over time
⭐useState⭐            //hook to manage state variable in functional component
import {useState} from "react"[{},{},{}]
const [childs,setchilds]= useState()
//inside the component
const [count,setCount]=useState(0)
return(
    <h1>counter:{count}</h1>
    <button onClick={()=>{setCount(count+1)}}>increse</button>
)


⭐useEffect⭐        //USED FOR SIDE EFFECT     LIKE REQURESTS
//use it for fetching data after component mount   
//to make http request in API (rapid api)
useEffect(()=>{                                             //has two things 1.callfuncioin 2.dependencies
    //sideeffect logic
},[dependencies])                                           //dependencies mhnje component la render whayla sangto ani jevha fetch hoil data tevha dependencies madhle variable takayla sangto tya madhe j apan useState madhe j variable dila t dyach

go to jsonplaceholder website inside scroll to post and copy url 
now create post component
import{useEffect} from "react"
const url = "paste the url of jsonplaceholder posts data"

const Post = ()=>{                          //component 
    //useState
    const[post,setPost] = useState([])
    //useEffect
    useEffect(()=>{
        //sideeffect LOGIC          //npm i axios    
        axios.get(url)
        .then((post)=>{setPost(post.data)}++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        .catch(e)=>{console.log(e)})
    })
}

//!CRETE HTTP folder in component folder and crete httprequrest.js file
⭐useEffect HTTP requrest⭐         //we can use fetch OR axios which are client to make http request
//!inside httprequest.js 
import react,{useEffect,useState} from "react"
const httprequest = ()=>{
    const APIurl = "https://jsonplaceholder.typicode.com/posts"

    useEffect(()=>{
        //HTTP REQUEST SIDE EFFECT CODE HERE
        fetch(APIurl).then((data)=>data.json().then((post)=>{console.log(post)}).catch((e)=>{console.log(e)}))
    },[])                   //dependencies
    
    return(
        <div>
            <h1>HTTP REQUREST</h1>
        </div>
    )
}



⭐FORM-HANDLING IN REACT⭐
//component folder madhe register.js navach component banav in that 
import {useEffect} from "react"
import {useState} from "react"

const Register=()=>{
    //give initial value for each form input
    const[formData,setFormData] = useState({
        fullname:"",
        email:"",
        password:"",
    });

    //onchange   //you won't be able to type in input field so create onchange
    const onChangeHandler = (e)=>{
        setFormData({
            [e.target.name] : e.target.value,                      //to set that 
        })
    }                       

    //SUBMIT HANDLER
    const onFormSubmit = (e)=>{
        e.preventDefault()              //refresh thambavta ani input kelela values tasach ast udat nahi
        console.log(formData)
    }
    return (
        <div>
            <h2>RegisterForm</h2>
            <form onSubmit={onFormSubmit}> 
                <div>
                    <input name ="fullname" type="text" placeholder="Full name" value="{formData.fullname}" onChange={onChangeHandler}/>                 //you won't be able to type in input field so create onchange
                </div>
                <div>
                    <input name ="email" type="email" placeholder="email" value="{formData.email}" onChange={onChangeHandler}/>
                </div>
                <div>
                    <input name ="password" type="password" placeholder="password" value="{formData.password}" onChange={onChangeHandler}/>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>)}






⭐FULL STACK APP⭐
MERN 
MEVN 
MEAN    => MongoStore,express,vue,node
LAMP    => linux,apache,mysql,php


⭐BLOG PROJECT⭐
//!mongodb=>createproject=>Free=>Ip(0.0.0.0)=>createkr=>connect vr click karun connection string
//*connection string= "mongodb+srv://vaithon:Vaibhav@123@blogproject.sntxgej.mongodb.net/fullstack-blog?retryWrites=true&w=majority                    //? ch adhi database ch naav aahe 
//ani connection string should be stored in .env file

//!while working with api you do res.json


⭐Portfolio⭐
//!CSS  FOR SEAMLESS TRANSITION
transition: all 0.3s ease-in-out;
yarn add react-typical

<h2>
    I'm a {""}
    <Typical
    steps={[
        " MERN Stack Developer 🚀",
        1000,
        "Frontend Developer ✅",
        1000,
        "Backend Developer 🏆",
        1000,
        "React Developer ⚛️",
        1000,
    ]}
    loop={Infinity}
    wrapper="b"
    />
</h2>

⭐React Router Dom⭐   //for navigation        npm install react-router-dom

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from react-router-dom

//TO USE IT IN APP.js FIrst of all all content should be wrapped in <Router></Router> and then inside this use this
<Switch>
    <Route exact path='/home'>
        <home />                    //component
    </Route>
    <Route exact path='/about'>
        <about />
    </Route>
</Switch>


//////////////OR///////////
import {
    BrowserRouter as Router,
    Routes,
    Route
} from react-router-dom

//TO USE IT IN APP.js FIrst of all all content should be wrapped in <Router></Router> and then inside this use this
<Routes>
    <Route path='/home' element={<home/>}/>
    <Route path='/home' element={<home/>} />
    //! if there is no route then
    <Route path="*" element={<h1 style={{textAlign:center}}>404. Not Found</h1>} /></h1>
</Routes>

//!NO RELOAD OF PAGE
import {Link} from "react-router-dom"
//a should be replaced with Link and href should be replaced with to

⭐PROTECTING A ROUTE⭐
//In Authentication component 
const Authentication = ({children})=>{          //children is the component that we are going to give in app.js

    const isLogin = false;
    if(isLogin){return <h>Access Denied</h1>}
    else{
        return(<children/>)
    }}

//In app.js
//import Authentication 
<Routes>
    <Route path='/admin' element={
        <Authentication>
            <admin/>                        //passing admin component to Authentication as children
        </Authentication>
    }/>
</Routes>

⭐useParams()⭐
import {useParams} from "react-router-dom"
const products = ()=>{
    const {id} = useParams()                    //apan j link madhe deto n  localhost://product/:id  he id acquire karte
}

⭐CONTEXT API⭐
//Instead of prop drilling use Context Api 
// CREATE context folder and inside UserAuthContext.js file in src.
import react, {createContext, useState} from "react"        //useState bcoz we are drilling state
export const UserAuthContext = createContext()          //creating and exporting instance of createContext
export const UserAuthProvider = ({children})=>{         //children is the component
    const[user,setUser] = useState({
        name:"vai",
        email:"vaibhavparsewar.scoe.it@gmail.com"
    })
    return(
        <UserAuthContext.Provider value={user}>
            {children}
        </UserAuthContext.Provider>
    )}
//!NOW WE HAVE TO USE THIS IN COMPONENT SO IN APP.JS
import {UserAuthProvider} from "./Context/UserAuthContext"

funciton App()=>{
    return(
        <UserAuthProvider>
            <componentA />                  //NOW YOU CAN USE UserAuthContext everything into componentA
        </UserAuthProvider>
    )}
//!NOW IN componentA.js file
import react, {useContext} from "react"                     //HOOK
import {UserAuthContext} from "./context/UserAuthContext"

const componentA = ()=>{
    const user = useContext(UserAuthContext)
    return(
        <div>
            <h1>Name:{user.name}</h1>
        </div>
    )}
//!in app.js you are using <UserAuthProvider> insted use it in index.js
return(
    <userAuthProvider>
        <app />
    </userAuthProvider>
)


⭐useReducer⭐ //hook to update the initial state and called in component
import {useReducer,createContenxt} from "react"
export const TodoContext = createContext()

//initial state
cosnt initial_State= [10,20]
//reducer funciton to be passed in useReducer
const reducer= (state,action)=>{                       //action has type and payload
    if(action.type === "ADD_TODO"){
        return [...state, action.payload]
    }
    return state                                        //return original state
}

export const TodoContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,initial_state)                  //dispatch will trigger reducer useReducer has two fields 1)reducer function and 2)initial state
    
    //Add Todo action
    const addTodoAction = (title)=>{
        dispatch({                                  //triggers reducer funciton
            Type:"ADD_TODO",
            payload:title
        })

    }
    return (
    <TodoContext.Provider value={{ state, addTodoAction }}>
        {children}
    </TodoContext.Provider>
    )
}





⭐Paisa⭐
npm i express@4.18.1 
npm i mongoose@6.5.3 
npm i bcryptjs@2.4.3
npm i jsonwebtoken@8.5.1
npm i cookie-parser

//!inside config file create dbConnect.js file where we are connecting app to database
//!call it in server.js to call funciton  require("./config/dbConnect")
//!now extension mongodb and paste connection string and click on connect

//!we have three models (user,accounts,transaction) how they are related it is very imp
const User = mongoose.model("User",userSchema)      //creating model of userSchema and "User" is colleciton name

//! middleware folder madhe globalErrorHandler.js ahe
//!.utils madhe appErr.js banavla karan dr veles aplyala new Error("") jamat nahi tr apan class banavta appError from error
class AppErr extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
      this.status = "failed";
    }}
  const appErr = (message, statusCode) => {             //insted of class we can use function
    let error = new Error(message);
    error.statusCode = statusCode;
    return error;
  };
  
  module.exports = {                    //means you can use class as well as function
    AppErr,
    appErr,
  };
  

//!generateToken(id)                //in utils folder
npm i jsonwebtoken
npm i cookie-parser


⭐FRONT-END⭐
⭐Tailwind css
//!create react app named client
//!tialwind css -> docs -> Framework guide ->create-react-app -> copy second code and paste in terminal in client
npm install -D tailwindcss npx
npx tailwindcss init
//now you will have tailwind.config.js file now replace the inner code with online(tailwind css website) code
//now in our index.css remove everything and include that online(tailwind css website code) 
//install tailwind css plugin
//!go to react router dom website -> i am new ->
npm install react-router-dom@6
//!additional dependencies
npm install @heroicons/react
npm i axios
//!we placed navbar component outside the Routes because we want this everywhere
//!install peacock to change the color of dashboard in vs code -> go to view->command pallet ->search peacock

npm i cors          //in server.js file app.use(cors())   we use it when we are sending data from frontend server to backend server as boths port are different and for security purpose it is requrie

//!REDIRECT
window.location.href = "/dashboard"