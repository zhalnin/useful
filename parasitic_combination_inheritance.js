/**
 * Created with JetBrains PhpStorm.
 * User: zhalnin
 * Date: 28.04.13
 * Time: 14:37
 * To change this template use File | Settings | File Templates.
 */
EventUtil.addHandler(window,"load", function()
{

});
function object(o){
    function F(){}
    F.prototype = o;
    return new F();
}

person = {
    name: "Alex",
    friends: ["Joff","Max","Lolits"]
};


function inheritPrototype(subType, superType){
    var prototype = object(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
}


function SuperType(name){
    this.name = name;
    this.colors = ["yellow","green","red"];
}

SuperType.prototype.sayName = function(){
    alert("Hi"+ this.name);
};

function SubType(name, age){
    SuperType.call(this, name);
    this.age = age;
}

inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function(){
    alert(this.age);
};


//        SubType.prototype = new SuperType();
//        SubType.prototype.constructor = SubType;


SubType.prototype.sayAge = function(){
    alert("Hi "+this.age);
};


var sub = new SubType("Alex",33);
sub.sayAge();
var sup = new SuperType("Bob");
sup.sayName();