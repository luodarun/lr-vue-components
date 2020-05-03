/**
 * Format HTML string
 */
exports.convertHtml = function(str) {
  return str.replace(/(&#x)(\w{4});/gi, $0 =>
    String.fromCharCode(
      parseInt(
        encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, "$2"),
        16
      )
    )
  );
};
