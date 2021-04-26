#!/usr/bin/env node
import gcdGame from '../games/gcd.js';
import { congratulations } from '../src/index.js';

if (gcdGame === true) {
  congratulations();
}
