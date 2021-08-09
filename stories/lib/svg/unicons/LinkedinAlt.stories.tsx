import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { LinkedinAlt, LinkedinAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LinkedinAlt",
  component: LinkedinAlt,
} as ComponentMeta<typeof LinkedinAlt>;

const Template: ComponentStory<typeof LinkedinAlt> = (
  args: LinkedinAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <LinkedinAlt {...args} />
    <LinkedinAlt {...args} fill="red.500" />
    <LinkedinAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
