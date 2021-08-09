import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { DialpadAlt, DialpadAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/DialpadAlt",
  component: DialpadAlt,
} as ComponentMeta<typeof DialpadAlt>;

const Template: ComponentStory<typeof DialpadAlt> = (
  args: DialpadAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <DialpadAlt {...args} />
    <DialpadAlt {...args} fill="red.500" />
    <DialpadAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
