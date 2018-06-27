---
title: 'Abstraction, or How I Learned to Stop Worrying That There Is No Spoon'
date: '2018-06-13'
chapter: 'Software Engineering'
order: 0
tags: ['design', 'programming', 'software', 'abstract', 'abstraction', 'object', 'oriented', 'functional', 'imperative']
---

Abstraction might be the single most important concept in Software Engineering.  Abstraction is to Software Engineering as conservation laws are to physics, or words are to writing, or bread is to making a sandwich.  Abstraction is the base building block on which everything we develop depends.  It is fundamental to every task involved in designing and developing  software (and, for that matter, hardware).  It is impossible for me to overstate the importance of abstraction.  So what is it?

## Theory

Before digging into a formal definition of abstraction, I think it would be helpful to consider some examples that illustrate the nature and function of abstraction outside of software engineering.

### There Is No Spoon

In the movie *The Matrix*, where most of humanity has been trapped in a computer simulation by evil robot overlords, there is a scene in which the protagonist Nero encounters a child bending spoons with his mind.  Take a moment to [watch the spoon scene](https://www.youtube.com/watch?v=uAXtO5dMqEI) if you haven't seen it before.  Remember that, in this scene, both Nero and the child are in a sort of virtual reality computer program--there very literally is no spoon.  The "spoon" is only a bit of binary data.  It's a number, strictly speaking.  And yet, they both see a spoon.  They both hold it.  They talk about it.  They could, ostensibly, eat soup with it.  Virtual soup, granted, but soup that would be just as real as the spoon.  There is no spoon, and yet everyone in the scene acts as though it is there.  And, for every practical purpose, there is a spoon, even though, as the boy says, the truth is that there is no spoon.

A [second scene in the movie illustrates this idea further](https://www.youtube.com/watch?v=7-GTcHZkfCs).  Cypher explains to Neo that when he watches the raw data streaming past he doesn't see the code.  He just sees "blonde, brunette, redhead."  Obviously, there are no blondes, brunettes, or redheads in the scene, but Cypher sees these abstractions over the raw data, same as he would see them inside the computer simulation.

This is the essence of abstraction.  We apply the label "spoon" to something that is not a spoon, we treat it like a spoon, use it as a spoon, and therefore, it is a spoon.  Even though, in reality, there is no spoon; there is only raw binary data, a sequence of 1s and 0s.

### There Are No Chairs Either

For another example of abstraction, consider the chair you are probably sitting on right now.  It is, in all probability, almost entirely unlike the chair I am sitting on right now.  It may be made of different materials, shaped with a very different design, painted a different color--and yet, they are the same thing: chairs.  And they are not the same thing.  Mine is a wooden barstool with a sort of padded woven wicker top with the legs painted a dark green.  Yours, probably, bears no visual resemblance to mine at all.  Yours may have four legs instead of three.  Or if it's a typical office chair, no legs at all but instead a center post with wheels on spokes and a high back.  Mine has no back.  And yet, they are the same thing, even as they are quite different in their details.

Again, this is the essence of abstraction.  Two things, which differ radically in their details, are still the same thing.  We use them the same way.  They accomplish the same purpose.  We could replace one with the other and go about our lives as if nothing had changed.

### A Formal Definition

At this point, we can suggest a potential formal definition for abstraction:

> An *abstraction* is a concept-object created by humans for the sake of defining the common  features and uses shared by all concrete instances of that abstraction.

This is, of course, pretty abstract and general in and of itself.  But consider how this definition applies to the examples above.  In the case of the spoon, our spoon abstraction can be defined as an object having a handle connected to a shallow bowl that is used for scooping (real or virtaul) liquids or quantities of small (real or virtual) objects (like grains of sugar).  The virtual spoon in *The Matrix* clearly fulfills this abstraction.  It is a spoon even though it doesn't really exist.

Consider as well, the two chairs, mine and yours, from earlier.  In spite of their differences, they both fulfill the same abstraction-- a chair is an object that supports a platform at an appropriate height for sitting on, sized to fit a single seated person on that platform.  The other details of the chair's construction are irrelevant to its being a concrete instance of a chair.

## Practice

I stated earlier that abstraction might be the single most important concept in software engineering.  That is not hyperbole.  Even the most basic computer systems are staggeringly complicated things whose inner workings are far, far beyond any human's ability to mentally track and follow completely.  Without abstraction we wouldn't be able to work with computers at all.

Consider the following two computer programs that do almost the same thing.  The first is binary code for the [Hack platform](http://nand2tetris.org).  The second is high-level code in Javascript.

```binary
0000000001001000 1110110000010000 0000000000010000 1110001100001000 
0000000001100101 1110110000010000 0000000000010001 1110001100001000 
0000000001101100 1110110000010000 0000000000010010 1110001100001000
0000000000010011 1110001100001000 0000000001101111 1110110000010000 
0000000000010100 1110001100001000 0000000000100000 1110110000010000 
0000000000010101 1110001100001000 0000000001010111 1110110000010000
0000000000010110 1110001100001000 0000000001101111 1110110000010000 
0000000000010111 1110001100001000 0000000001110010 1110110000010000 
0000000000011000 1110001100001000 0000000001101100 1110110000010000
0000000000011001 1110001100001000 0000000001100100 1110110000010000 
0000000000011010 1110001100001000 0000000000100001 1110110000010000 
0000000000011011 1110001100001000
```

```javascript
let x = 'Hello World!';
```

Even if you are already closely familiar with the Hack machine language, the first program is incredibly difficult to follow.  Understanding what it is doing requires tracing a series of operations that load values into memory one 16-bit word at a time in a repeating two-step process of '1. Take this value, and 2. Store it in that memory register'.  The end result is a sequence of eleven numbers stored in memory such that each number is equivalent to the ASCII-encoded value of each character in the sentence 'Hello World!'.

The second program is trivially obvious: The string 'Hello World!' is stored in the variable x.

These are the same thing, and they are not.  One is a set of voltage signals sent to a CPU, and one is a combination of abstractions comprehensible by humans.  They both store a string in memory for later use by the program.  They are the same<sup id="a1">[[1]](#f1)</sup> even though they're not because they fulfill the same abstraction.

Let's return to that definition of abstraction:

> An *abstraction* is a concept-object created by humans for the sake of defining the common  features and uses shared by all concrete instances of that abstraction.

In the Javascript program, the variable "x" is an abstraction for a location in the computer's memory.  The "=" character is an abstraction for storing a value at that location.  The string of characters "'Hello World!'" is an abstraction for a sequence of numerical values.  And finally the whole line of code is an abstraction for the whole binary program we are comparing it to.  For our use, these two programs are equivalent.  And yet, we would almost always prefer working with the Javascript version.  Using the Javascript version, we never concern ourselves with the actual memory address or how the individual characters of the string are represented in memory.  Not worrying about these details is a huge benefit when we're trying to finish a project, and, fortunately, because it's a good abstraction, we can almost always use the Javascript (or other high-level language) version, and go about our lives pretending the binary version doesn't even exist most of the time.

### Why Abstraction Matters

In order to understand the value of abstraction we need some understanding of it's alternative: extremely complex detail.  Imagine for a moment, trying to describe your typical morning routine without the use of any abstractions:

>  At some point in time during the morning when the ambient luminance or air temperature rises to a high enough level, a particular group of neurons in my brain triggers an unknown hormonal process that causes me to experience slowly increasing levels of consciousness.  As a result, another group of neurons triggers a complex electrochemical process that results in the contraction of muscles controlling my eyelids, pulling them open.  My visual cortex takes a moment to adjust to the input and process the information in my visual field, discerning that I am in a space approximately 10' by 15', with white barriers marking its limits in all directions except for down, which is carpeted...

Alternatively, the equivalent description making suitable use of abstractions:

> I wake up in my bedroom...

Of course, if you're paying close enough attention, you will have noticed that in the first description there were STILL a number of abstractions--air, temperature, brain, muscles, etc.  It's in the nature of human language that we can't even express a thought without abstractions of some kind.  Setting that aside, however, it's clear that the second description is almost always going to be our preference for two reasons:

1.  It doesn't waste our attention on unnecessary complex details.
2.  By hiding the details "under" the abstraction of "waking up", I'm far less likely to get those details wrong when I describe my morning.  I'm free to focus on the salient events of the morning without worrying about getting all the exact neuro-chemical details correct, and I can leave those details to someone who is an expert in them.

Writing a computer program is not a substantially different task from describing your morning routine.  In writing a computer program we are, more or less, simply writing instructions for the computer, and, just like when describing the instructions for our morning routine, we are free to choose an appropriate level of abstraction for that description.  We could write the program at the level of the sequence of voltages to be sent to each pin of the CPU--the binary 1s and 0s of machine language, or we could write the program in a high-level declarative language that hides all details of implementation<sup id="a2">[[2]](#f1)</sup>, or we could choose some level of abstraction in-between these extremes.  Selecting the appropriate level of abstraction for our goals is our primary tool for managing the complexity of software development.

#### Software's Primary Technical Imperative

> Managing complexity is the most important technical topic in software development.  In my view, it's so important that Software's Primary Technical Imperative has to be *managing complexity* 
> > &mdash; Steve McConnell, *Code Complete*

Software development is so complex that the only way we can ever manage to get anything done is through the use of effective abstractions.  Computers are just too complicated for us to do much of anything beyond basic arithmetic and logic operations if we stick to writing directly in binary.  Even assembly language, which at least replaces the binary sequence of 1s and 0s with readable labels, is too labor intensive and error prone to effectively build large applications<sup id="a3">[[3]](#f3)</sup>.

Complexity is the enemy of quality and reliability in software development.  As Steve McConnell suggests, keeping complexity to a minimum is the most important thing you can do to ensure the quality of the software you create.  Managing complexity and keeping it to a minimum means that any product or project will be easier to contribute features to, easier to debug, and easier to modify.  Ultimately this means being able to produce more valuable tools and products than we would otherwise be able to if we were stuck writing in binary all the time.

### How We Use Abstraction

Now that we have a good understanding of what abstraction is and why it's valuable to us, the final question is: how do we actually use abstraction in software development?

This is a big topic.  A HUGE topic.  My copy of *Code Complete* is about 900 pages, and most of it deals with this question in its dozens of aspects and forms that crop up in software development.  If you want a really good understanding of this, start by reading *Code Complete*.  If you want to be a world-class expert in this, you'll probably have to go get a PhD.

That said, I do want to address a simple example of how abstraction works in practice.

#### Imperative Programming

Let's start with imperative (also called procedural) programming in a high-level language (e.g. Java, C++, Python, etc.).  For many software developers this is this lowest level of abstraction you'll ever work at outside of a university class that uses assembly.  As for what I mean by *imperative programming*, consider the following example (in Javascript):

```javascript
function sumArray(array) {
    let sum = 0;
    for (let i =0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
```

This is a basic, but typical example of imperative programming.  It's a function to add up the values of an array of integers and return the sum.  Notice all of the details that have been implemented by hand here--the initialization of sum and i, the tracking of i over the length of the array, manually checking that i < array.length every iteration of the loop, manually incrementing the value of i, etc.  The term "imperative" means, more or less, "related to commands".  This code is full of specific commands.  Because this is a high-level language, there's still plenty of abstraction here, I don't have to worry about memory addresses or how exactly the for-loop works, but there's a lot of detail too.  And writing all those details by hand means I have a LOT of opportunities to make mistakes.

Now, for an example like this, the level of detail probably doesn't seem too threatening, but imagine trying to write a machine learning algorithm to identify faces in images one addition operation at a time.  Is it possible?  Absolutely.  Does it seem practical?  No, I didn't think so.  The reality is that imperative programming like this is too low a level of abstraction for most large software projects.  You can do it, but you'll make far more mistakes and waste time and money doing it.  In real-world projects we almost always reach for higher levels of abstractions.

#### Object-Oriented Programming

One way of building abstractions in software development is the use object-oriented programming.  I'm going to save the details of object-oriented programming for another post, but, for now, consider this example:

```javascript
let sum = array.sum();
```

Isn't that nicer than our imperative example?  For starters, it's less than half the length, with fewer opportunities to make a mistake in typing it.  Less code means fewer bugs, usually.  The only catch here is that someone had to first implement the sum method on the Array class (or prototype, rather, because this is Javascript), but that work only had to be done once, and after that it is available to every array.  

The object-oriented approach lets us build up libraries of abstractions in the form of classes that we can reuse over and over without having to worry about their details again.  And yes, that initial work was probably done in an imperative style.  That sum method is hiding the for-loop for us, and that means that the for-loop is no longer our problem--we don't have to worry about introducing a bug writing the for-loop by hand ourselves.  Imperative programming has its place, but we should limit it to only those cases where we don't have or can't use a better abstraction.

#### Functional Programming

A third way of building abstractions is through the use of functional programming.  Consider the following example in Clojure:

```clojure
(def sum (reduce + array))
```

Although the LISP syntax may be off-putting for you, I've opted to use Clojure in this example because Javascript's functional syntax looks even more complicated than the imperative version, and doesn't show the elegance that functional programming can have.  The second line here does the exact same thing as the second line of the object-oriented example above, but with the added bonus that we never needed to implement the details.  At all.  In the object-oriented approach, someone still had to write that for-loop for us to use.  In functional programming the for-loop doesn't even exist (Clojure does have a for macro, but it's not really a loop).  This is about as abstract as summation of an array's elements can get.  We're close to SQL's level of abstraction, in fact.

There's been plenty written about the relative merits of the object-oriented vs functional approaches to building abstractions over the last few years, so all I will say here is that both are valid approaches that target slightly different types problems.  If you need an abstraction for something that a piece of data DOES, then object-oriented might be the better approach.  If you need an abstraction for something DONE WITH a piece of data, then functional programming might be the a better approach.

### Good Abstractions vs. Bad Abstractions

There are a few key features to good abstractions:

1.  Good encapsulation of the implementation -- The details of how the abstraction is implemented are irrelevant to us and all we care about it is how we use it (often called the 'interface').
2.  Consistent level of abstraction -- The level of detail required to work with the abstraction is consistent for all of its features and uses.-

When abstractions provide good encapsulation and operate at a consistent level they begin to resemble tools that we can use without thinking about them, like a hammer or a power drill.  We don't worry about the physics behind these tools, we just use them and put them back when we're done.

An example of a good abstraction is Javascript's Object:

```javascript
let hashmap = {
    a: 1,
    b: 2,
    c: 3,
    1: 'a',
    2: 'b',
    3: 'c'
};
```

Javascript's Object is, essentially, a hashmap. It allows us to use (almost) any value as a key to store and retrieve a corresponding value from the data structure.  At no point do we need to concern ourselves with how this is implemented in memory or how the data structure handles collisions or resizing, or anything.  We just add or remove values from it, accessing them when we want.  We can use it thoughtlessly, without any concern for HOW it works, like a hammer.

Consider the contrasting example of a bad abstraction:

```javascript
class Car {
    constructor(horsepower) {
        this.power = horsepower;
    } 

    public pressBrakePedal() {}

    public pressGasPedal() {}

    public putKeyInIgnition() {}

    public graspKeyInIgnition() {}

    public turnKeyToStartPosition() {}

    public turnWheelLeft(){}

    public turnWheelRight(){}

    public shiftGear(toGear) {}

    public driveToStore() {}
}
```

I'm not a fan of car analogies, but hopefully this will illustrate what the idea of consistency means when we walk about levels of abstraction.  I've omitted implementations of the methods, so imagine for argument's sake that they are implemented in an imperative style.  This car class is a bad abstraction because its methods vary widely in their level of abstraction.  Compare the abstraction of 

```javascript
Car.driveToStore()
```  

and 

```javascript
Car.putKeyInIgnition(); 
Car.graspKeyInIgnition(); 
Car.turnKeyToStartPosition(); 
Car.shiftGear('reverse');
Car.pressGasPedal();
Car.turnWheelLeft();
Car.pressBrake();
Car.shiftGear('drive');
Car.pressGasPedal();
```

These code snippets are at completely different levels of abstraction.  This makes for a bad abstraction because it requires us, the user, to keep switching our way of thinking about how we use the abstraction.  It would be like a power drill where to start the drill spinning you pull the trigger, but to stop it you have to open up the casing and disconnect the battery.  This sort of switching between levels of detail makes using the abstraction difficult and tiring.  With a good abstraction we would either work only at the low level of gear shifts and pedal presses, or only at the high level of driving to the store, but not both.  Which level is best depends on our specific needs.

### Examples at Work

Lastly, I want to point out some examples of abstraction at work in web development.

#### The Document Object Model

The most fundamental abstraction used in web development is the document object model or DOM.  The DOM is important enough to justify its own post, but it's enough to think of it as an object-oriented abstraction of an HTML document.

If you were starting from scratch, and you wanted to add interactivity to HTML, how would you do it?  A naive answer might be to add a scripting engine that can directly edit the HTML text by slicing and splicing the string representation.  Make an edit, and re-render the page.  This would work, but it would be tedious and error-prone as you'd have to implement lots of checks to make sure you didn't break any existing HTML tags.  The string editing itself would also be very slow for large HTML documents.

We could improve on this answer by implementing a better abstraction for the document.  One possible abstraction that makes intuitive sense would be a list.   A list makes sense because that's how we ordinarily perceive documents--as lists of statements to be read in a certain order.  With a list we can easily add and remove individual elements without affecting any of the other elements in the document.  This Document List Abstraction would be fine for many types of documents, but not all.  It wouldn't do a good job of representing the idea of hierarchies such as sections and sub-sections, and it would be difficult to represent something like a table, which requires two dimensions of organization instead of one.  If we want something more flexible than a simple list, the next obvious choices would be a tree or a graph.  Since these are just (essentially) more advanced versions of a list they give us all the same benefits as a list with more flexibility in what we can easily represent.

The DOM uses a tree to store all the elements of an HTML document and gives each element a set of methods that allows us to do things with those nodes (adding new children, changing their content and attributes, etc).  The DOM is the abstraction that hides the details of HTML and that allows us to build interactive webpages scalably and sanely.

#### React Components

Facebook's ReactJS library takes the DOM abstraction a step further.  Now, instead of dealing with individual DOM components, we can deal with custom components that wrap several or even hundreds of DOM components into encapsulated units.  I can have a custom Header component that wraps the entire navigation UI of my website and a custom Body component that wraps all the content, and I can work with just those components without worrying about their subcomponents.  This ability to work at a higher level of abstraction is part of what makes React so popular for building UIs.

#### Object Relational Mapping

Here's a backend development example: ORMs.  An ORM, object-relational mapping,  is an abstraction that allows us to hide the details of our database backend from server code that uses that data.  If we want, we could access the database backend directly--crafting query strings in our server code and making queries over ODBC (or its equivalent for your particular database backend), getting raw data back and then processing it.  However, this method is fraught with potential traps and risks, much like programming in binary directly would be.  We have to write code to check that our queries are 'safe,' and we have to keep track of which keys are indexed and how different tables are related, etc.  For a simple database this is not too difficult, but as databases become large and complex it becomes too much to keep track of.  An ORM allows us to hide all that complexity behind the object methods the ORM exposes.  Simple query and save methods that handle all of these safety checks and relationships for us, freeing us up to do more high-level work in the time we have.

### Using Abstractions vs Creating Abstractions

A key point in a software developer's career is the shift from simply using abstractions created by others (e.g. in the form of libraries that you import into your project) to creating and designing your own abstractions.  This is a bit like a shift from being a carpenter to being a (very hands-on) architect.  This shift is a big part of what separated "junior" developers from senior developers and team leaders.  If you're looking to advance your career and work on more complex and interesting projects, then you have to get comfortable designing and implementing new abstractions.

## Further Resources

If you want to get a better grasp of abstractions and how to apply them in software development, I recommend the following books:

* [*Code Complete* by Steve McConnell](https://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670/)
    - A massive manual of software development best practices focused on managing complexity and maximizing code quality.  It is not full of vague, meaningless advice, but rather delves into the nitty gritty of class, method, and even data design with the goal of building more maintainable and extensible programs.
* [*The Elements of Computing Systems* by Noam Nisan and Shimon Schocken](https://www.amazon.com/Elements-Computing-Systems-Building-Principles/dp/0262640686/)
    - An excellent overview of how computers work under the hood.  The greatest value of this book is that it allows you to see first hand how layers of abstraction build on each other starting with fundamental digital logic circuits and building all the way up to high level programs.  Do the projects.  All of them.  They're worth the time and effort.

## Footnotes

1. <a id="f1" />Actually the Javascript version of this string variable assignment is considerably more complex under the hood than the simple binary version I've written here.  The binary version doesn't include any string methods or garbage collection, for instance. <a href="#a1">$\hookleftarrow$</a>

2. <a id="f2"/>For example, SQL.  SQL is so high-level that it gives us no idea how the underlying data storage is implemented.  When writing SQL queries we are simply describing the result we want and the database does all the work of translating that description into the underlying operations.

3. <a id="f3"/>It's only fair to point out that we sent men to the moon with assembly language.  However, the same software so famously shown in this [picture of Margaret Hamilton](https://qz.com/wp-content/uploads/2016/07/margaret_hamilton1.jpg?quality=80&strip=all&w=640), would be much simpler to create and maintain using modern languages capable of high level abstractions.  Incidentally, the [source code from the Apollo program](https://github.com/chrislgarry/Apollo-11) is available on Github.