#!/usr/bin/env node
import brainEven, { name } from '../src/ev.js';

if (brainEven() !== false) {
  console.log(`Congratulations, ${name}!`);
}
