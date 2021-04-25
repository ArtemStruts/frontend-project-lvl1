#!/usr/bin/env node
import calcGame from '../games/calc.js';
import { congratulations } from '../src/index.js';

if (calcGame === true) {
  congratulations();
}
