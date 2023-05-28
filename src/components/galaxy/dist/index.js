"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var galaxy_module_scss_1 = require("./galaxy.module.scss");
var sparkle__1__png_1 = require("../../assets/images/sparkle (1).png");
var sparkle_png_1 = require("../../assets/images/sparkle.png");
var sparkler_png_1 = require("../../assets/images/sparkler.png");
var react_1 = require("react");
function Galaxy() {
    var _a = react_1.useState(window.innerWidth), windowWidth = _a[0], setWindowWidth = _a[1];
    var _b = react_1.useState(window.innerHeight), windowHeight = _b[0], setWindowHeight = _b[1];
    var stars = [sparkle__1__png_1["default"], sparkle_png_1["default"], sparkler_png_1["default"]];
    var starSizes = [
        "5px",
        "10px",
        "15px",
        "20px",
        "25px",
        "30px",
        "35px",
        "40px",
        "45px",
        "50px",
    ];
    var _c = react_1.useState([]), blocks = _c[0], setBlocks = _c[1];
    // const removeFirstElement = () => {
    //   setBlocks((prevBlocks) => {
    //     const newBlocks = prevBlocks.slice(1); // Создание нового массива без первого элемента
    //     return newBlocks;
    //   });
    // };
    // // Пример использования
    // setTimeout(() => {
    //   setInterval(() =>{
    //     removeFirstElement()
    //   }, 100)
    // }, 10000)
    react_1.useEffect(function () {
        var timer = setTimeout(function () {
            var xCoordinate = getRandomWindowPosition(windowWidth - 70);
            var yCoordinate = getRandomWindowPosition(windowHeight - 70);
            var size = starSizes[getRandomWindowPosition(10)];
            setBlocks(function (prevBlocks) {
                if (prevBlocks.length >= 100) {
                    return __spreadArrays(prevBlocks.slice(1), [
                        React.createElement("div", { className: galaxy_module_scss_1["default"].star, key: Date.now(), style: {
                                position: "absolute",
                                left: xCoordinate,
                                top: yCoordinate
                            } },
                            React.createElement("img", { src: stars[getRandomWindowPosition(3)], style: {
                                    width: size,
                                    height: size
                                }, alt: "img" })),
                    ]);
                }
                else {
                    return __spreadArrays(prevBlocks, [
                        React.createElement("div", { className: galaxy_module_scss_1["default"].star, key: Date.now(), style: {
                                position: "absolute",
                                left: xCoordinate,
                                top: yCoordinate
                            } },
                            React.createElement("img", { src: stars[getRandomWindowPosition(3)], style: {
                                    width: size,
                                    height: size
                                }, alt: "img" })),
                    ]);
                }
            });
        }, 100);
        return function () { return clearTimeout(timer); };
    }, [blocks]);
    var getRandomWindowPosition = function (maxNumber) {
        return Math.floor(Math.random() * maxNumber);
    };
    return React.createElement("div", { className: galaxy_module_scss_1["default"].mainContainer }, blocks);
}
exports["default"] = Galaxy;
