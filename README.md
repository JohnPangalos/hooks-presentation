# Hooks Presentation

## Example 1

- This is a very simple implementation of the useState hook
- This example illustrates closures, which are just functions that can access
  outside their scope.
- [More on closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- It introduces a very nasty potential race condition in Reacts new
  [Concurrent mode](https://reactjs.org/docs/concurrent-mode-intro.html) this is
  most likely one of the reasons the value is returned ant not the getter.

## Example 2

- If we want a similar api to react hooks we can implement it like the hooks in
  example 2.
- With this example we run into something called a Stale Closure.
  - On initialization of the useState function `_val` is captured and not
    updated on subsequent calls, i.e. this is a copy of `_val` not a reference
    to it.

## Example 3

- Basically the idea of this example is to replicate the functionality of react and how it will re-render a component on state update.
- This works because we are not getting the state (or refereshing the closure) on every render.
- The state (in this case singleton) is then saved in our version react.
