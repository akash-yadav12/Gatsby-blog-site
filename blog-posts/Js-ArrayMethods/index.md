---
path: "/Javascript-array-methods"
date: "2020-12-27"
title: "Important Javascript Array Methods"
author: "Akash Yadav"
tags: "javascript, arrays, array-methods"
featuredImage: "./featured.jpg"
---

### 1) filter()
If we want to filter out an array according to value of its elements we use filter() method. The filter method just takes a single function which is given one parameter(as person in below example) which is just each item inside the array and then we need to return true or false statement whether or not we want to include that element into to the new array.

For an example consider persons array which consists of objects having name and age fields,now we want only the objects which has age greater than 18 as the array elements. Then we use filter() methos as follows
```
const persons = [
    {
        name:"akash",
        age:20
    },
    {
        name:"asta",
        age:17
    },
    {
        name:"yuno",
        age:17
    },
    {
        name:"Yami",
        age:32
    },
    {
        name:"william",
        age:31
    }
]

const filteredPersons = persons.filter((person) =>{
    return person.age > 18
})

// Output: 
//filteredPersons = [{name:"akash",age:20},{name:"yami", age:32},{name:"william",age:31}]
```

### 2) map()
The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. To better understand it let us consider the above example, and lets suppose we want a new array with just the name of every person from persons array as it elements. To get the expected results we do the following:

```
const persons = [
    {
        name:"akash",
        age:20
    },
    {
        name:"asta",
        age:17
    },
    {
        name:"yuno",
        age:17
    },
    {
        name:"Yami",
        age:32
    },
    {
        name:"william",
        age:31
    }
]
const names = persons.map( (person) => {
    return person.name
})

output:
names = ["akash","asta","yuno","yami","william"]
```

### 3) find()
The find() method allows us to find a single object in an array. So considering the same example say we want to find a person whose name is asta, we then use find() method to get the expected results. find() method takes one function and returns true or false statement and the corresponding item will be returned.

```
const persons = [
    {
        name:"akash",
        age:20
    },
    {
        name:"asta",
        age:17
    },
    {
        name:"yuno",
        age:17
    },
    {
        name:"Yami",
        age:32
    },
    {
        name:"william",
        age:31
    }
]
const name = persons.find( (person) => {
    return person.name === "akash"
})

//output:
//name = akash 
```

### 4) forEach()
The forEach() method executes a provided function once for each array element.
This method is very similar to for loop, i.e it loops through each element and for every single element it's going to do what's inside of the function.
```
const persons = [
    {
        name:"akash",
        age:20
    },
    {
        name:"asta",
        age:17
    },
    {
        name:"yuno",
        age:17
    },
    {
        name:"Yami",
        age:32
    },
    {
        name:"william",
        age:31
    }
]

persons.forEach((person) =>{
    console.log(person.name)
})

//output:
//akash
//asta
//yuno
//yami
//william

```
### 5) some()
The sum() is a bit different than most of our other methods since instead of returning a brand new array it's actually going to return true or false(i.e boolean value), so we can check if some of age is less than 18(say). 
```
const persons = [
    {
        name:"akash",
        age:20
    },
    {
        name:"asta",
        age:17
    },
    {
        name:"yuno",
        age:17
    },
    {
        name:"Yami",
        age:32
    },
    {
        name:"william",
        age:31
    }
]

const hasLowerAge = persons.some((person) =>{
    return person.age < 18
}) 

output:
hasLowerAge = true
```
The output of above example is true since there are two objects having age less than 18(having age 17)

### 6) every()
This method is very similar to some() except for instead of checking one item it checks every items fall under certain condition. If all items satisfies the condition it returns true else returns false.
```
const prices = [50,60,80,90,100]

const isLower = prices.every((price) =>{
    return price < 100
})

output:
false
```
false is returned since last element of prices array i.e 100 is not less than 100. 

### 7) reduce()
This method is a bit different than other methods since it's actually doing some operation on an array and then returning a combination of all those different operations. Suppose we want to get the total price of prices array we do the following instead of conventional for loop.
```
const prices = [50,60,80,90,100]

const isLower = prices.reduce((cur,price) =>{
    return price + cur
},0)

Output:
360
```

### 8) includes()
This method simply returns true if a given element is present in an array and returns false if the given element is not present. Also, this method doesn't take function as an argument instead it takes an element which we need to check if that element is present in the array or not.
```
const items = [1,2,3,4,5,6]

console.log(items.includes(4))

output:
true
```