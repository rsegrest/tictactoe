export const COLOR_NAMES = {
    WOODGRAIN: {
        WALNUT: 'walnut',
        MAHOGANY: 'mahogany',
        CHERRY: 'cherry',
        LEATHER: 'leather',
        SAND: 'sand',
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
export default COLOR_NAMES;