const chai = require("chai");

const { expect } = chai;
const request = require("supertest");
const config = require("../config").test;
const app = require("../server/index")(config);

/**
 * Testing post text endpoint
 */
describe("The / route", () => {
  const data = {
    text: "im batman"
  };
  it("Should show an error with empty request", done => {
    request(app)
      .post("/")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(400);

        return done();
      });
  });

  it("Returns the same text sent to the API as a response", done => {
    request(app)
      .post("/")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(200);
        expect(res.body.text).to.equal(data.text);

        return done();
      });
  });
});
