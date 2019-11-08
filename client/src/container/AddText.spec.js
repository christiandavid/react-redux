import React from "react";
import { mount } from "enzyme";
import { AddText } from "./AddText";

const value = "Hello World!";

const setup = () => {
  const dispatch = jest.fn(() => ({ text: value }));
  const wrapper = mount(<AddText dispatch={dispatch} />);

  return {
    wrapper,
    dispatch,
    textInput: wrapper.find("input"),
    submitButton: wrapper.find("button"),
    form: wrapper.find("form")
  };
};

describe("Container", () => {
  describe("<AddText />", () => {
    it("Should render", () => {
      const { textInput, submitButton } = setup();

      expect(textInput.prop("placeholder")).toEqual("Text");
      expect(submitButton.prop("type")).toEqual("submit");
      expect(submitButton.text()).toEqual("Add text");
    });

    it("Should call addText", () => {
      const { dispatch, textInput, form } = setup();

      expect(textInput).toHaveLength(1);
      textInput.instance().value = value;
      form.simulate("submit");
      expect(dispatch.mock.results[0].value).toEqual({ text: value });
      expect(dispatch).toHaveBeenCalledTimes(1);
    });
  });
});
