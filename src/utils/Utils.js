class Utils {
  static numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  static getCrashValue = (min, max) => {
    return (Math.floor(min - 1 + Math.pow(max - min + 1, Math.random()) * 100) / 100).toFixed(2);
    // return (Math.floor(Math.random() * 1000) / 100 + 1).toFixed(2);
  };

  static getValue = (min, max) => {
    return min - 1 + Math.pow(max - min + 1, Math.random());
  };

  static hexToRgb = hex => {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
  };
}

export default Utils;
