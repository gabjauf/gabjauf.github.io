---
title: 'Module design'
description: 'What we probably should think about when designing modules'
pubDate: 'Nov 24 2023'
heroImage: '/blog-placeholder-3.jpg'
---

Today I stumbled upon some code found on an npm module:

```js
function template(string) {
    var args

    if (arguments.length === 2 && typeof arguments[1] === "object") {
        args = arguments[1]
    } else {
        args = new Array(arguments.length - 1)
        for (var i = 1; i < arguments.length; ++i) {
            args[i - 1] = arguments[i]
        }
    }

    if (!args || !args.hasOwnProperty) {
        args = {}
    }

    return string.replace(nargs, function replaceArg(match, i, index) {
        var result

        if (string[index - 1] === "{" &&
            string[index + match.length] === "}") {
            return i
        } else {
            result = args.hasOwnProperty(i) ? args[i] : null
            if (result === null || result === undefined) {
                return ""
            }

            return result
        }
    })
}

```

Basically, what this does is just a "{}" based template engine that you can use like this:

```js
greeting = template("Hello {name}, you have {count} unread messages", {
    name: "Robert",
    count: 12
})
```

This is legacy code but still pretty simple right ?
So now, what is the issue with this code ?

Well, simply that the input "string" can be absolutely anything! There are no checks whether this is really a string or something else. This code is then unsafe to run.

## Ensuring parameters types

I can see two ways to ensure function parameters types today:

- Static analysis (for example typescript)
- Runtime validation

### Static analysis

Typescript is great! It maintains coherence inside the system, given that the inputs you put in the system (user, bot or even dev provided) are exactly like the types you defined for them.

Say now we changed our previous function:

```js
function template(string: string) {
...
}
```

Does it change a thing ?
From a developer point of view, yes. Now this is a small module, with a perfectly well defined interface, that we can just integrate in our code! Now, if we pass a number to this function, the program won't compile until we fix it.

But let's say that we are lazy and we pass the input as "any". Are we still safe ?

### Runtime validation

Static analysis is insufficient because it is more of a theoretical way of securing programs, provided that they are used with the right inputs. In real life thought, this is not always the case and it can lead to very serious threats.

To mitigate this, we need the use of runtime validation that will coerce the data structures passed as inputs.

Here for example, we could do something like this:

```js
function template(string: string) {
  if (typeof string !== "string") {
    // throw error
  }
}
```

We now check the value at runtime, ensuring the function cannot be called with non-compliant data-structures.

## Modules

Personnal opinion here. I can call something a module when:

- Boundaries are identifiable
- Boundaries are enforced

The first thing is about intent and usability. A module is identifiable only when you know how to call it, how to pass it inputs and the outputs that you get.
The second one is enforcing boundaries so that the inner coherence is maintained, especially if there is some stateful programming happening.

A module does not need to be big. Just a small function like the one I gave as an example is sufficient. We can also consider micro-services as modules and the fact that if they do not provide both of the characteristics above, they may either not be usable or robust.

## Trust

When you install a program on your computer, you sign an implicit contract: you believe that what you installed is safe to run or use. You also believe that it is robust, will work every time you launch it and that it cannot be exploited by hackers easily.

Now, if every single module you install as a developer is like the one upward, do you really think it is possible to make such programs? Even if you are the best developer on earth and you can patch everything from the outside, with unlimited blood, sweat, and tears?

We hold, as developers, great responsibilities here. When we make the choice to publish on npm something that is not robust and bullet proof. When we make the choice to use a non-robust module from the npm registry. When we make the choice to not migrate to more robust modules. (and the last one is also a consequence of the choice to not look under the carpet)



<br>
Further notes:

- Yeah, the code is a bit messy, and there is probably a lot to say about the "arguments", that part does not communicate well its intents.
- The npm module from which this code was extracted has been downloaded 1,905,290 times last week.
