import text from "./index";

describe("Reducers", () => {
  describe("text", () => {
    const initialState = {
      text: []
    };

    it("Should handle initial state", () => {
      expect(text(undefined, [])).toEqual(initialState);
    });

    it("Should handle ADD_TEXT", () => {
      expect(
        text(initialState, {
          type: "ADD_TEXT",
          payload: "Hello World!"
        })
      ).toEqual({
        text: ["Hello World!"]
      });

      expect(
        text(
          {
            text: ["One Text"]
          },
          {
            type: "ADD_TEXT",
            payload: "Second Text"
          }
        )
      ).toEqual({
        text: ["One Text", "Second Text"]
      });
    });
  });
});
