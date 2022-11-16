export const SET_NAMES = {
    WOODGRAIN: 'WOODGRAIN',
}
export const COLOR_NAMES = {
    WOODGRAIN: {
        WALNUT: 'WALNUT',
        MAHOGANY: 'MAHOGANY',
        CHERRY: 'CHERRY',
        LEATHER: 'LEATHER',
        SAND: 'SAND',
    }
}
export const getHexColor = (colorName) => {
    switch(colorName) {
        case COLOR_NAMES.WOODGRAIN.WALNUT:
            return '#271810';
        case COLOR_NAMES.WOODGRAIN.MAHOGANY:
            return '#4f200f';
        case COLOR_NAMES.WOODGRAIN.LEATHER:
            return '#954520';
        case COLOR_NAMES.WOODGRAIN.CHERRY:
            return '#D2691E';
        case COLOR_NAMES.WOODGRAIN.SAND:
            return '#bd9476';
        default:
            return '#888888'; // gray
    }
}
// Make sure that the text is readable to go with the background (sent in argument)
export const getFGColorForBG = (colorName) => {
    switch(colorName) {
        case COLOR_NAMES.WOODGRAIN.WALNUT:
            return 'white';
        case COLOR_NAMES.WOODGRAIN.MAHOGANY:
            return 'white';
        case COLOR_NAMES.WOODGRAIN.LEATHER:
            return 'black';
        case COLOR_NAMES.WOODGRAIN.CHERRY:
            return 'black';
        case COLOR_NAMES.WOODGRAIN.SAND:
            return 'black';
        default:
            return 'black'; // gray
    }
}
export const getRGBColor = (colorName) => {
    switch(colorName) {
        case COLOR_NAMES.WOODGRAIN.WALNUT:
            return (39,24,16);
        case COLOR_NAMES.WOODGRAIN.MAHOGANY:
            return (79,32,15);
        case COLOR_NAMES.WOODGRAIN.LEATHER:
            return (149,69,32);
        case COLOR_NAMES.WOODGRAIN.CHERRY:
            return (199,108,63);
        case COLOR_NAMES.WOODGRAIN.SAND:
            return (189,148,118);
        default:
            return (128,128,128); // gray
    }
}
export const cycleColor = ((setName=SET_NAMES.WOODGRAIN) => {
    let count = 0;
    const modifyCount = (mod) => {
        count += mod;
    }
    // const advanceColor = () => {
    //     console.log('color set: ' + setName);
    //     console.log(COLOR_NAMES.setName);
    //     let numColors = Object.keys(COLOR_NAMES[setName]).length;
    //     let index = count % numColors;
    //     let key = Object.keys(COLOR_NAMES[setName])[index];
    //     console.log('cycleColor: key', key);
    //     count++;
    //     return key;    
    // }
    // const k = advanceColor();
    return {
        reset() {
            modifyCount(-count)
        },
        increment() {
            modifyCount(1)
        },
        decrement() {
            modifyCount(-1)
        },
        getNextIndex() {
            this.increment()
            return count;
        },
        getNextColorSet() {
            let numColors = Object.keys(COLOR_NAMES[setName]).length;
            let index = count % numColors;
            let key = Object.keys(COLOR_NAMES[setName])[index];
            let hexColor = getHexColor(key);
            let fgColor = getFGColorForBG(key);
            this.increment();
            return [hexColor, fgColor];
        }
    };
    // return getHexColor(COLOR_NAMES[setName][key]);
})();
// export const getColor = () => {
//     return (128,128,128);
// }
export default COLOR_NAMES;