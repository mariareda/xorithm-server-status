module.exports = [
"[project]/xorithm-server-status/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint no-restricted-syntax: 0, prefer-template: 0, guard-for-in: 0
   ---
   These rules are preventing the performance optimizations below.
 */ /**
 * Compose classes from multiple sources.
 *
 * @example
 * ```tsx
 * const slots = {
 *  root: ['root', 'primary'],
 *  label: ['label'],
 * };
 *
 * const getUtilityClass = (slot) => `MuiButton-${slot}`;
 *
 * const classes = {
 *   root: 'my-root-class',
 * };
 *
 * const output = composeClasses(slots, getUtilityClass, classes);
 * // {
 * //   root: 'MuiButton-root MuiButton-primary my-root-class',
 * //   label: 'MuiButton-label',
 * // }
 * ```
 *
 * @param slots a list of classes for each possible slot
 * @param getUtilityClass a function to resolve the class based on the slot name
 * @param classes the input classes from props
 * @returns the resolved classes for all slots
 */ __turbopack_context__.s([
    "default",
    ()=>composeClasses
]);
function composeClasses(slots, getUtilityClass, classes = undefined) {
    const output = {};
    for(const slotName in slots){
        const slot = slots[slotName];
        let buffer = '';
        let start = true;
        for(let i = 0; i < slot.length; i += 1){
            const value = slot[i];
            if (value) {
                buffer += (start === true ? '' : ' ') + getUtilityClass(value);
                start = false;
                if (classes && classes[value]) {
                    buffer += ' ' + classes[value];
                }
            }
        }
        output[slotName] = buffer;
    }
    return output;
}
}),
"[project]/xorithm-server-status/node_modules/@mui/utils/esm/refType/refType.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/prop-types/index.js [ssr] (ecmascript)");
;
const refType = __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
    __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].func,
    __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].object
]);
const __TURBOPACK__default__export__ = refType;
}),
"[project]/xorithm-server-status/node_modules/@mui/utils/esm/getDisplayName/getDisplayName.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getDisplayName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/react-is/index.js [ssr] (ecmascript)");
;
function getFunctionComponentName(Component, fallback = '') {
    return Component.displayName || Component.name || fallback;
}
function getWrappedName(outerType, innerType, wrapperName) {
    const functionName = getFunctionComponentName(innerType);
    return outerType.displayName || (functionName !== '' ? `${wrapperName}(${functionName})` : wrapperName);
}
function getDisplayName(Component) {
    if (Component == null) {
        return undefined;
    }
    if (typeof Component === 'string') {
        return Component;
    }
    if (typeof Component === 'function') {
        return getFunctionComponentName(Component, 'Component');
    }
    // TypeScript can't have components as objects but they exist in the form of `memo` or `Suspense`
    if (typeof Component === 'object') {
        switch(Component.$$typeof){
            case __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ForwardRef"]:
                return getWrappedName(Component, Component.render, 'ForwardRef');
            case __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Memo"]:
                return getWrappedName(Component, Component.type, 'memo');
            default:
                return undefined;
        }
    }
    return undefined;
}
}),
"[project]/xorithm-server-status/node_modules/@mui/utils/esm/chainPropTypes/chainPropTypes.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>chainPropTypes
]);
function chainPropTypes(propType1, propType2) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return function validate(...args) {
        return propType1(...args) || propType2(...args);
    };
}
}),
"[project]/xorithm-server-status/node_modules/@mui/utils/esm/elementTypeAcceptingRef/elementTypeAcceptingRef.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/prop-types/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$chainPropTypes$2f$chainPropTypes$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/utils/esm/chainPropTypes/chainPropTypes.js [ssr] (ecmascript)");
;
;
function isClassComponent(elementType) {
    // elementType.prototype?.isReactComponent
    const { prototype = {} } = elementType;
    return Boolean(prototype.isReactComponent);
}
function elementTypeAcceptingRef(props, propName, componentName, location, propFullName) {
    const propValue = props[propName];
    const safePropName = propFullName || propName;
    if ("TURBOPACK compile-time truthy", 1) {
        return null;
    }
    //TURBOPACK unreachable
    ;
    let warningHint;
}
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$chainPropTypes$2f$chainPropTypes$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].elementType, elementTypeAcceptingRef);
}),
"[project]/xorithm-server-status/node_modules/@mui/utils/esm/isHostComponent/isHostComponent.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Determines if a given element is a DOM element name (i.e. not a React component).
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function isHostComponent(element) {
    return typeof element === 'string';
}
const __TURBOPACK__default__export__ = isHostComponent;
}),
"[project]/xorithm-server-status/node_modules/@mui/utils/esm/debounce/debounce.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Corresponds to 10 frames at 60 Hz.
// A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
__turbopack_context__.s([
    "default",
    ()=>debounce
]);
function debounce(func, wait = 166) {
    let timeout;
    function debounced(...args) {
        const later = ()=>{
            // @ts-ignore
            func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    }
    debounced.clear = ()=>{
        clearTimeout(timeout);
    };
    return debounced;
}
}),
"[project]/xorithm-server-status/node_modules/@mui/utils/esm/useForkRef/useForkRef.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useForkRef
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
'use client';
;
function useForkRef(...refs) {
    const cleanupRef = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"](undefined);
    const refEffect = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"]((instance)=>{
        const cleanups = refs.map((ref)=>{
            if (ref == null) {
                return null;
            }
            if (typeof ref === 'function') {
                const refCallback = ref;
                const refCleanup = refCallback(instance);
                return typeof refCleanup === 'function' ? refCleanup : ()=>{
                    refCallback(null);
                };
            }
            ref.current = instance;
            return ()=>{
                ref.current = null;
            };
        });
        return ()=>{
            cleanups.forEach((refCleanup)=>refCleanup?.());
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, refs);
    return __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"](()=>{
        if (refs.every((ref)=>ref == null)) {
            return null;
        }
        return (value)=>{
            if (cleanupRef.current) {
                cleanupRef.current();
                cleanupRef.current = undefined;
            }
            if (value != null) {
                cleanupRef.current = refEffect(value);
            }
        };
    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- intentionally ignoring that the dependency array must be an array literal
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, refs);
}
}),
"[project]/xorithm-server-status/node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js [ssr] (ecmascript)");
'use client';
;
;
/**
 * Inspired by https://github.com/facebook/react/issues/14099#issuecomment-440013892
 * See RFC in https://github.com/reactjs/rfcs/pull/220
 */ function useEventCallback(fn) {
    const ref = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"](fn);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(()=>{
        ref.current = fn;
    });
    return __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"]((...args)=>// @ts-expect-error hide `this`
        (0, ref.current)(...args)).current;
}
const __TURBOPACK__default__export__ = useEventCallback;
}),
"[project]/xorithm-server-status/node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ownerDocument
]);
function ownerDocument(node) {
    return node && node.ownerDocument || document;
}
}),
"[project]/xorithm-server-status/node_modules/@mui/utils/esm/ownerWindow/ownerWindow.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ownerWindow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$ownerDocument$2f$ownerDocument$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js [ssr] (ecmascript)");
;
function ownerWindow(node) {
    const doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$ownerDocument$2f$ownerDocument$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(node);
    return doc.defaultView || window;
}
}),
"[project]/xorithm-server-status/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>generateUtilityClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [ssr] (ecmascript)");
;
function generateUtilityClasses(componentName, slots, globalStatePrefix = 'Mui') {
    const result = {};
    slots.forEach((slot)=>{
        result[slot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(componentName, slot, globalStatePrefix);
    });
    return result;
}
}),
"[project]/xorithm-server-status/node_modules/@mui/utils/esm/appendOwnerState/appendOwnerState.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$isHostComponent$2f$isHostComponent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/utils/esm/isHostComponent/isHostComponent.js [ssr] (ecmascript)");
;
/**
 * Type of the ownerState based on the type of an element it applies to.
 * This resolves to the provided OwnerState for React components and `undefined` for host components.
 * Falls back to `OwnerState | undefined` when the exact type can't be determined in development time.
 */ /**
 * Appends the ownerState object to the props, merging with the existing one if necessary.
 *
 * @param elementType Type of the element that owns the `existingProps`. If the element is a DOM node or undefined, `ownerState` is not applied.
 * @param otherProps Props of the element.
 * @param ownerState
 */ function appendOwnerState(elementType, otherProps, ownerState) {
    if (elementType === undefined || (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$isHostComponent$2f$isHostComponent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(elementType)) {
        return otherProps;
    }
    return {
        ...otherProps,
        ownerState: {
            ...otherProps.ownerState,
            ...ownerState
        }
    };
}
const __TURBOPACK__default__export__ = appendOwnerState;
}),
"[project]/xorithm-server-status/node_modules/@mui/utils/esm/resolveComponentProps/resolveComponentProps.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * If `componentProps` is a function, calls it with the provided `ownerState`.
 * Otherwise, just returns `componentProps`.
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function resolveComponentProps(componentProps, ownerState, slotState) {
    if (typeof componentProps === 'function') {
        return componentProps(ownerState, slotState);
    }
    return componentProps;
}
const __TURBOPACK__default__export__ = resolveComponentProps;
}),
"[project]/xorithm-server-status/node_modules/@mui/utils/esm/extractEventHandlers/extractEventHandlers.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Extracts event handlers from a given object.
 * A prop is considered an event handler if it is a function and its name starts with `on`.
 *
 * @param object An object to extract event handlers from.
 * @param excludeKeys An array of keys to exclude from the returned object.
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function extractEventHandlers(object, excludeKeys = []) {
    if (object === undefined) {
        return {};
    }
    const result = {};
    Object.keys(object).filter((prop)=>prop.match(/^on[A-Z]/) && typeof object[prop] === 'function' && !excludeKeys.includes(prop)).forEach((prop)=>{
        result[prop] = object[prop];
    });
    return result;
}
const __TURBOPACK__default__export__ = extractEventHandlers;
}),
"[project]/xorithm-server-status/node_modules/@mui/utils/esm/omitEventHandlers/omitEventHandlers.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Removes event handlers from the given object.
 * A field is considered an event handler if it is a function with a name beginning with `on`.
 *
 * @param object Object to remove event handlers from.
 * @returns Object with event handlers removed.
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function omitEventHandlers(object) {
    if (object === undefined) {
        return {};
    }
    const result = {};
    Object.keys(object).filter((prop)=>!(prop.match(/^on[A-Z]/) && typeof object[prop] === 'function')).forEach((prop)=>{
        result[prop] = object[prop];
    });
    return result;
}
const __TURBOPACK__default__export__ = omitEventHandlers;
}),
"[project]/xorithm-server-status/node_modules/@mui/utils/esm/mergeSlotProps/mergeSlotProps.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/clsx/dist/clsx.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$extractEventHandlers$2f$extractEventHandlers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/utils/esm/extractEventHandlers/extractEventHandlers.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$omitEventHandlers$2f$omitEventHandlers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/utils/esm/omitEventHandlers/omitEventHandlers.js [ssr] (ecmascript)");
;
;
;
/**
 * Merges the slot component internal props (usually coming from a hook)
 * with the externally provided ones.
 *
 * The merge order is (the latter overrides the former):
 * 1. The internal props (specified as a getter function to work with get*Props hook result)
 * 2. Additional props (specified internally on a Base UI component)
 * 3. External props specified on the owner component. These should only be used on a root slot.
 * 4. External props specified in the `slotProps.*` prop.
 * 5. The `className` prop - combined from all the above.
 * @param parameters
 * @returns
 */ function mergeSlotProps(parameters) {
    const { getSlotProps, additionalProps, externalSlotProps, externalForwardedProps, className } = parameters;
    if (!getSlotProps) {
        // The simpler case - getSlotProps is not defined, so no internal event handlers are defined,
        // so we can simply merge all the props without having to worry about extracting event handlers.
        const joinedClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(additionalProps?.className, className, externalForwardedProps?.className, externalSlotProps?.className);
        const mergedStyle = {
            ...additionalProps?.style,
            ...externalForwardedProps?.style,
            ...externalSlotProps?.style
        };
        const props = {
            ...additionalProps,
            ...externalForwardedProps,
            ...externalSlotProps
        };
        if (joinedClasses.length > 0) {
            props.className = joinedClasses;
        }
        if (Object.keys(mergedStyle).length > 0) {
            props.style = mergedStyle;
        }
        return {
            props,
            internalRef: undefined
        };
    }
    // In this case, getSlotProps is responsible for calling the external event handlers.
    // We don't need to include them in the merged props because of this.
    const eventHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$extractEventHandlers$2f$extractEventHandlers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({
        ...externalForwardedProps,
        ...externalSlotProps
    });
    const componentsPropsWithoutEventHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$omitEventHandlers$2f$omitEventHandlers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(externalSlotProps);
    const otherPropsWithoutEventHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$omitEventHandlers$2f$omitEventHandlers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(externalForwardedProps);
    const internalSlotProps = getSlotProps(eventHandlers);
    // The order of classes is important here.
    // Emotion (that we use in libraries consuming Base UI) depends on this order
    // to properly override style. It requires the most important classes to be last
    // (see https://github.com/mui/material-ui/pull/33205) for the related discussion.
    const joinedClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(internalSlotProps?.className, additionalProps?.className, className, externalForwardedProps?.className, externalSlotProps?.className);
    const mergedStyle = {
        ...internalSlotProps?.style,
        ...additionalProps?.style,
        ...externalForwardedProps?.style,
        ...externalSlotProps?.style
    };
    const props = {
        ...internalSlotProps,
        ...additionalProps,
        ...otherPropsWithoutEventHandlers,
        ...componentsPropsWithoutEventHandlers
    };
    if (joinedClasses.length > 0) {
        props.className = joinedClasses;
    }
    if (Object.keys(mergedStyle).length > 0) {
        props.style = mergedStyle;
    }
    return {
        props,
        internalRef: internalSlotProps.ref
    };
}
const __TURBOPACK__default__export__ = mergeSlotProps;
}),
"[project]/xorithm-server-status/node_modules/@mui/utils/esm/isMuiElement/isMuiElement.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isMuiElement
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
function isMuiElement(element, muiNames) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["isValidElement"](element) && muiNames.indexOf(// For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    element.type.muiName ?? element.type?._payload?.value?.muiName) !== -1;
}
}),
"[project]/xorithm-server-status/node_modules/@mui/utils/esm/getReactElementRef/getReactElementRef.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getReactElementRef
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
function getReactElementRef(element) {
    // 'ref' is passed as prop in React 19, whereas 'ref' is directly attached to children in older versions
    if (parseInt(__TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["version"], 10) >= 19) {
        return element?.props?.ref || null;
    }
    // @ts-expect-error element.ref is not included in the ReactElement type
    // https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/70189
    return element?.ref || null;
}
}),
"[project]/xorithm-server-status/node_modules/@mui/utils/esm/HTMLElementType/HTMLElementType.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HTMLElementType
]);
function HTMLElementType(props, propName, componentName, location, propFullName) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const propValue = props[propName];
    const safePropName = propFullName || propName;
    if (propValue == null) {
        return null;
    }
    if (propValue && propValue.nodeType !== 1) {
        return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. ` + `Expected an HTMLElement.`);
    }
    return null;
}
}),
"[project]/xorithm-server-status/node_modules/@mui/utils/esm/useSlotProps/useSlotProps.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useForkRef$2f$useForkRef$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/utils/esm/useForkRef/useForkRef.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$appendOwnerState$2f$appendOwnerState$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/utils/esm/appendOwnerState/appendOwnerState.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$mergeSlotProps$2f$mergeSlotProps$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/utils/esm/mergeSlotProps/mergeSlotProps.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$resolveComponentProps$2f$resolveComponentProps$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/utils/esm/resolveComponentProps/resolveComponentProps.js [ssr] (ecmascript)");
'use client';
;
;
;
;
/**
 * @ignore - do not document.
 * Builds the props to be passed into the slot of an unstyled component.
 * It merges the internal props of the component with the ones supplied by the user, allowing to customize the behavior.
 * If the slot component is not a host component, it also merges in the `ownerState`.
 *
 * @param parameters.getSlotProps - A function that returns the props to be passed to the slot component.
 */ function useSlotProps(parameters) {
    const { elementType, externalSlotProps, ownerState, skipResolvingSlotProps = false, ...other } = parameters;
    const resolvedComponentsProps = skipResolvingSlotProps ? {} : (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$resolveComponentProps$2f$resolveComponentProps$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(externalSlotProps, ownerState);
    const { props: mergedProps, internalRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$mergeSlotProps$2f$mergeSlotProps$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({
        ...other,
        externalSlotProps: resolvedComponentsProps
    });
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useForkRef$2f$useForkRef$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(internalRef, resolvedComponentsProps?.ref, parameters.additionalProps?.ref);
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$appendOwnerState$2f$appendOwnerState$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(elementType, {
        ...mergedProps,
        ref
    }, ownerState);
    return props;
}
const __TURBOPACK__default__export__ = useSlotProps;
}),
"[project]/xorithm-server-status/node_modules/@mui/utils/esm/getScrollbarSize/getScrollbarSize.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// A change of the browser zoom change the scrollbar size.
// Credit https://github.com/twbs/bootstrap/blob/488fd8afc535ca3a6ad4dc581f5e89217b6a36ac/js/src/util/scrollbar.js#L14-L18
__turbopack_context__.s([
    "default",
    ()=>getScrollbarSize
]);
function getScrollbarSize(win = window) {
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
    const documentWidth = win.document.documentElement.clientWidth;
    return win.innerWidth - documentWidth;
}
}),
"[project]/xorithm-server-status/node_modules/@mui/utils/esm/integerPropType/integerPropType.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getTypeByValue",
    ()=>getTypeByValue
]);
function getTypeByValue(value) {
    const valueType = typeof value;
    switch(valueType){
        case 'number':
            if (Number.isNaN(value)) {
                return 'NaN';
            }
            if (!Number.isFinite(value)) {
                return 'Infinity';
            }
            if (value !== Math.floor(value)) {
                return 'float';
            }
            return 'number';
        case 'object':
            if (value === null) {
                return 'null';
            }
            return value.constructor.name;
        default:
            return valueType;
    }
}
function requiredInteger(props, propName, componentName, location) {
    const propValue = props[propName];
    if (propValue == null || !Number.isInteger(propValue)) {
        const propType = getTypeByValue(propValue);
        return new RangeError(`Invalid ${location} \`${propName}\` of type \`${propType}\` supplied to \`${componentName}\`, expected \`integer\`.`);
    }
    return null;
}
function validator(props, propName, componentName, location) {
    const propValue = props[propName];
    if (propValue === undefined) {
        return null;
    }
    return requiredInteger(props, propName, componentName, location);
}
function validatorNoop() {
    return null;
}
validator.isRequired = requiredInteger;
validatorNoop.isRequired = validatorNoop;
const integerPropType = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : validator;
const __TURBOPACK__default__export__ = integerPropType;
}),
"[project]/xorithm-server-status/node_modules/@mui/utils/esm/useLazyRef/useLazyRef.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useLazyRef
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
'use client';
;
const UNINITIALIZED = {};
function useLazyRef(init, initArg) {
    const ref = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"](UNINITIALIZED);
    if (ref.current === UNINITIALIZED) {
        ref.current = init(initArg);
    }
    return ref;
}
}),
"[project]/xorithm-server-status/node_modules/@mui/utils/esm/useOnMount/useOnMount.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useOnMount
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
'use client';
;
const EMPTY = [];
function useOnMount(fn) {
    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- no need to put `fn` in the dependency array
    /* eslint-disable react-hooks/exhaustive-deps */ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"](fn, EMPTY);
/* eslint-enable react-hooks/exhaustive-deps */ }
}),
"[project]/xorithm-server-status/node_modules/@mui/utils/esm/useTimeout/useTimeout.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Timeout",
    ()=>Timeout,
    "default",
    ()=>useTimeout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useLazyRef$2f$useLazyRef$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/utils/esm/useLazyRef/useLazyRef.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useOnMount$2f$useOnMount$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/utils/esm/useOnMount/useOnMount.js [ssr] (ecmascript)");
'use client';
;
;
class Timeout {
    static create() {
        return new Timeout();
    }
    currentId = null;
    /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */ start(delay, fn) {
        this.clear();
        this.currentId = setTimeout(()=>{
            this.currentId = null;
            fn();
        }, delay);
    }
    clear = ()=>{
        if (this.currentId !== null) {
            clearTimeout(this.currentId);
            this.currentId = null;
        }
    };
    disposeEffect = ()=>{
        return this.clear;
    };
}
function useTimeout() {
    const timeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useLazyRef$2f$useLazyRef$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(Timeout.create).current;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useOnMount$2f$useOnMount$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(timeout.disposeEffect);
    return timeout;
}
}),
"[project]/xorithm-server-status/node_modules/@mui/utils/esm/elementAcceptingRef/elementAcceptingRef.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/prop-types/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$chainPropTypes$2f$chainPropTypes$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/utils/esm/chainPropTypes/chainPropTypes.js [ssr] (ecmascript)");
;
;
function isClassComponent(elementType) {
    // elementType.prototype?.isReactComponent
    const { prototype = {} } = elementType;
    return Boolean(prototype.isReactComponent);
}
function acceptingRef(props, propName, componentName, location, propFullName) {
    const element = props[propName];
    const safePropName = propFullName || propName;
    if ("TURBOPACK compile-time truthy", 1) {
        return null;
    }
    //TURBOPACK unreachable
    ;
    let warningHint;
    const elementType = undefined;
}
const elementAcceptingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$chainPropTypes$2f$chainPropTypes$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].element, acceptingRef);
elementAcceptingRef.isRequired = (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$chainPropTypes$2f$chainPropTypes$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].element.isRequired, acceptingRef);
const __TURBOPACK__default__export__ = elementAcceptingRef;
}),
"[project]/xorithm-server-status/node_modules/@mui/utils/esm/setRef/setRef.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * TODO v5: consider making it private
 *
 * passes {value} to {ref}
 *
 * WARNING: Be sure to only call this inside a callback that is passed as a ref.
 * Otherwise, make sure to cleanup the previous {ref} if it changes. See
 * https://github.com/mui/material-ui/issues/13539
 *
 * Useful if you want to expose the ref of an inner component to the public API
 * while still using it inside the component.
 * @param ref A ref callback or ref object. If anything falsy, this is a no-op.
 */ __turbopack_context__.s([
    "default",
    ()=>setRef
]);
function setRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    } else if (ref) {
        ref.current = value;
    }
}
}),
"[project]/xorithm-server-status/node_modules/@mui/utils/esm/createChainedFunction/createChainedFunction.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Safe chained function.
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 */ __turbopack_context__.s([
    "default",
    ()=>createChainedFunction
]);
function createChainedFunction(...funcs) {
    return funcs.reduce((acc, func)=>{
        if (func == null) {
            return acc;
        }
        return function chainedFunction(...args) {
            acc.apply(this, args);
            func.apply(this, args);
        };
    }, ()=>{});
}
}),
"[project]/xorithm-server-status/node_modules/@mui/utils/esm/useControlled/useControlled.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useControlled
]);
// TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- process.env never changes, dependency arrays are intentionally ignored
/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */ var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
'use client';
;
function useControlled(props) {
    const { controlled, default: defaultProp, name, state = 'value' } = props;
    // isControlled is ignored in the hook dependency lists as it should never change.
    const { current: isControlled } = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"](controlled !== undefined);
    const [valueState, setValue] = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"](defaultProp);
    const value = isControlled ? controlled : valueState;
    if ("TURBOPACK compile-time truthy", 1) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"](()=>{
            if (isControlled !== (controlled !== undefined)) {
                console.error([
                    `MUI: A component is changing the ${isControlled ? '' : 'un'}controlled ${state} state of ${name} to be ${isControlled ? 'un' : ''}controlled.`,
                    'Elements should not switch from uncontrolled to controlled (or vice versa).',
                    `Decide between using a controlled or uncontrolled ${name} ` + 'element for the lifetime of the component.',
                    "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.",
                    'More info: https://fb.me/react-controlled-components'
                ].join('\n'));
            }
        }, [
            state,
            name,
            controlled
        ]);
        const { current: defaultValue } = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"](defaultProp);
        __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"](()=>{
            if (!isControlled && JSON.stringify(defaultProp) !== JSON.stringify(defaultValue)) {
                console.error([
                    `MUI: A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. ` + `To suppress this warning opt to use a controlled ${name}.`
                ].join('\n'));
            }
        }, [
            JSON.stringify(defaultProp)
        ]);
    }
    const setValueIfUncontrolled = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"]((newValue)=>{
        if (!isControlled) {
            setValue(newValue);
        }
    }, []);
    // TODO: provide overloads for the useControlled function to account for the case where either
    // controlled or default is not undefined.
    // In that case the return type should be [T, React.Dispatch<React.SetStateAction<T>>]
    // otherwise it should be [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>]
    return [
        value,
        setValueIfUncontrolled
    ];
}
}),
"[project]/xorithm-server-status/node_modules/@mui/utils/esm/isFocusVisible/isFocusVisible.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Returns a boolean indicating if the event's target has :focus-visible
 */ __turbopack_context__.s([
    "default",
    ()=>isFocusVisible
]);
function isFocusVisible(element) {
    try {
        return element.matches(':focus-visible');
    } catch (error) {
        // Do not warn on jsdom tests, otherwise all tests that rely on focus have to be skipped
        // Tests that rely on `:focus-visible` will still have to be skipped in jsdom
        if (("TURBOPACK compile-time value", "development") !== 'production' && !window.navigator.userAgent.includes('jsdom')) {
            console.warn([
                'MUI: The `:focus-visible` pseudo class is not supported in this browser.',
                'Some components rely on this feature to work properly.'
            ].join('\n'));
        }
    }
    return false;
}
}),
"[project]/xorithm-server-status/node_modules/@mui/system/esm/preprocessStyles.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>preprocessStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$esm$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/styled-engine/esm/index.js [ssr] (ecmascript) <locals>");
;
function preprocessStyles(input) {
    const { variants, ...style } = input;
    const result = {
        variants,
        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$esm$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["internal_serializeStyles"])(style),
        isProcessed: true
    };
    // Not supported on styled-components
    if (result.style === style) {
        return result;
    }
    if (variants) {
        variants.forEach((variant)=>{
            if (typeof variant.style !== 'function') {
                variant.style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$esm$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["internal_serializeStyles"])(variant.style);
            }
        });
    }
    return result;
}
}),
"[project]/xorithm-server-status/node_modules/@mui/system/esm/createStyled/createStyled.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createStyled,
    "shouldForwardProp",
    ()=>shouldForwardProp,
    "systemDefaultTheme",
    ()=>systemDefaultTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$esm$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/styled-engine/esm/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/utils/esm/deepmerge/deepmerge.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$capitalize$2f$capitalize$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/utils/esm/capitalize/capitalize.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$getDisplayName$2f$getDisplayName$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/utils/esm/getDisplayName/getDisplayName.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createTheme$2f$createTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/system/esm/createTheme/createTheme.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$styleFunctionSx$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$preprocessStyles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/system/esm/preprocessStyles.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
const systemDefaultTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createTheme$2f$createTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])();
function shouldForwardProp(prop) {
    return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
}
function shallowLayer(serialized, layerName) {
    if (layerName && serialized && typeof serialized === 'object' && serialized.styles && !serialized.styles.startsWith('@layer') // only add the layer if it is not already there.
    ) {
        serialized.styles = `@layer ${layerName}{${String(serialized.styles)}}`;
    }
    return serialized;
}
function defaultOverridesResolver(slot) {
    if (!slot) {
        return null;
    }
    return (_props, styles)=>styles[slot];
}
function attachTheme(props, themeId, defaultTheme) {
    props.theme = isObjectEmpty(props.theme) ? defaultTheme : props.theme[themeId] || props.theme;
}
function processStyle(props, style, layerName) {
    /*
   * Style types:
   *  - null/undefined
   *  - string
   *  - CSS style object: { [cssKey]: [cssValue], variants }
   *  - Processed style object: { style, variants, isProcessed: true }
   *  - Array of any of the above
   */ const resolvedStyle = typeof style === 'function' ? style(props) : style;
    if (Array.isArray(resolvedStyle)) {
        return resolvedStyle.flatMap((subStyle)=>processStyle(props, subStyle, layerName));
    }
    if (Array.isArray(resolvedStyle?.variants)) {
        let rootStyle;
        if (resolvedStyle.isProcessed) {
            rootStyle = layerName ? shallowLayer(resolvedStyle.style, layerName) : resolvedStyle.style;
        } else {
            const { variants, ...otherStyles } = resolvedStyle;
            rootStyle = layerName ? shallowLayer((0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$esm$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["internal_serializeStyles"])(otherStyles), layerName) : otherStyles;
        }
        return processStyleVariants(props, resolvedStyle.variants, [
            rootStyle
        ], layerName);
    }
    if (resolvedStyle?.isProcessed) {
        return layerName ? shallowLayer((0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$esm$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["internal_serializeStyles"])(resolvedStyle.style), layerName) : resolvedStyle.style;
    }
    return layerName ? shallowLayer((0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$esm$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["internal_serializeStyles"])(resolvedStyle), layerName) : resolvedStyle;
}
function processStyleVariants(props, variants, results = [], layerName = undefined) {
    let mergedState; // We might not need it, initialized lazily
    variantLoop: for(let i = 0; i < variants.length; i += 1){
        const variant = variants[i];
        if (typeof variant.props === 'function') {
            mergedState ??= {
                ...props,
                ...props.ownerState,
                ownerState: props.ownerState
            };
            if (!variant.props(mergedState)) {
                continue;
            }
        } else {
            for(const key in variant.props){
                if (props[key] !== variant.props[key] && props.ownerState?.[key] !== variant.props[key]) {
                    continue variantLoop;
                }
            }
        }
        if (typeof variant.style === 'function') {
            mergedState ??= {
                ...props,
                ...props.ownerState,
                ownerState: props.ownerState
            };
            results.push(layerName ? shallowLayer((0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$esm$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["internal_serializeStyles"])(variant.style(mergedState)), layerName) : variant.style(mergedState));
        } else {
            results.push(layerName ? shallowLayer((0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$esm$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["internal_serializeStyles"])(variant.style), layerName) : variant.style);
        }
    }
    return results;
}
function createStyled(input = {}) {
    const { themeId, defaultTheme = systemDefaultTheme, rootShouldForwardProp = shouldForwardProp, slotShouldForwardProp = shouldForwardProp } = input;
    function styleAttachTheme(props) {
        attachTheme(props, themeId, defaultTheme);
    }
    const styled = (tag, inputOptions = {})=>{
        // If `tag` is already a styled component, filter out the `sx` style function
        // to prevent unnecessary styles generated by the composite components.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$esm$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["internal_mutateStyles"])(tag, (styles)=>styles.filter((style)=>style !== __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$styleFunctionSx$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]));
        const { name: componentName, slot: componentSlot, skipVariantsResolver: inputSkipVariantsResolver, skipSx: inputSkipSx, // TODO v6: remove `lowercaseFirstLetter()` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        overridesResolver = defaultOverridesResolver(lowercaseFirstLetter(componentSlot)), ...options } = inputOptions;
        const layerName = componentName && componentName.startsWith('Mui') || !!componentSlot ? 'components' : 'custom';
        // if skipVariantsResolver option is defined, take the value, otherwise, true for root and false for other slots.
        const skipVariantsResolver = inputSkipVariantsResolver !== undefined ? inputSkipVariantsResolver : // TODO v6: remove `Root` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        componentSlot && componentSlot !== 'Root' && componentSlot !== 'root' || false;
        const skipSx = inputSkipSx || false;
        let shouldForwardPropOption = shouldForwardProp;
        // TODO v6: remove `Root` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        if (componentSlot === 'Root' || componentSlot === 'root') {
            shouldForwardPropOption = rootShouldForwardProp;
        } else if (componentSlot) {
            // any other slot specified
            shouldForwardPropOption = slotShouldForwardProp;
        } else if (isStringTag(tag)) {
            // for string (html) tag, preserve the behavior in emotion & styled-components.
            shouldForwardPropOption = undefined;
        }
        const defaultStyledResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$esm$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(tag, {
            shouldForwardProp: shouldForwardPropOption,
            label: generateStyledLabel(componentName, componentSlot),
            ...options
        });
        const transformStyle = (style)=>{
            // - On the server Emotion doesn't use React.forwardRef for creating components, so the created
            //   component stays as a function. This condition makes sure that we do not interpolate functions
            //   which are basically components used as a selectors.
            // - `style` could be a styled component from a babel plugin for component selectors, This condition
            //   makes sure that we do not interpolate them.
            if (style.__emotion_real === style) {
                return style;
            }
            if (typeof style === 'function') {
                return function styleFunctionProcessor(props) {
                    return processStyle(props, style, props.theme.modularCssLayers ? layerName : undefined);
                };
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["isPlainObject"])(style)) {
                const serialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$preprocessStyles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(style);
                return function styleObjectProcessor(props) {
                    if (!serialized.variants) {
                        return props.theme.modularCssLayers ? shallowLayer(serialized.style, layerName) : serialized.style;
                    }
                    return processStyle(props, serialized, props.theme.modularCssLayers ? layerName : undefined);
                };
            }
            return style;
        };
        const muiStyledResolver = (...expressionsInput)=>{
            const expressionsHead = [];
            const expressionsBody = expressionsInput.map(transformStyle);
            const expressionsTail = [];
            // Preprocess `props` to set the scoped theme value.
            // This must run before any other expression.
            expressionsHead.push(styleAttachTheme);
            if (componentName && overridesResolver) {
                expressionsTail.push(function styleThemeOverrides(props) {
                    const theme = props.theme;
                    const styleOverrides = theme.components?.[componentName]?.styleOverrides;
                    if (!styleOverrides) {
                        return null;
                    }
                    const resolvedStyleOverrides = {};
                    // TODO: v7 remove iteration and use `resolveStyleArg(styleOverrides[slot])` directly
                    // eslint-disable-next-line guard-for-in
                    for(const slotKey in styleOverrides){
                        resolvedStyleOverrides[slotKey] = processStyle(props, styleOverrides[slotKey], props.theme.modularCssLayers ? 'theme' : undefined);
                    }
                    return overridesResolver(props, resolvedStyleOverrides);
                });
            }
            if (componentName && !skipVariantsResolver) {
                expressionsTail.push(function styleThemeVariants(props) {
                    const theme = props.theme;
                    const themeVariants = theme?.components?.[componentName]?.variants;
                    if (!themeVariants) {
                        return null;
                    }
                    return processStyleVariants(props, themeVariants, [], props.theme.modularCssLayers ? 'theme' : undefined);
                });
            }
            if (!skipSx) {
                expressionsTail.push(__TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$styleFunctionSx$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]);
            }
            // This function can be called as a tagged template, so the first argument would contain
            // CSS `string[]` values.
            if (Array.isArray(expressionsBody[0])) {
                const inputStrings = expressionsBody.shift();
                // We need to add placeholders in the tagged template for the custom functions we have
                // possibly added (attachTheme, overrides, variants, and sx).
                const placeholdersHead = new Array(expressionsHead.length).fill('');
                const placeholdersTail = new Array(expressionsTail.length).fill('');
                let outputStrings;
                // prettier-ignore
                {
                    outputStrings = [
                        ...placeholdersHead,
                        ...inputStrings,
                        ...placeholdersTail
                    ];
                    outputStrings.raw = [
                        ...placeholdersHead,
                        ...inputStrings.raw,
                        ...placeholdersTail
                    ];
                }
                // The only case where we put something before `attachTheme`
                expressionsHead.unshift(outputStrings);
            }
            const expressions = [
                ...expressionsHead,
                ...expressionsBody,
                ...expressionsTail
            ];
            const Component = defaultStyledResolver(...expressions);
            if (tag.muiName) {
                Component.muiName = tag.muiName;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                Component.displayName = generateDisplayName(componentName, componentSlot, tag);
            }
            return Component;
        };
        if (defaultStyledResolver.withConfig) {
            muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
        }
        return muiStyledResolver;
    };
    return styled;
}
function generateDisplayName(componentName, componentSlot, tag) {
    if (componentName) {
        return `${componentName}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$capitalize$2f$capitalize$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(componentSlot || '')}`;
    }
    return `Styled(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$getDisplayName$2f$getDisplayName$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(tag)})`;
}
function generateStyledLabel(componentName, componentSlot) {
    let label;
    if ("TURBOPACK compile-time truthy", 1) {
        if (componentName) {
            // TODO v6: remove `lowercaseFirstLetter()` in the next major release
            // For more details: https://github.com/mui/material-ui/pull/37908
            label = `${componentName}-${lowercaseFirstLetter(componentSlot || 'Root')}`;
        }
    }
    return label;
}
function isObjectEmpty(object) {
    // eslint-disable-next-line
    for(const _ in object){
        return false;
    }
    return true;
}
// https://github.com/emotion-js/emotion/blob/26ded6109fcd8ca9875cc2ce4564fee678a3f3c5/packages/styled/src/utils.js#L40
function isStringTag(tag) {
    return typeof tag === 'string' && // 96 is one less than the char code
    // for "a" so this is checking that
    // it's a lowercase character
    tag.charCodeAt(0) > 96;
}
function lowercaseFirstLetter(string) {
    if (!string) {
        return string;
    }
    return string.charAt(0).toLowerCase() + string.slice(1);
}
}),
"[project]/xorithm-server-status/node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>extendSxProp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/utils/esm/deepmerge/deepmerge.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$defaultSxConfig$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js [ssr] (ecmascript)");
;
;
const splitProps = (props)=>{
    const result = {
        systemProps: {},
        otherProps: {}
    };
    const config = props?.theme?.unstable_sxConfig ?? __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$defaultSxConfig$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"];
    Object.keys(props).forEach((prop)=>{
        if (config[prop]) {
            result.systemProps[prop] = props[prop];
        } else {
            result.otherProps[prop] = props[prop];
        }
    });
    return result;
};
function extendSxProp(props) {
    const { sx: inSx, ...other } = props;
    const { systemProps, otherProps } = splitProps(other);
    let finalSx;
    if (Array.isArray(inSx)) {
        finalSx = [
            systemProps,
            ...inSx
        ];
    } else if (typeof inSx === 'function') {
        finalSx = (...args)=>{
            const result = inSx(...args);
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["isPlainObject"])(result)) {
                return systemProps;
            }
            return {
                ...systemProps,
                ...result
            };
        };
    } else {
        finalSx = {
            ...systemProps,
            ...inSx
        };
    }
    return {
        ...otherProps,
        sx: finalSx
    };
}
}),
"[project]/xorithm-server-status/node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js [ssr] (ecmascript) <export default as extendSxProp>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extendSxProp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$extendSxProp$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$extendSxProp$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js [ssr] (ecmascript)");
}),
"[project]/xorithm-server-status/node_modules/@mui/system/esm/useTheme/useTheme.js [ssr] (ecmascript) <export default as useTheme>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTheme",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useTheme$2f$useTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useTheme$2f$useTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/system/esm/useTheme/useTheme.js [ssr] (ecmascript)");
}),
"[project]/xorithm-server-status/node_modules/@mui/system/esm/GlobalStyles/GlobalStyles.js [ssr] (ecmascript) <export default as GlobalStyles>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlobalStyles",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$GlobalStyles$2f$GlobalStyles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$GlobalStyles$2f$GlobalStyles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/system/esm/GlobalStyles/GlobalStyles.js [ssr] (ecmascript)");
}),
"[project]/xorithm-server-status/node_modules/@mui/system/esm/memoTheme.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>unstable_memoTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$preprocessStyles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/system/esm/preprocessStyles.js [ssr] (ecmascript)");
;
/* eslint-disable @typescript-eslint/naming-convention */ // We need to pass an argument as `{ theme }` for PigmentCSS, but we don't want to
// allocate more objects.
const arg = {
    theme: undefined
};
function unstable_memoTheme(styleFn) {
    let lastValue;
    let lastTheme;
    return function styleMemoized(props) {
        let value = lastValue;
        if (value === undefined || props.theme !== lastTheme) {
            arg.theme = props.theme;
            value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$preprocessStyles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(styleFn(arg));
            lastValue = value;
            lastTheme = props.theme;
        }
        return value;
    };
}
}),
"[project]/xorithm-server-status/node_modules/@mui/system/esm/memoTheme.js [ssr] (ecmascript) <export default as unstable_memoTheme>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unstable_memoTheme",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$memoTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$memoTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/system/esm/memoTheme.js [ssr] (ecmascript)");
}),
"[project]/xorithm-server-status/node_modules/@mui/system/esm/useThemeProps/getThemeProps.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getThemeProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$resolveProps$2f$resolveProps$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/utils/esm/resolveProps/resolveProps.js [ssr] (ecmascript)");
;
function getThemeProps(params) {
    const { theme, name, props } = params;
    if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
        return props;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$resolveProps$2f$resolveProps$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(theme.components[name].defaultProps, props);
}
}),
"[project]/xorithm-server-status/node_modules/@mui/system/esm/useThemeProps/useThemeProps.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useThemeProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useThemeProps$2f$getThemeProps$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/system/esm/useThemeProps/getThemeProps.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useTheme$2f$useTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/system/esm/useTheme/useTheme.js [ssr] (ecmascript)");
'use client';
;
;
function useThemeProps({ props, name, defaultTheme, themeId }) {
    let theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useTheme$2f$useTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(defaultTheme);
    if (themeId) {
        theme = theme[themeId] || theme;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useThemeProps$2f$getThemeProps$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({
        theme,
        name,
        props
    });
}
}),
"[project]/xorithm-server-status/node_modules/@mui/system/esm/styled/styled.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createStyled$2f$createStyled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/system/esm/createStyled/createStyled.js [ssr] (ecmascript)");
;
const styled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createStyled$2f$createStyled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])();
const __TURBOPACK__default__export__ = styled;
}),
"[project]/xorithm-server-status/node_modules/@mui/system/esm/Container/createContainer.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createContainer
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/prop-types/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/clsx/dist/clsx.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$capitalize$2f$capitalize$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/utils/esm/capitalize/capitalize.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useThemeProps$2f$useThemeProps$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/system/esm/useThemeProps/useThemeProps.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styled$2f$styled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/system/esm/styled/styled.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createTheme$2f$createTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/system/esm/createTheme/createTheme.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-runtime [external] (react/jsx-runtime, cjs)");
'use client';
;
;
;
;
;
;
;
;
;
;
const defaultTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$createTheme$2f$createTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])();
const defaultCreateStyledComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styled$2f$styled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])('div', {
    name: 'MuiContainer',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            styles[`maxWidth${(0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$capitalize$2f$capitalize$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(String(ownerState.maxWidth))}`],
            ownerState.fixed && styles.fixed,
            ownerState.disableGutters && styles.disableGutters
        ];
    }
});
const useThemePropsDefault = (inProps)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useThemeProps$2f$useThemeProps$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({
        props: inProps,
        name: 'MuiContainer',
        defaultTheme
    });
const useUtilityClasses = (ownerState, componentName)=>{
    const getContainerUtilityClass = (slot)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(componentName, slot);
    };
    const { classes, fixed, disableGutters, maxWidth } = ownerState;
    const slots = {
        root: [
            'root',
            maxWidth && `maxWidth${(0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$capitalize$2f$capitalize$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(String(maxWidth))}`,
            fixed && 'fixed',
            disableGutters && 'disableGutters'
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(slots, getContainerUtilityClass, classes);
};
function createContainer(options = {}) {
    const { // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent, useThemeProps = useThemePropsDefault, componentName = 'MuiContainer' } = options;
    const ContainerRoot = createStyledComponent(({ theme, ownerState })=>({
            width: '100%',
            marginLeft: 'auto',
            boxSizing: 'border-box',
            marginRight: 'auto',
            ...!ownerState.disableGutters && {
                paddingLeft: theme.spacing(2),
                paddingRight: theme.spacing(2),
                // @ts-ignore module augmentation fails if custom breakpoints are used
                [theme.breakpoints.up('sm')]: {
                    paddingLeft: theme.spacing(3),
                    paddingRight: theme.spacing(3)
                }
            }
        }), ({ theme, ownerState })=>ownerState.fixed && Object.keys(theme.breakpoints.values).reduce((acc, breakpointValueKey)=>{
            const breakpoint = breakpointValueKey;
            const value = theme.breakpoints.values[breakpoint];
            if (value !== 0) {
                // @ts-ignore
                acc[theme.breakpoints.up(breakpoint)] = {
                    maxWidth: `${value}${theme.breakpoints.unit}`
                };
            }
            return acc;
        }, {}), ({ theme, ownerState })=>({
            // @ts-ignore module augmentation fails if custom breakpoints are used
            ...ownerState.maxWidth === 'xs' && {
                // @ts-ignore module augmentation fails if custom breakpoints are used
                [theme.breakpoints.up('xs')]: {
                    // @ts-ignore module augmentation fails if custom breakpoints are used
                    maxWidth: Math.max(theme.breakpoints.values.xs, 444)
                }
            },
            ...ownerState.maxWidth && // @ts-ignore module augmentation fails if custom breakpoints are used
            ownerState.maxWidth !== 'xs' && {
                // @ts-ignore module augmentation fails if custom breakpoints are used
                [theme.breakpoints.up(ownerState.maxWidth)]: {
                    // @ts-ignore module augmentation fails if custom breakpoints are used
                    maxWidth: `${theme.breakpoints.values[ownerState.maxWidth]}${theme.breakpoints.unit}`
                }
            }
        }));
    const Container = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](function Container(inProps, ref) {
        const props = useThemeProps(inProps);
        const { className, component = 'div', disableGutters = false, fixed = false, maxWidth = 'lg', classes: classesProp, ...other } = props;
        const ownerState = {
            ...props,
            component,
            disableGutters,
            fixed,
            maxWidth
        };
        // @ts-ignore module augmentation fails if custom breakpoints are used
        const classes = useUtilityClasses(ownerState, componentName);
        return(/*#__PURE__*/ // @ts-ignore theme is injected by the styled util
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$runtime$2c$__cjs$29$__["jsx"])(ContainerRoot, {
            as: component,
            ownerState: ownerState,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
            ref: ref,
            ...other
        }));
    });
    ("TURBOPACK compile-time truthy", 1) ? Container.propTypes = {
        children: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].node,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].object,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].string,
        component: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].elementType,
        disableGutters: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].bool,
        fixed: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].bool,
        maxWidth: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].oneOf([
                'xs',
                'sm',
                'md',
                'lg',
                'xl',
                false
            ]),
            __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].string
        ]),
        sx: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
                __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].func,
                __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].object,
                __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].bool
            ])),
            __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].object
        ])
    } : "TURBOPACK unreachable";
    return Container;
}
}),
"[project]/xorithm-server-status/node_modules/@mui/system/esm/Container/createContainer.js [ssr] (ecmascript) <export default as createContainer>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createContainer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$Container$2f$createContainer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$Container$2f$createContainer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@mui/system/esm/Container/createContainer.js [ssr] (ecmascript)");
}),
"[project]/xorithm-server-status/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_objectWithoutPropertiesLoose
]);
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
}),
"[project]/xorithm-server-status/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_setPrototypeOf
]);
function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
}
;
}),
"[project]/xorithm-server-status/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_inheritsLoose
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$setPrototypeOf$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js [ssr] (ecmascript)");
;
function _inheritsLoose(t, o) {
    t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$setPrototypeOf$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(t, o);
}
;
}),
"[project]/xorithm-server-status/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_assertThisInitialized
]);
function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
;
}),
"[project]/xorithm-server-status/node_modules/react-transition-group/esm/config.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    disabled: false
};
}),
"[project]/xorithm-server-status/node_modules/react-transition-group/esm/utils/PropTypes.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "classNamesShape",
    ()=>classNamesShape,
    "timeoutsShape",
    ()=>timeoutsShape
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/prop-types/index.js [ssr] (ecmascript)");
;
var timeoutsShape = ("TURBOPACK compile-time truthy", 1) ? __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
    __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].number,
    __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].shape({
        enter: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].number,
        exit: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].number,
        appear: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].number
    }).isRequired
]) : "TURBOPACK unreachable";
var classNamesShape = ("TURBOPACK compile-time truthy", 1) ? __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
    __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].string,
    __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].shape({
        enter: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].string,
        exit: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].string,
        active: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].string
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].shape({
        enter: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].string,
        enterDone: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].string,
        enterActive: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].string,
        exit: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].string,
        exitDone: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].string,
        exitActive: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].string
    })
]) : "TURBOPACK unreachable";
}),
"[project]/xorithm-server-status/node_modules/react-transition-group/esm/TransitionGroupContext.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createContext(null);
}),
"[project]/xorithm-server-status/node_modules/react-transition-group/esm/utils/reflow.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "forceReflow",
    ()=>forceReflow
]);
var forceReflow = function forceReflow(node) {
    return node.scrollTop;
};
}),
"[project]/xorithm-server-status/node_modules/react-transition-group/esm/Transition.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ENTERED",
    ()=>ENTERED,
    "ENTERING",
    ()=>ENTERING,
    "EXITED",
    ()=>EXITED,
    "EXITING",
    ()=>EXITING,
    "UNMOUNTED",
    ()=>UNMOUNTED,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/prop-types/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$dom__$5b$external$5d$__$28$react$2d$dom$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-dom [external] (react-dom, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$config$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/react-transition-group/esm/config.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$PropTypes$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/react-transition-group/esm/utils/PropTypes.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroupContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/react-transition-group/esm/TransitionGroupContext.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$reflow$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/react-transition-group/esm/utils/reflow.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */ var Transition = /*#__PURE__*/ function(_React$Component) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(Transition, _React$Component);
    function Transition(props, context) {
        var _this;
        _this = _React$Component.call(this, props, context) || this;
        var parentGroup = context; // In the context of a TransitionGroup all enters are really appears
        var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
        var initialStatus;
        _this.appearStatus = null;
        if (props.in) {
            if (appear) {
                initialStatus = EXITED;
                _this.appearStatus = ENTERING;
            } else {
                initialStatus = ENTERED;
            }
        } else {
            if (props.unmountOnExit || props.mountOnEnter) {
                initialStatus = UNMOUNTED;
            } else {
                initialStatus = EXITED;
            }
        }
        _this.state = {
            status: initialStatus
        };
        _this.nextCallback = null;
        return _this;
    }
    Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
        var nextIn = _ref.in;
        if (nextIn && prevState.status === UNMOUNTED) {
            return {
                status: EXITED
            };
        }
        return null;
    } // getSnapshotBeforeUpdate(prevProps) {
    ;
    var _proto = Transition.prototype;
    _proto.componentDidMount = function componentDidMount() {
        this.updateStatus(true, this.appearStatus);
    };
    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
        var nextStatus = null;
        if (prevProps !== this.props) {
            var status = this.state.status;
            if (this.props.in) {
                if (status !== ENTERING && status !== ENTERED) {
                    nextStatus = ENTERING;
                }
            } else {
                if (status === ENTERING || status === ENTERED) {
                    nextStatus = EXITING;
                }
            }
        }
        this.updateStatus(false, nextStatus);
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
        this.cancelNextCallback();
    };
    _proto.getTimeouts = function getTimeouts() {
        var timeout = this.props.timeout;
        var exit, enter, appear;
        exit = enter = appear = timeout;
        if (timeout != null && typeof timeout !== 'number') {
            exit = timeout.exit;
            enter = timeout.enter; // TODO: remove fallback for next major
            appear = timeout.appear !== undefined ? timeout.appear : enter;
        }
        return {
            exit: exit,
            enter: enter,
            appear: appear
        };
    };
    _proto.updateStatus = function updateStatus(mounting, nextStatus) {
        if (mounting === void 0) {
            mounting = false;
        }
        if (nextStatus !== null) {
            // nextStatus will always be ENTERING or EXITING.
            this.cancelNextCallback();
            if (nextStatus === ENTERING) {
                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var node = this.props.nodeRef ? this.props.nodeRef.current : __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$dom__$5b$external$5d$__$28$react$2d$dom$2c$__cjs$29$__["default"].findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
                    // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
                    // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.
                    if (node) (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$reflow$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["forceReflow"])(node);
                }
                this.performEnter(mounting);
            } else {
                this.performExit();
            }
        } else if (this.props.unmountOnExit && this.state.status === EXITED) {
            this.setState({
                status: UNMOUNTED
            });
        }
    };
    _proto.performEnter = function performEnter(mounting) {
        var _this2 = this;
        var enter = this.props.enter;
        var appearing = this.context ? this.context.isMounting : mounting;
        var _ref2 = this.props.nodeRef ? [
            appearing
        ] : [
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$dom__$5b$external$5d$__$28$react$2d$dom$2c$__cjs$29$__["default"].findDOMNode(this),
            appearing
        ], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
        var timeouts = this.getTimeouts();
        var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
        // if we are mounting and running this it means appear _must_ be set
        if (!mounting && !enter || __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$config$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].disabled) {
            this.safeSetState({
                status: ENTERED
            }, function() {
                _this2.props.onEntered(maybeNode);
            });
            return;
        }
        this.props.onEnter(maybeNode, maybeAppearing);
        this.safeSetState({
            status: ENTERING
        }, function() {
            _this2.props.onEntering(maybeNode, maybeAppearing);
            _this2.onTransitionEnd(enterTimeout, function() {
                _this2.safeSetState({
                    status: ENTERED
                }, function() {
                    _this2.props.onEntered(maybeNode, maybeAppearing);
                });
            });
        });
    };
    _proto.performExit = function performExit() {
        var _this3 = this;
        var exit = this.props.exit;
        var timeouts = this.getTimeouts();
        var maybeNode = this.props.nodeRef ? undefined : __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$dom__$5b$external$5d$__$28$react$2d$dom$2c$__cjs$29$__["default"].findDOMNode(this); // no exit animation skip right to EXITED
        if (!exit || __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$config$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].disabled) {
            this.safeSetState({
                status: EXITED
            }, function() {
                _this3.props.onExited(maybeNode);
            });
            return;
        }
        this.props.onExit(maybeNode);
        this.safeSetState({
            status: EXITING
        }, function() {
            _this3.props.onExiting(maybeNode);
            _this3.onTransitionEnd(timeouts.exit, function() {
                _this3.safeSetState({
                    status: EXITED
                }, function() {
                    _this3.props.onExited(maybeNode);
                });
            });
        });
    };
    _proto.cancelNextCallback = function cancelNextCallback() {
        if (this.nextCallback !== null) {
            this.nextCallback.cancel();
            this.nextCallback = null;
        }
    };
    _proto.safeSetState = function safeSetState(nextState, callback) {
        // This shouldn't be necessary, but there are weird race conditions with
        // setState callbacks and unmounting in testing, so always make sure that
        // we can cancel any pending setState callbacks after we unmount.
        callback = this.setNextCallback(callback);
        this.setState(nextState, callback);
    };
    _proto.setNextCallback = function setNextCallback(callback) {
        var _this4 = this;
        var active = true;
        this.nextCallback = function(event) {
            if (active) {
                active = false;
                _this4.nextCallback = null;
                callback(event);
            }
        };
        this.nextCallback.cancel = function() {
            active = false;
        };
        return this.nextCallback;
    };
    _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
        this.setNextCallback(handler);
        var node = this.props.nodeRef ? this.props.nodeRef.current : __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$dom__$5b$external$5d$__$28$react$2d$dom$2c$__cjs$29$__["default"].findDOMNode(this);
        var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;
        if (!node || doesNotHaveTimeoutOrListener) {
            setTimeout(this.nextCallback, 0);
            return;
        }
        if (this.props.addEndListener) {
            var _ref3 = this.props.nodeRef ? [
                this.nextCallback
            ] : [
                node,
                this.nextCallback
            ], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
            this.props.addEndListener(maybeNode, maybeNextCallback);
        }
        if (timeout != null) {
            setTimeout(this.nextCallback, timeout);
        }
    };
    _proto.render = function render() {
        var status = this.state.status;
        if (status === UNMOUNTED) {
            return null;
        }
        var _this$props = this.props, children = _this$props.children, _in = _this$props.in, _mountOnEnter = _this$props.mountOnEnter, _unmountOnExit = _this$props.unmountOnExit, _appear = _this$props.appear, _enter = _this$props.enter, _exit = _this$props.exit, _timeout = _this$props.timeout, _addEndListener = _this$props.addEndListener, _onEnter = _this$props.onEnter, _onEntering = _this$props.onEntering, _onEntered = _this$props.onEntered, _onExit = _this$props.onExit, _onExiting = _this$props.onExiting, _onExited = _this$props.onExited, _nodeRef = _this$props.nodeRef, childProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_this$props, [
            "children",
            "in",
            "mountOnEnter",
            "unmountOnExit",
            "appear",
            "enter",
            "exit",
            "timeout",
            "addEndListener",
            "onEnter",
            "onEntering",
            "onEntered",
            "onExit",
            "onExiting",
            "onExited",
            "nodeRef"
        ]);
        return(/*#__PURE__*/ // allows for nested Transitions
        __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroupContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].Provider, {
            value: null
        }, typeof children === 'function' ? children(status, childProps) : __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].cloneElement(__TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].Children.only(children), childProps)));
    };
    return Transition;
}(__TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].Component);
Transition.contextType = __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroupContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"];
Transition.propTypes = ("TURBOPACK compile-time truthy", 1) ? {
    /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */ nodeRef: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].shape({
        current: typeof Element === 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].any : function(propValue, key, componentName, location, propFullName, secret) {
            var value = propValue[key];
            return __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].instanceOf(value && 'ownerDocument' in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
        }
    }),
    /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].func.isRequired,
        __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].element.isRequired
    ]).isRequired,
    /**
   * Show the component; triggers the enter or exit states
   */ in: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */ mountOnEnter: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */ unmountOnExit: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */ appear: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Enable or disable enter transitions.
   */ enter: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Enable or disable exit transitions.
   */ exit: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */ timeout: function timeout(props) {
        var pt = __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$PropTypes$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["timeoutsShape"];
        if (!props.addEndListener) pt = pt.isRequired;
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        return pt.apply(void 0, [
            props
        ].concat(args));
    },
    /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */ addEndListener: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */ onEnter: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */ onEntering: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */ onEntered: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */ onExit: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */ onExiting: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */ onExited: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].func
} : "TURBOPACK unreachable"; // Name the function so it is clearer in the documentation
function noop() {}
Transition.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: noop,
    onEntering: noop,
    onEntered: noop,
    onExit: noop,
    onExiting: noop,
    onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
const __TURBOPACK__default__export__ = Transition;
}),
"[project]/xorithm-server-status/node_modules/react-transition-group/esm/Transition.js [ssr] (ecmascript) <export default as Transition>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Transition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/react-transition-group/esm/Transition.js [ssr] (ecmascript)");
}),
"[project]/xorithm-server-status/node_modules/react-transition-group/esm/utils/ChildMapping.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getChildMapping",
    ()=>getChildMapping,
    "getInitialChildMapping",
    ()=>getInitialChildMapping,
    "getNextChildMapping",
    ()=>getNextChildMapping,
    "mergeChildMappings",
    ()=>mergeChildMappings
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
function getChildMapping(children, mapFn) {
    var mapper = function mapper(child) {
        return mapFn && (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["isValidElement"])(child) ? mapFn(child) : child;
    };
    var result = Object.create(null);
    if (children) __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["Children"].map(children, function(c) {
        return c;
    }).forEach(function(child) {
        // run the map function here instead so that the key is the computed one
        result[child.key] = mapper(child);
    });
    return result;
}
function mergeChildMappings(prev, next) {
    prev = prev || {};
    next = next || {};
    function getValueForKey(key) {
        return key in next ? next[key] : prev[key];
    } // For each key of `next`, the list of keys to insert before that key in
    // the combined list
    var nextKeysPending = Object.create(null);
    var pendingKeys = [];
    for(var prevKey in prev){
        if (prevKey in next) {
            if (pendingKeys.length) {
                nextKeysPending[prevKey] = pendingKeys;
                pendingKeys = [];
            }
        } else {
            pendingKeys.push(prevKey);
        }
    }
    var i;
    var childMapping = {};
    for(var nextKey in next){
        if (nextKeysPending[nextKey]) {
            for(i = 0; i < nextKeysPending[nextKey].length; i++){
                var pendingNextKey = nextKeysPending[nextKey][i];
                childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
            }
        }
        childMapping[nextKey] = getValueForKey(nextKey);
    } // Finally, add the keys which didn't appear before any key in `next`
    for(i = 0; i < pendingKeys.length; i++){
        childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }
    return childMapping;
}
function getProp(child, prop, props) {
    return props[prop] != null ? props[prop] : child.props[prop];
}
function getInitialChildMapping(props, onExited) {
    return getChildMapping(props.children, function(child) {
        return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["cloneElement"])(child, {
            onExited: onExited.bind(null, child),
            in: true,
            appear: getProp(child, 'appear', props),
            enter: getProp(child, 'enter', props),
            exit: getProp(child, 'exit', props)
        });
    });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
    var nextChildMapping = getChildMapping(nextProps.children);
    var children = mergeChildMappings(prevChildMapping, nextChildMapping);
    Object.keys(children).forEach(function(key) {
        var child = children[key];
        if (!(0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["isValidElement"])(child)) return;
        var hasPrev = key in prevChildMapping;
        var hasNext = key in nextChildMapping;
        var prevChild = prevChildMapping[key];
        var isLeaving = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["isValidElement"])(prevChild) && !prevChild.props.in; // item is new (entering)
        if (hasNext && (!hasPrev || isLeaving)) {
            // console.log('entering', key)
            children[key] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["cloneElement"])(child, {
                onExited: onExited.bind(null, child),
                in: true,
                exit: getProp(child, 'exit', nextProps),
                enter: getProp(child, 'enter', nextProps)
            });
        } else if (!hasNext && hasPrev && !isLeaving) {
            // item is old (exiting)
            // console.log('leaving', key)
            children[key] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["cloneElement"])(child, {
                in: false
            });
        } else if (hasNext && hasPrev && (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["isValidElement"])(prevChild)) {
            // item hasn't changed transition states
            // copy over the last transition props;
            // console.log('unchanged', key)
            children[key] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["cloneElement"])(child, {
                onExited: onExited.bind(null, child),
                in: prevChild.props.in,
                exit: getProp(child, 'exit', nextProps),
                enter: getProp(child, 'enter', nextProps)
            });
        }
    });
    return children;
}
}),
"[project]/xorithm-server-status/node_modules/react-transition-group/esm/TransitionGroup.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@babel/runtime/helpers/esm/extends.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/prop-types/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroupContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/react-transition-group/esm/TransitionGroupContext.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$ChildMapping$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/react-transition-group/esm/utils/ChildMapping.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
var values = Object.values || function(obj) {
    return Object.keys(obj).map(function(k) {
        return obj[k];
    });
};
var defaultProps = {
    component: 'div',
    childFactory: function childFactory(child) {
        return child;
    }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */ var TransitionGroup = /*#__PURE__*/ function(_React$Component) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(TransitionGroup, _React$Component);
    function TransitionGroup(props, context) {
        var _this;
        _this = _React$Component.call(this, props, context) || this;
        var handleExited = _this.handleExited.bind((0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_this)); // Initial children should all be entering, dependent on appear
        _this.state = {
            contextValue: {
                isMounting: true
            },
            handleExited: handleExited,
            firstRender: true
        };
        return _this;
    }
    var _proto = TransitionGroup.prototype;
    _proto.componentDidMount = function componentDidMount() {
        this.mounted = true;
        this.setState({
            contextValue: {
                isMounting: false
            }
        });
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
        this.mounted = false;
    };
    TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
        var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
        return {
            children: firstRender ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$ChildMapping$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getInitialChildMapping"])(nextProps, handleExited) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$ChildMapping$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getNextChildMapping"])(nextProps, prevChildMapping, handleExited),
            firstRender: false
        };
    } // node is `undefined` when user provided `nodeRef` prop
    ;
    _proto.handleExited = function handleExited(child, node) {
        var currentChildMapping = (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$utils$2f$ChildMapping$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getChildMapping"])(this.props.children);
        if (child.key in currentChildMapping) return;
        if (child.props.onExited) {
            child.props.onExited(node);
        }
        if (this.mounted) {
            this.setState(function(state) {
                var children = (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({}, state.children);
                delete children[child.key];
                return {
                    children: children
                };
            });
        }
    };
    _proto.render = function render() {
        var _this$props = this.props, Component = _this$props.component, childFactory = _this$props.childFactory, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(_this$props, [
            "component",
            "childFactory"
        ]);
        var contextValue = this.state.contextValue;
        var children = values(this.state.children).map(childFactory);
        delete props.appear;
        delete props.enter;
        delete props.exit;
        if (Component === null) {
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroupContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].Provider, {
                value: contextValue
            }, children);
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroupContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].Provider, {
            value: contextValue
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].createElement(Component, props, children));
    };
    return TransitionGroup;
}(__TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].Component);
TransitionGroup.propTypes = ("TURBOPACK compile-time truthy", 1) ? {
    /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */ component: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].any,
    /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */ appear: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */ enter: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */ exit: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */ childFactory: __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].func
} : "TURBOPACK unreachable";
TransitionGroup.defaultProps = defaultProps;
const __TURBOPACK__default__export__ = TransitionGroup;
}),
"[project]/xorithm-server-status/node_modules/react-transition-group/esm/TransitionGroup.js [ssr] (ecmascript) <export default as TransitionGroup>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransitionGroup",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroup$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$xorithm$2d$server$2d$status$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$TransitionGroup$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/xorithm-server-status/node_modules/react-transition-group/esm/TransitionGroup.js [ssr] (ecmascript)");
}),
];

//# sourceMappingURL=1fccc_35dd18b5._.js.map