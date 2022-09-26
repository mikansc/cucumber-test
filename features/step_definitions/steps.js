const { Given, When, Then } = require("@cucumber/cucumber");
const { assertThat, is } = require("hamjest");

const Person = require("../../src/shouty");

Given("{person} is located/standing {int} metre(s) from {person}", function (lucy, distance, sean) {
  this.lucy = lucy;
  this.sean = sean;
  this.lucy.moveTo(distance);
});

When("Sean shouts {string}", function (message) {
  this.message = message;
  this.sean.shout(message);
});

Then("Lucy hears Sean's message", function () {
  assertThat(this.lucy.messageHeard(), is([this.message]));
});
