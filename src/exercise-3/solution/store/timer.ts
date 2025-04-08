import { map } from "nanostores";

export const $timer = map({
  seconds: 0,
  isRunning: false
});

let interval: number | null = null;

export function startTimer() {
  if (!$timer.get().isRunning) {
    $timer.setKey('isRunning', true);

    interval = window.setInterval(() => {
      const currentSeconds = $timer.get().seconds;
      $timer.setKey('seconds', currentSeconds + 1);
    }, 1000);
  }
}

export function pauseTimer() {
  if ($timer.get().isRunning) {
    $timer.setKey('isRunning', false);

    if (interval !== null) {
      clearInterval(interval);
      interval = null;
    }
  }
}

export function resetTimer() {
  pauseTimer();
  $timer.setKey('seconds', 0);
}
