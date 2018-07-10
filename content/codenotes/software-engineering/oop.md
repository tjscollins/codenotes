---
title: 'Object Oriented Programming'
date: '2018-07-05'
chapter: 'Software Engineering'
order: 0
tags: ['design', 'programming', 'software', 'abstract', 'abstraction', 'object', 'oriented', 'theory']
---

More than any other topic in computer science or software engineering, I am not a fan of how object-oriented programming is generally taught to students.  I say this both from the perspective of a life-long student, a practicing software developer, and a former classroom teacher.  Typically, the concept of object-oriented programming is introduced with these four "principles":

- Abstraction
- Encapsulation
- Polymorphism
- Inheritance

My complaint about introducing object-oriented programming with these four ideas is that it does very little to teach students any of the motivation behind the object oriented paradigm or how to really think about building software systems in an object-oriented way.  These four concepts, especially the last three, overemphasize the technique of coding in particular "object-oriented languages", such as Java or C++<sup id="a1">[[1]](#f1)</sup>, and neglect the importance of how we conceptualize and design software systems.  Granted, these four ideas are important concepts, but I believe they are the wrong concepts to *start* with when trying to learn object-oriented programming.  

For evidence of this educational mismatch, I submit the mountains of brittle spaghetti code produced by developers writing programs from the basis that these four concepts define object-oriented programming, and the numerous design patterns required to work around the mental model these ideas foster.  Obviously, something is wrong with the way we learn and employ the concept of object-oriented programming in common professional usage, otherwise we wouldn't have a massive industry of books dedicated to solving the problems with the way object-oriented programming is typically performed.

I don't think it's controversial to say that there has to be a better way to program than the way object-oriented programming is typically done.  As a corollary, I suggest that there has to be a better way to understand object-oriented programming than the way it is typically taught to beginning programmers.  So how should we go about understanding object-oriented programming?

## Theory

Let's start with the observation that object-oriented programming is not a well founded theoretical concept, unlike functional programming which has its roots in lambda calculus.  This means that, inevitably, there will be disagreement over what constitutes *pure* object-oriented programming.  Regardless, I think that the best place to start is with Smalltalk, the original object-oriented programming language.

### The Origins of OOP

Alan Kay's [The Early History of Smalltalk](http://worrydream.com/EarlyHistoryOfSmalltalk/) is worth reading in its entirety if you're not already familiar with the engineering history which led to the modern personal computers most of us have grown up with today.  In the article's abstract, Kay wrote that:

> ... needs for large scope, reduction in complexity, and end-user literacy would require that data and control structures be done away with in favor of a more biological scheme of protected universal cells interacting only through messages that could mimic any desired behavior.
> > &mdash; Alan Kay, *The Early History of Smalltalk*

According to Kay, the motivation behind OOP came from the rising complexity of human-machine interaction with the first graphical user interfaces.  As these software systems grew in complexity, it became too difficult to organize the code powering the machines with procedural programs.  Just like assembly langauge before it, basic procedural languages were too limited for programmers to mentally manage large code bases.  Engineers and computer scientists were running into, in a sense, a human intellectual limitation &mdash; we needed more powerful [abstractions](/software-engineering/abstraction) in order to build more complex systems.

The metaphor that Kay (and others) hit upon was the idea of a biological organism.  When you interact with another organism &mdash; whether your neighbor, your dog, or your rose bushes &mdash; you don't worry about the incredible complexity of that organism's internal functioning.  The organism is a black box, closed to our understanding, and each organism is an incredibly complex system composed of billions of tiny cells, each of which is also a complex system in its own right.  Interestingly, these cells interact with each other only through their membranes, each hiding its internal functions from the other, and communicating only by means of chemical messages that are passed from one cell to another.  Each cell is effectively a black box to all other cells<sup id="a2">[[2]](#f2)</sup>, much as each organism is a black box to other organisms.

This is a recursive design pattern.  At each level &mdash; cell, organ, organism &mdash; we see the same organizational pattern of black boxes interacting with each other externally without interacting internally.  This recursive pattern suggested what might be a fundamental principle of the organization of large-scale systems of great complexity.  Kay wrote,

> Bob Barton ... had said ... "The basic principal of recursive design is to make the parts have the same power as the whole." For the first time I thought of the whole as the entire computer and wondered why anyone would want to divide it up into weaker things called data structures and procedures. Why not divide it up into little computers, as time sharing was starting to? But not in dozens. Why not thousands of them, each simulating a useful structure?

Here we have the crux of the insight behind OOP.  Programming before this point (circa 1966) was done primarily in a procedural (i.e. imperative with the use of subroutines to organize code) paradigm.  Code was divided into subroutines and data structures, and programs proceeded line by line as subroutines called other subroutines until the program halted.  But it is *really* difficult<sup id="a3">[[3]](#f3)</sup> to design an interactive system that way.  It would be like trying to build a house out of a forest.  It certainly can be done, but no one would choose that method when you can buy finished lumber that is pre-cut and ready to be assembled together.  Similarly, trying to build an interactive personal computer (such as the Dynabook envisioned by Kay) from a series of low-level subroutines is massively more difficult undertaking than building it out of dozens of interactive, virtual computers, each with specialized tasks that it performs as part of the whole just like the cells of an organism do.

### The Actor Model

Kay's initial versions of Smalltalk in 1971 and 1972 contributed to the inspiration for Carl Hewitt's 1973 article, [A Universal ACTOR Formalism for Artificial Intelligence](http://worrydream.com/refs/Hewitt-ActorModel.pdf).  That paper is highly abstract and, to my modern eyes, strangely organized, but the ideas of OOP are there.  To the extent that there is any mathematical formalism behind OOP, the Actor Model is it, but none of the existing OOP languages faithfully implement the Actor Model, not even Smalltalk<sup id="a4">[[4]](#f4)</sup>, which predates the articulation of the model by Hewitt.  Nonetheless, the Actor Model is useful for building our conceptual understanding of OOP [emphasis added]:

> The PLANNER project is continuing research in natural and effective means for embedding knowledge in procedures ... we have succeeded in unifying the formalism around one fundamental concept: the ACTOR. Intuitively, an ACTOR is an active agent which plays a role on cue according to a script. We use the ACTOR metaphor to emphasize the inseparability of control and data flow in our model. Data structures, functions, semaphores, monitors, ports, descriptions, Quillian nets, logical formulae, numbers, identifiers, demons, processes, contexts, and data bases can all be shown to be special cases of actors. **All of the above are objects with certain useful modes of behavior. Our formalism shows how all of the modes of behavior can be defined in terms of one kind of behavior: sending messages to actors. An actor is always invoked uniformly in exactly the same way regardless of whether it behaves as a recursive function, data structure, or process**.

Hewitt goes on to address most of the previously mentioned concepts of OOP: Abstraction, (which Hewitt calls the "Intention" or "Contract" of the actor), Encapsulation ("Procedural Embedding of Knowledge"), and Polymorphism (what Hewitt calls "Modular Equivalence").  Inheritance isn't mentioned at all, and Kay didn't consider it central to OOP either<sup id="a5">[[5]](#f5)</sup>.  It is the "sending of messages to actors" that is central to this model.  All the rest is simply details of the implementation of that central concept.

### A Definition of Object-Oriented Programming

With this background from Kay and Hewitt, we can come up with a working theoretical definition of OOP:

> Object-oriented programming is a methodology for designing large, complex software systems at scale in terms of components, known as objects, which interact with each other, in a way analagous to the interactions between biological cells, **only** by passing messages from one object to another.  No object can know anything about another object except what messages it accepts and possibly how it responds to those messages.

By thinking about OOP in these terms, many of the pain points of software engineering become much easier to avoid.  All those OOP design patterns you've heard of are really just techniques for implementing this sort of black-box message passing described by Kay and Hewitt in languages that don't properly enforce or enable this kind of "pure" message passing in the first place.

For example, making modifications to closely coupled components: any components which rely on understanding each other's internals *obviously* break from the paradigm because they are not functioning as black-box actors, like biological cells.  A red blood cell and a muscle cell know nothing of each other's internal structure, but they work together perfectly through their respective interfaces.  It is trivially easy to write Java or C++ code that couples classes to each other's implementations and breaks the paradigm.  OOP design patterns like the Abstract Factory, Observer, Iterator, etc., and "principles" like Abstraction and Encapsulation are well established techniques for staying within the "actors passing messages" paradigm.

## Practice

![Class Diagram](/images/axe-crawler.svg)

## Further Resources

There is a huge wealth of resources on object-oriented programming out there, but most of them fall into the trap I mentioned at the beginning of this article.  A few good ones:

* [*Code Complete* by Steve McConnell](https://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670/)
    - I can't sing this book's praises often enough.  OOP is a practical methodology, not a theoretical one, and this is a practical book.
* [*Object-Oriented Software Construction* by Bertrand Meyer](https://www.amazon.com/Object-Oriented-Software-Construction-Book-CD-ROM/dp/0136291554)
    - A little dated, but probably the most thorough text that addresses the theory of object-oriented programming.


## Footnotes

1. <a id="f1" />It's worth pointing out that neither Java nor C++ are object-oriented in the strict sense that, for example, Smalltalk is.  While they are used to write object-oriented code, they (C++ especially so) allow you to write code that is not object-oriented at all.  There is no enforcement of object-oriented programming on the users of these languages by the languages themselves. <a href="#a1">$\hookleftarrow$</a>

2.  <a id="f2" />Molecular biologists might take issue with my description of cellular machinery here.  That's okay &mdash; the point isn't that this model of cellular biology is technically correct, but that it is a useful model for complex software that humans interact with. <a href="#a2">$\hookleftarrow$</a>

3. <a id="f3"/>Though not, in theory at any rate, impossible.  It's important to remember that *all* turing complete langauges are computationally equivalent to each other, and code can be translated from one to the other.  If you can express it in a high-level language, you can express it in assembly language too.  This should be obvious, given that all high-level languages must be compiled down to assembly.  Therefore, in the strict sense, object-oriented programming didn't make anything possible that wasn't possible already.  What it did was make it easier for *human* programmers to mentally accomplish the task of writing these new programs.  This is the case with most software engineering advancements; they make it easier to do things that were already possible but, perhaps, impractical. <a href="#a3">$\hookleftarrow$</a>

4. <a id="f4"/>Kay wrote in *The Early History of Smalltalk*:
> In the first Actor paper the resemblance to Smalltalk is at its closest. The paths later diverged, partly because we were much more interested in making things than theorizing, and partly because we had something no one else had: Chuck Thacker's Interim Dynabook.

In other words, OOP was motivated first and foremost by the goal of producing interactive computer systems for the general public, and not by theoretical computer science ideas about computability and concurrency.  OOP is and has always been, at its core, a practical method for producing useful software for users.  Even when it goes horribly wrong, as it sometimes does, that's the goal behind it. <a href="#a4">$\hookleftarrow$</a>

5.  <a id="f5"/>In [this famous email](http://userpage.fu-berlin.de/~ram/pub/pub_jf47ht81Ht/doc_kay_oop_en) Kay answers a question regarding his definition of OOP.  It is worth noting that he does not include ANY of the four ideas typically cited as defining OOP. <a href="#a5">$\hookleftarrow$</a>