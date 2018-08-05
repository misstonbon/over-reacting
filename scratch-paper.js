// Implicit binding 
// Explicit binding
// new Binding 
// window Binding

// and the THIS

// ASK YOSELF:

// Where is this function invoked?

var sayName = function(name) {
    console.log(`Hello ${name}`);
}

// what is name? We don't know until function is invoked.

// implicit, most common binding" 

var me = {
    name: "Tanja",
    age: "unknown",
    sayname: function(){
        console.log(this.name);
    }
}

me.sayname();

// this is referencing what is to the left of the dot. 

var Person = function(name, age) {
    return {
        name: name,
        age: age,
        sayName: function() {
            console.log(this.name);
        },
        mother: {
            name: "Stacey",
            sayName: function() {
                console.log(this.name);
            }
        }
    };
};

var jim = Person("jim", 24)
jim.sayName(); // jim
jim.mother.sayName(); // "stacey" 

/// Explicit binding: 

var sayOnlyName = function(){
    console.log(this.name);
}

var stacey = {
    name: "stacey", 
    age: 32
}

sayOnlyName.call(stacey); 

// we are calling sayName which is in global scope on stacey.

var languages = ["JS", "Ruby", "Python"];

var sayName = function(lang1, lang2, lang3){
    console.log(this.name + lang1 + lang2 + lang3);
}

sayName.call(stacey, lang1,lang2, lang3); 

/// apply takes care of these exptra args 

sayName.apply(stacey, languages); // voila

// bind property 

someNewFn = sayName.bind(stacey, lang1,lang2, lang3);

// takes sayName fn with all of its arguments and binds it to new function that can be invoked later

someNewFn(); // call it like this

/// new and window binding ///

var Animal = function(color, name, type) {
    this.color = color;
    this.name = name;
    this.type = type;
}

var zebra = new Animal('stripy','Zorro','Zebra');
// here JS creates a new obj called 
// this = {}.

var sayAge = function() {
    "use strict"; // this will prevent from binding to window object.
    console.log(this.age);
}

me = {
  age: 33
};

sayAge() // undefined. We didn't put anything to the left of the dot therefore this is referring to the window object. 









