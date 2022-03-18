import { r as registerInstance, f as createEvent, h, g as getElement } from './index-180d3095.js';
import { B as BindModel, T as TableOfContentProperty, b as TableOfContentEvent } from './index-d5f82560.js';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
;
const PskUserProfile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.getUserInfoEvent = createEvent(this, "getUserInfo", 7);
    this.userInfo = null;
  }
  componentWillLoad() {
    if (!this.userInfo) {
      this.getUserInfoEvent.emit((err, userInfo) => {
        if (!err) {
          this.userInfo = userInfo;
        }
        else {
          console.error("Error getting user info", err);
        }
      });
    }
  }
  render() {
    if (!this.htmlElement.isConnected)
      return null;
    let ItemRenderer = this.profileRenderer ? this.profileRenderer : "psk-user-profile-renderer";
    return (h(ItemRenderer, { userInfo: this.userInfo }));
  }
  get htmlElement() { return getElement(this); }
};
__decorate([
  BindModel()
], PskUserProfile.prototype, "modelHandler", void 0);
__decorate([
  TableOfContentProperty({
    description: `should receive an object with the following properties if the default renderer is wanted: username, avatar, email.`,
    isMandatory: false,
    propertyType: `any`,
    defaultValue: 'null'
  })
], PskUserProfile.prototype, "userInfo", void 0);
__decorate([
  TableOfContentProperty({
    description: `This property allows the component to display a custom User Profile in case the default one is not preferred. `,
    isMandatory: false,
    propertyType: 'any',
  })
], PskUserProfile.prototype, "profileRenderer", void 0);
__decorate([
  TableOfContentEvent({
    eventName: `getUserInfo`,
    controllerInteraction: {
      required: true
    },
    description: `This event is emitted only if the userInfo property is null in order to get the desired data.`
  })
], PskUserProfile.prototype, "getUserInfoEvent", void 0);

export { PskUserProfile as psk_user_profile };
