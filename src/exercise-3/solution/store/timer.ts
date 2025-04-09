import { map } from "nanostores";

export const $timer = map({
  seconds: 0,
  isRunning: false
});
