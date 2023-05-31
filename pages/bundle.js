var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "X", ({ value: true }));
const disposeFuncs = [];
function createExternalRoot(container) {
    return {
        render(context) {
            const { api, config: { searchIdentifier }, options, } = context;
            const extraFilters = ({
                fieldName: "taxonomy_items.64.*",
                values: [1025],
                nestedValues: [],
                operator: 15,
                visible: true,
                hidden: true,
                role: "Parent",
                multiSelect: true,
                filterType: 1, //RequestedFilterType.InFilter,         
            });
            // 1. Add the event listener for the search component.
            const disposeFunc = api.search.addListener(searchIdentifier, "BEFORE_SEARCH", ({ searchRequest }) => {
                // Do something with searchRequest here; e.g. modify a field name of a filter.
                // searchRequest.fieldFilters[0].operator = 14;
                // searchRequest.fieldFilters[0].hidden = false;
                // searchRequest.fieldFilters[0].visible = true;
                searchRequest.fieldFilters.push(extraFilters);
                console.log(searchRequest.fieldFilters);
            });
            // 2. Store the dispose function.
            disposeFuncs.push(disposeFunc);
            // 3. Activate the search component.
            api.search.activate(searchIdentifier);
        },
        unmount() {
            disposeFuncs.forEach(dispose => dispose());
        },
    };
}
exports.Z = createExternalRoot;

})();

var __webpack_exports___esModule = __webpack_exports__.X;
var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports___esModule as __esModule, __webpack_exports__default as default };

//# sourceMappingURL=bundle.js.map