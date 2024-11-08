function decodeUplink(input) {
  var data = {};

  // Convert bytes to a string
  var payload = String.fromCharCode.apply(null, input.bytes);

  // Parse the temperature from the string if it matches the "temp=xxx" format
  if (payload.startsWith("temp=")) {
    var tempStr = payload.substring(5);  // Extract the number after "temp="
    data.temperature = parseInt(tempStr);  // Convert the extracted string to an integer
  } else {
    // Handle any unexpected data format
    data.error = "Unexpected payload format: " + payload;
  }

  return {
    data: data,
    warnings: [],
    errors: []
  };
}
