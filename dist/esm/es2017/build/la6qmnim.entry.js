/*! Built with http://stenciljs.com */
import { h } from '../agc-barley-harvest-loss.core.js';

class AgcBarleyHarvestLossResultsPlaceholder {
    render() {
        const placeholder = () => h("span", null,
            h("i", { class: "mark" }),
            " ",
            h("i", { class: "mark" }),
            " ",
            h("i", { class: "mark" }),
            " ",
            h("i", { class: "mark" }));
        return (h("section", null,
            h("ul", { class: "agc-results-placeholder" },
                h("li", null,
                    h("h2", { "data-i18n": "results.yield-loss" }, "Yield Loss"),
                    placeholder()))));
    }
    static get is() { return "agc-barley-harvest-loss-results-placeholder"; }
}

export { AgcBarleyHarvestLossResultsPlaceholder };
