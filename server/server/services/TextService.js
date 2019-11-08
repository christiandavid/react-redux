const uuidv4 = require("uuid/v4");

class TextService {
  // eslint-disable-next-line class-methods-use-this
  processText(text) {
    const id = uuidv4();

    return {
      id,
      text
    };
  }
}

module.exports = TextService;
