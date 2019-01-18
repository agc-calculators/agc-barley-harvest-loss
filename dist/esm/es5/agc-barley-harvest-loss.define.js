
// AgcBarleyHarvestLoss: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './agc-barley-harvest-loss.core.js';
import {
  AgcBarleyHarvestLoss,
  AgcBarleyHarvestLossInputs,
  AgcBarleyHarvestLossProgress,
  AgcBarleyHarvestLossResults,
  AgcBarleyHarvestLossResultsPlaceholder
} from './agc-barley-harvest-loss.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    AgcBarleyHarvestLoss,
    AgcBarleyHarvestLossInputs,
    AgcBarleyHarvestLossProgress,
    AgcBarleyHarvestLossResults,
    AgcBarleyHarvestLossResultsPlaceholder
  ], opts);
}
