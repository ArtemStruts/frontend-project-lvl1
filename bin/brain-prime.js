#!/usr/bin/env node
import primeGame from '../games/prime.js';
import { congratulations } from '../src/index.js';

if (primeGame === true) {
  congratulations();
}
