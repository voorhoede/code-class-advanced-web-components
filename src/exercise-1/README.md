# Exercise 1: Web Component Timer

In this exercise we will create a web component with self-contained state.

## Task Description

You need to implement a timer web component with controls to start, pause, and reset the timer.

## Steps

1. Complete the `render()` method in `script.ts` by adding:
   - An element to display the time (with class "timer")
   - Three buttons: Start, Pause, Reset

2. Connect the HTML elements to the properties:
   - `timerElement`
   - `startButton`
   - `pauseButton`
   - `resetButton`

3. Add event listeners to the buttons and link them to the appropriate methods:
   - `startTimer()`
   - `pauseTimer()`
   - `resetTimer()`

4. Ensure the `timerElement` updates when `seconds` changes by modifying the setter

## Notes

- You can use the `formatTime` function from "../utils/format-time" to display the seconds in a readable format
- The timer should increment every second when running
- Make sure to properly handle the component's state (`isRunning`, `interval`, etc.)
