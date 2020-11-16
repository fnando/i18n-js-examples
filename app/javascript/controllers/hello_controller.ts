// Visit The Stimulus Handbook for more details
// https://stimulusjs.org/handbook/introduction
//
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus";
import { i18n } from "config/i18n";

export default class extends Controller {
  static targets = ["output"];
  outputTarget: HTMLHeadingElement;

  connect() {
    this.outputTarget.textContent = i18n.t("hello");
  }
}
