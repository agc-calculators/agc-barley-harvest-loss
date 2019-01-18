/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface AgcBarleyHarvestLossInputs {
    'socket': string;
  }
  interface AgcBarleyHarvestLossInputsAttributes extends StencilHTMLAttributes {
    'socket'?: string;
  }

  interface AgcBarleyHarvestLossProgress {
    'socket': string;
  }
  interface AgcBarleyHarvestLossProgressAttributes extends StencilHTMLAttributes {
    'socket'?: string;
  }

  interface AgcBarleyHarvestLossResultsPlaceholder {}
  interface AgcBarleyHarvestLossResultsPlaceholderAttributes extends StencilHTMLAttributes {}

  interface AgcBarleyHarvestLossResults {
    'socket': string;
  }
  interface AgcBarleyHarvestLossResultsAttributes extends StencilHTMLAttributes {
    'socket'?: string;
  }

  interface AgcBarleyHarvestLoss {
    'mode': 'full' | 'step';
    'socket': string;
    'tract': string;
    'units': any;
  }
  interface AgcBarleyHarvestLossAttributes extends StencilHTMLAttributes {
    'mode'?: 'full' | 'step';
    'onAgcCalculated'?: (event: CustomEvent) => void;
    'onAgcStepChanged'?: (event: CustomEvent) => void;
    'socket'?: string;
    'tract'?: string;
    'units'?: any;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AgcBarleyHarvestLossInputs': Components.AgcBarleyHarvestLossInputs;
    'AgcBarleyHarvestLossProgress': Components.AgcBarleyHarvestLossProgress;
    'AgcBarleyHarvestLossResultsPlaceholder': Components.AgcBarleyHarvestLossResultsPlaceholder;
    'AgcBarleyHarvestLossResults': Components.AgcBarleyHarvestLossResults;
    'AgcBarleyHarvestLoss': Components.AgcBarleyHarvestLoss;
  }

  interface StencilIntrinsicElements {
    'agc-barley-harvest-loss-inputs': Components.AgcBarleyHarvestLossInputsAttributes;
    'agc-barley-harvest-loss-progress': Components.AgcBarleyHarvestLossProgressAttributes;
    'agc-barley-harvest-loss-results-placeholder': Components.AgcBarleyHarvestLossResultsPlaceholderAttributes;
    'agc-barley-harvest-loss-results': Components.AgcBarleyHarvestLossResultsAttributes;
    'agc-barley-harvest-loss': Components.AgcBarleyHarvestLossAttributes;
  }


  interface HTMLAgcBarleyHarvestLossInputsElement extends Components.AgcBarleyHarvestLossInputs, HTMLStencilElement {}
  var HTMLAgcBarleyHarvestLossInputsElement: {
    prototype: HTMLAgcBarleyHarvestLossInputsElement;
    new (): HTMLAgcBarleyHarvestLossInputsElement;
  };

  interface HTMLAgcBarleyHarvestLossProgressElement extends Components.AgcBarleyHarvestLossProgress, HTMLStencilElement {}
  var HTMLAgcBarleyHarvestLossProgressElement: {
    prototype: HTMLAgcBarleyHarvestLossProgressElement;
    new (): HTMLAgcBarleyHarvestLossProgressElement;
  };

  interface HTMLAgcBarleyHarvestLossResultsPlaceholderElement extends Components.AgcBarleyHarvestLossResultsPlaceholder, HTMLStencilElement {}
  var HTMLAgcBarleyHarvestLossResultsPlaceholderElement: {
    prototype: HTMLAgcBarleyHarvestLossResultsPlaceholderElement;
    new (): HTMLAgcBarleyHarvestLossResultsPlaceholderElement;
  };

  interface HTMLAgcBarleyHarvestLossResultsElement extends Components.AgcBarleyHarvestLossResults, HTMLStencilElement {}
  var HTMLAgcBarleyHarvestLossResultsElement: {
    prototype: HTMLAgcBarleyHarvestLossResultsElement;
    new (): HTMLAgcBarleyHarvestLossResultsElement;
  };

  interface HTMLAgcBarleyHarvestLossElement extends Components.AgcBarleyHarvestLoss, HTMLStencilElement {}
  var HTMLAgcBarleyHarvestLossElement: {
    prototype: HTMLAgcBarleyHarvestLossElement;
    new (): HTMLAgcBarleyHarvestLossElement;
  };

  interface HTMLElementTagNameMap {
    'agc-barley-harvest-loss-inputs': HTMLAgcBarleyHarvestLossInputsElement
    'agc-barley-harvest-loss-progress': HTMLAgcBarleyHarvestLossProgressElement
    'agc-barley-harvest-loss-results-placeholder': HTMLAgcBarleyHarvestLossResultsPlaceholderElement
    'agc-barley-harvest-loss-results': HTMLAgcBarleyHarvestLossResultsElement
    'agc-barley-harvest-loss': HTMLAgcBarleyHarvestLossElement
  }

  interface ElementTagNameMap {
    'agc-barley-harvest-loss-inputs': HTMLAgcBarleyHarvestLossInputsElement;
    'agc-barley-harvest-loss-progress': HTMLAgcBarleyHarvestLossProgressElement;
    'agc-barley-harvest-loss-results-placeholder': HTMLAgcBarleyHarvestLossResultsPlaceholderElement;
    'agc-barley-harvest-loss-results': HTMLAgcBarleyHarvestLossResultsElement;
    'agc-barley-harvest-loss': HTMLAgcBarleyHarvestLossElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
