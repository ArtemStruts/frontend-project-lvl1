#!/usr/bin/env node
import progressionGame from '../games/progression.js';
import { congratulations } from '../src/index.js';

if (progressionGame === true) {
  congratulations();
}
