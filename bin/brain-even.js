#!/usr/bin/env node
import evenGame from '../games/even.js';
import { congratulations } from '../src/index.js';

if (evenGame === true) {
  congratulations();
}
