# Exercise 3: State Management with Nanostores

In this exercise, we'll implement state management using the Nanostores library to connect multiple web components.

## Task Description

Similar to Exercise 2, we have a timer split into multiple components, but this time we'll use a centralized store to manage state instead of custom events.

## Steps

1. Examine the store in `/store/timer.ts` which contains the timer state
   - The store should have properties for `seconds` and `isRunning`

2. Connect the button components to the store:
   - In the `StartButton` component, update the timer state to start running
   - In the `PauseButton` component, update the timer state to stop running
   - In the `ResetButton` component, reset the timer state

3. Implement the main Timer component:
   - Subscribe to store updates
   - Update the displayed time when the store changes
   - Implement the interval logic based on the `isRunning` state

## File Structure

```
/components/
  PauseButton.ts
  ResetButton.ts
  StartButton.ts
  Timer.ts
/store/
  timer.ts
```

## Notes

- Use `$timer.setKey()` to update specific properties in the store
- Use `$timer.subscribe()` to react to state changes
- Remember to handle interval creation and cleanup based on the `isRunning` state
- Clean up subscriptions and intervals when components are disconnected
