import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { PhoneAlt, PhoneAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/PhoneAlt",
  component: PhoneAlt,
} as ComponentMeta<typeof PhoneAlt>;

const Template: ComponentStory<typeof PhoneAlt> = (args: PhoneAltPropsI) => (
  <x.div display="flex" gap="20px">
    <PhoneAlt {...args} />
    <PhoneAlt {...args} fill="red.500" />
    <PhoneAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
