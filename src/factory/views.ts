/**
 * https://www.storyblok.com/tp/react-dynamic-component-from-json
 */

import Index from "./views/Index";
import About from "./views/About";
import Settings from "./views/Settings";
import Survival from "./views/Survival";

const Components = {
  "/": Index,
  "/about": About,
  "/survival": Survival,
  "/settings": Settings,
};

export default block => {
  // component does exist
  if (typeof Components[block.component] !== "undefined") {
    return React.createElement(Components[block.component], {
      key: block._uid,
      block: block
    });
  }
  // component doesn't exist yet
  return React.createElement(
    () => <div>The component {block.component} has not been created yet.</div>,
    { key: block._uid }
  );
}