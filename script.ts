let a:number;//number
let arr:[];//array
let str:'';//string
let boolean:boolean;//boolean
let variable:any// we can put any type in it in future
let variableUnkown:unknown
let never:never;// code after never will not run at all

//tuple
let tuple:[number,string] = [2,"hello"]

//following function explicitly tell the return type
function returnNumber():number{
    return 12
}
//following function explicitly tell the return type
function returnVoid():void{
    console.log("nothing would we return")
}

// Enum

enum Directions{
    top="TOP",
    left="LEFT",
    right="RIGHT",
    bottom="BOTTOM"
}
console.log(Directions.bottom)


let check:string | number;
check = 12
if(typeof check === 'string'){
    
}else if(typeof check === 'number'){

}

function accept(variable:number | string){
    if(typeof variable === 'string'){
        console.log(variable.toLowerCase())
    }else if(typeof variable === 'number'){
        console.log(variable.toFixed())
    }
}
accept(12)

function abcd():never{
    while(true){
        console.log("this is infinite loop")
    }
}

console.log("this code will not run ever if we put never with abcd loop")