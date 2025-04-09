# Exercise 2: Component Communication with Custom Events

In this exercise, we'll work with a timer that has been split into multiple web components. Your task is to implement component communication using custom events.

## Task Description

The timer functionality has been divided into separate components:
- A parent `Timer` component that manages the timer state
- Three child button components (`StartButton`, `PauseButton`, and `ResetButton`) for controlling the timer

Your job is to connect these components together using custom events.

## Steps

1. Implement custom events in each button component:
   - In the `StartButton` component, dispatch a custom `timer-start` event when clicked
   - In the `PauseButton` component, dispatch a custom `timer-pause` event when clicked
   - In the `ResetButton` component, dispatch a custom `timer-reset` event when clicked

2. Add event listeners in the parent component:
   - Update the `Timer` component to listen for these custom events
   - Connect the events to the appropriate methods (`startTimer()`, `pauseTimer()`, and `resetTimer()`)

## File Structure

```
/components/
  PauseButton.ts
  ResetButton.ts
  StartButton.ts
  Timer.ts
```

## Notes

- Use `CustomEvent` to create and dispatch events from the button components
- Remember to set `composed: true` and `bubbles: true` to allow events to cross shadow DOM boundaries
- Register event listeners in the parent component after the shadow DOM is rendered
