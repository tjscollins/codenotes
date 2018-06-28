---
title: 'Abstract Data Types'
date:  '2018-06-27'
chapter: 'Computer Science'
order: 0
tags: ['abstract', 'data', 'type', 'theory', 'computer', 'science', 'programming', 'model', 'modeling', 'architecture']
---

When presented with a new software engineering problem, how do you get started building a solution?  Inexperienced developers often jump directly to implementation: if they need to build a REST API server, they start coding up route handlers, one by one, checking off requirements and building functionality as they go.  Especially self-taught developers without a formal computer science education.  While it's true that features do get completed this way, most of the time you will find yourself hitting architectural bottlenecks as the application grows in complexity.

Here's a simplistic example: let's say you need to code up a web-crawler that will check every page of your company's website for broken links.  So you start cowboy coding a simple Nodejs crawler that pulls down the content of the home page, scrapes it for links, adds the links to an array, and then does the same thing to every one of those links.  You add a few lines of code to log out any response codes of 400 or greater, and you're done.  Your little crawler might look something like this:

```javascript
let pages = ["https://companywebsite.com"];
let results = []

while (pages.length > 0) {
    let tempResults = await Promise.all(pages.map(scrapeLinks));
    pages = [];

    tempResults.map(({linkStatus, newLinks}) => {
        newLinks.map(pages.push);
        results.push(linkStatus);
    });
}

results.map((linkStatus) => {
    if (linkStatus.status >= 400) {
        console.log(linkStatus);
    }
});
```

What could go wrong?

There's a lot that could go wrong with this code, obviously, and most of it could have been prevented by spending a few minutes reflecting on abstract data types.

## Theory

First off, an abstract data type (ADT) is not the same thing as a data structure.  Data structures *implement* ADTs.  An ADT is a theoretical mathematical model of a data type that defines the operations that can be performed on that data type and how the data types internal state responds to those operations.  When we design computer programs it is best to think in terms of ADTs rather than specific data structures, at least initially.  This is because thinking in terms of ADTs allows us to focus on WHAT our program needs to do, leaving HOW for later.  In essence, thinking in terms of ADTs lets us design our program's [abstractions](/software-engineering/abstraction) first, before we delve into implementation.

### Types of Abstract Data Types

Steven Skiena's *The Algorithm Design Manual* identifies three fundamental abstract data types: containers, dictionaries, and priority queues<sup id="a1">[[1]](#f1)</sup>.  It turns out that all three of them are relevant to the problem above.

#### Containers

The idea of a container is about as simple as an ADT can get.  It's a data type that allows us to store and retrieve items without necessarily knowing or caring what those items are.  It's a box.  You put stuff in, and you take stuff out.  You don't need to know what's in the box in order to take stuff out of it either.  You just reach in, and grab something. Or you grab something and put it into the container.  That's it.

This simple idea makes for an equally simple specification.  We expect a container to accept two operations:

- $push(x)$ &mdash; places item $x$ into the container 
- $pop()$ &mdash; removes an item from the container

That's it.  So long as we can perform those two operations (even if they are named differently), we have a container.  The two main types of containers, *stacks* and *queues*, differ only in how they select which element will be removed by the pop operation.  A stack removes the last element that inserted (known as Last-In-First-Out or LIFO ordering), while a queue returns the first element inserted of those currently remaining in the data structure (known as First-In-First-Out or FIFO ordering).

#### Dictionaries

A dictionary is a more subtle ADT than a container, at least to me.  The basic idea behind the dictionary ADT is to store items in it, and retrieve them based on their value.  In other words, you have to know what an item is get it back from a dictionary.  Same as you needing to know what word you're looking for in a language dictionary.  You can't see if a word is there, unless you know what word you're looking for.

The specification of a dictionary is more complex than a container too:

- $search(k)$ &mdash; search the dictionary for item $k$ and return that item
- $insert(k)$ &mdash; place item $k$ in the dictionary
- $delete(k)$ &mdash; remove item $k$ from the dictionary

While there are only three essential operations for the dictionary ADT, most implementations support a number of other operations, depending on their implementation.

#### Priority Queues

I'll admit, I found Skiena's mention of priority queues as a fundamental ADT confusing, given that queues are already a type of container.  But on reflection, it seems that the specification is substantially different, regardless of the name.  A priority queue is more like a schedule than a container.  In particular, it must support:

- $insert(x)$ &mdash; insert item $x$ into the queue
- $current()$ &mdash; return the current item from the queue
- $advance()$ &mdash; remove the current item from the queue and move to the next item.

Unlike a regular queue, the order of insertion is irrelevant.  Instead the ordering is based on some property of the items inserted into the queue.  This may be as simple as a numerical sorted order, or could be based on some complex algorithm determining priority, but either way each element $x$ is assigned a priority $p$ and the queue sorts the elements based on that priority.

## Practice

Let's return to our simple NodeJS web crawler checking for broken links.  The cowboy code above will, in the strictest possible sense, work.  However, it has a number of very serious problems.  The most serious of course is that it will probably never finish crawling even if we assume that the scrapeLinks function filters out any links that lead out of the company site.  This depends on the links on your company's website, but for my company that while loop would never halt correctly because it would keep bouncing back and forth between the same pages which link to each other until it runs out of memory and crashes.  Even if the while loop does halt, this script has the potential to make an exponential number of http requests in a very short time span, which in the best case means your server will simply block and ignore the requests.

So the question is, how can ADTs help us fix it?

### Tracking What We've Already Seen

The first problem is that we need a data structure that can keep track of what we've already seen.  Thinking in terms of the operations we'll need:

- We need to be able to *search* to see if a url is already in the data structure so we can skip it if we've already seen it.
- We need to be able to *insert* new urls into the data structure so we'll know we've seen them before.

Which ADT supports search and insert?  The dictionary.  We don't need the delete functionality, but that's okay.  It's the only one that has what we need.

### Storing What We'll Check Next

We need to store the new urls in a second data structure that holds the urls we haven't checked yet.  The obvious choice here is a container because we only need push and pop.  Our cowboy coder implementation uses the pages array as a container, but makes the mistake of trying to check every value in the array at once instead of sequentially.  Since the array might have hundreds of urls in it, that would mean hundreds of nearly simultaneous http requests.  Probably not good.  So we'll want to replace that naive use of an array with either a stack or a queue.  For our purposes order doesn't matter, so I'll go with a stack because Javascript's array type implements the stack for us so long as we use it correctly.

### Storing Our Results

We need to store our results in a way that *prioritizes* any responses with status codes 400 or greater.  Which abstract data type allows us to prioritize items based on some property of that item?  That's right, a priority queue<sup id="a2">[[2]](#f2)</sup>.  By inserting each result into a priority queue where the elements are prioritized by their status code, we can quickly read off all the results with status codes 400 or greater after we finish crawling the website.

### Implementation

Now we're ready to properly implement our little crawler:

```javascript
const pages = ["https://companywebsite.com"];
// PriorityQueue class implemented with a max-heap, accepts a key function that defines how items will be prioritized
const results = new MaxPriorityQueue(({status}) => status);
// Set class implements dictionary ADT 
const pagesSeen = new Set(); 

while (pages.length > 0) {
    const page = pages.pop();
    const tempResults = await scrapeLinks(page);
    pagesSeen.add(page);   

    tempResults.forEach(({linkStatus, newLinks}) => {
        newLinks.forEach(link => {
            if (!pagesSeen.contains(link)) {
                pages.push(link)
                results.insert(linkStatus);
            }
        });
    });
}

while (results.current().status >= 400) {
    console.log(results.current());
    results.advance();
}
```

The code's a little longer now, but it's guaranteed to finish (assuming a finite, reasonable number of pages on our site, and that the scrapeLinks function filters out external pages), and it only makes one request at a time instead of, potentially, thousands<sup id="a3">[[3]](#f3)</sup>.  It's still pretty simplistic, but it will do its job.  

In actual practice you'd probably not bother implementing a crawler from scratch, opting instead to use an off-the-shelf library such as scrapy.  On the other hand, for a task as simple as this, configuring scrapy would probably be more work.  Either way, you're sure to encounter problems like this where spending a little time thinking about the ADTs that your program needs will save you time and headaches debugging later.

## Further Resources

There's not a ton of resources on ADTs specifically that I could find.  Mostly you find them discussed as a minor point in books that deal with data structures and their implementations or in books about object-oriented programming.

* [*The Algorithm Design Manual* by Steven S Skiena](https://www.amazon.com/Algorithm-Design-Manual-Steven-Skiena/dp/1849967202/)
    - More approachable than CLRS (in my opinion), but still very thorough and rigorous.  The highlight of this book is the "War Stories" sprinkled throughout where Skiena gives examples from industry where particular concepts were the key to solving a real problem.  This is something missing from many computer science texts, and it's worth getting the book just for those in.  An excellent reference book.

* [*Code Complete* by Steve McConnel](https://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670/)
    - This book is a treasure.  With regards to ADTs, see Section 6.1: "Class Foundations: Abstract Data Types."  It does a very good and thorough job of explaining the practical value of designing your program in terms of abstract data types.

## Footnotes

1. <a id="f1"/>I should point out that a lot of programming books discuss ADTs in the context of object-oriented programming and class interface design.  However, these sorts of ADTs such as Date, Student, Employee, etc. are somewhat different than the ADTs I'm discussing in this article.  While they satisfy the same definition (i.e. they're mathematical models that describe the operations that may be performed on the ADT and how its state changes in response to those operations), they are more narrowly domain specific than the more general ADTs I'm interested in discussing here.  I will discuss these sorts of problem-specific ADTs and their use as [abstractions](/software-engineering/abstraction) in a later post about object-oriented programming<a href="#a1">$\hookleftarrow$</a>.

2. <a id="f2"/>A priority queue could be overkill here, actually.  If we don't actually care about the ordering of the results, and we only care about whether the status code is 400 or greater we can get away with a filtering list, which will be faster than a priority queue.  This is because we can build a filtered list in $O(n)$ time while a priority queue can only be built in $O(n\ log\ n)$ time<a href="#a2">$\hookleftarrow$</a>.

3. <a id="f3"/> In reality, one request at a time is probably going to be too slow for our purposes.  Ideally we'd have some kind of configurable rate-limiting on our crawler where we could set a maximum number of requests per second.  Implementing that, however, is beyond the scope of this article<a href="#a3">$\hookleftarrow$</a>.