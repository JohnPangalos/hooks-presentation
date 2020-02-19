# Hooks Presentation

## Reasons to use hooks

- Reuse of stateful logic
  - Right now if you want to have the same code that manages the state of a
    component that code has to be duplicated.
  - Hooks allows you to break out this logic into functions which can be reused.
  - Same functionality as HOC (Higher-Order Components) but with a simpilier
    syntax and simpler use.
- Reduce complexity
  - No more react lifecycle. The lifecycle often complicates projects and can
    lead to bugs if things aren't cleaned up properly.
  - Allows splitting on based on what's related instead of lifecycle.
- No more classes
  - You wont have to use Javascript's this which can be confusing.
  - No more remebering to bind functions.
  - Classes don't work well with tooling, they don't minify well and have problems with hot reloading.

[Reference](https://reactjs.org/docs/hooks-intro.html)

## Implementation

The following is a summary of the examples for our own basic implementation of
React hooks.

[Reference](https://www.netlify.com/blog/2019/03/11/deep-dive-how-do-react-hooks-really-work/)

### Example 1

- This is a very simple implementation of the useState hook
- This example illustrates closures, which are just functions that can access
  outside their scope.
- [More on closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- It introduces a very nasty potential race condition in Reacts new
  [Concurrent mode](https://reactjs.org/docs/concurrent-mode-intro.html) this is
  most likely one of the reasons the value is returned ant not the getter.

### Example 2

- If we want a similar api to react hooks we can implement it like the hooks in
  example 2.
- With this example we run into something called a Stale Closure.
  - On initialization of the useState function `_val` is captured and not
    updated on subsequent calls, i.e. this is a copy of `_val` not a reference
    to it.

### Example 3

- Basically the idea of this example is to replicate the functionality of react
  and how it will re-render a component on state update.
- This works because we are not getting the state (or refereshing the closure)
  on every render.
- The state (in this case singleton) is then saved in our version react.

### Example 4

- This adds the use effect hook in the same way, by using a closure.
- It's pretty simple, it goes through all the dependencies and sees if any of
  them have updated. It compares the dependencies to ones that the hook has
  saved in it's closure.
