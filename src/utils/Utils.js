class Utils {
  static numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  static getCrashValue = (min, max) => {
    return (Math.floor(min - 1 + Math.pow(max - min + 1, Math.random()) * 100) / 100).toFixed(2);
    return (Math.floor(Math.random() * 1000) / 100 + 1).toFixed(2);
  };

  static getValue = (min, max) => {
    return min - 1 + Math.pow(max - min + 1, Math.random());
  };
}

export default Utils;
