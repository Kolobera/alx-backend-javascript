#!/usr/bin/node
export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    /*eslint-disable */
    const task = true;
    const task2 = false;
  }
  return [task, task2];
}
