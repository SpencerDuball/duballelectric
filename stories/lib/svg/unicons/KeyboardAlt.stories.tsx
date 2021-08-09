import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { KeyboardAlt, KeyboardAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/KeyboardAlt",
  component: KeyboardAlt,
} as ComponentMeta<typeof KeyboardAlt>;

const Template: ComponentStory<typeof KeyboardAlt> = (
  args: KeyboardAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <KeyboardAlt {...args} />
    <KeyboardAlt {...args} fill="red.500" />
    <KeyboardAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
