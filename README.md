<div align="center">

# **T**est **D**riven **D**evelopment (**TDD**)

**T**est **D**riven **D**evelopment (**TDD**)
in Typescript for people who want to write _**more reliable code**_.
</div>

## Why?

_Project(s) without tests_ often end up looking like they are stuck together with _**duct tape**_ ...

![duct tape car fail](https://i.imgur.com/9cNriGK.jpg)

Change _one_ part and _another_ stops working? "_Fixing_" one bug, creates another?

Wouldn't you *prefer* it if everything was
***consistent*** and beautifully integrated? <br />
What if _everyone_ on your team worked _like **clock-work**_ in a disciplined order... like a _**Formula 1 Crew**_ ...

![formula 1 pit stop](https://i.imgur.com/0NDbaam.jpg)

Test Driven Development (TDD) makes your team a well-oiled machine which means you can go _**faster**_.

Once you have a ***suite*** of tests that run on every change, you will
begin to develop a whole other level of ***confidence*** in your codebase
and will discover a new freedom to be ***creative*** without fear of
"*breaking*" anything unexpectedly; truly *game-changing*.

### What is TDD?

> Test-driven development (TDD) is an evolutionary approach to development
which combines test-first development, where you write a test before you write
just enough production code to fulfil that test, and refactoring. In other words,
it’s one way to think through your requirements
or design before you write your functional code.

*From [Introduction to Test Driven Development (TDD)](https://agiledata.org/essays/tdd.html)*

## How?

The *first* thing you need to *understand*
is that writing code following TDD (*discipline*)
is a (*slightly*) different approach from simply
diving into solving the problem (*without a test*).

When reading about TDD you will usually see the expression:
"***Red, Green, Refactor***":

![TDD Cycle: Red, Green, Refactor](https://i.imgur.com/RQe2NQT.jpg)

What this means is that TDD follows a **3-step process**:

1. ***Write a Failing Test*** - Understand the (user)
requirements/story well enough to write a test for what you expect.
(_the test should **fail** initially - hence it being "Red"_)

2. ***Make the (failing) Test Pass*** - Write (*only*) the code you need
to make the (*failing*) test pass, while ensuring your existing/previous tests
all still pass (*no regressions*).

3. ***Refactor the code you wrote*** take the time to tidy up the code
*you* wrote to make it simpler
(*for your future self or colleagues to understand*)
before you need to ship the current feature, do it.

> Thankfully, because you will have good tests,
you don't _need_ to do any refactoring up-front,
you can always do refactoring _later_
if performance bottlenecks are discovered.
Most programming languages have very efficient compilers/interpreters
that remove much of the need for refactoring.
And if you use a linter your code will be naturally "tidy".

To develop the *habit(s)* you will need to be successful with TDD
(*and software engineering in general*)
we need to ***write*** a ***test first*** (*and watch it fail*)
and *then* write the code required to make the test pass.

Writing a _**failing test**_,
before writing the code may seem *counter-intuitive*,
*time consuming* or even "*tedious*" at _**first**_.
But we _urge_ you to think of it this way:

> The ***test*** is the ***question*** you are asking <br />
> your code is the ***answer*** to the question. <br />
> By having a _clear_ question, you can always check
> that your code is working, <br />
> because it _**consistently**_
> gives you the same answer(s) ... _no surprises_,
even when you're working with a large, inter-dependent code base!

## Setup the project 
- clone the repo 
- yarn or npm install 

## Running tests 
- yarn test --watch 