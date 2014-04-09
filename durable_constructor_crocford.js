function Person(name, age, job){
//create the object to return
    var o = new Object();
//optional: define private variables/functions here
//attach methods
    o.sayName = function(){
        alert(name);
    };
//return the object
    return o;
}
var friend = Person("Nicholas", 29, "Software Engineer");
friend.sayName(); //”Nicholas”/**
