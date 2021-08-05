import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { TwitterAlt, TwitterAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/TwitterAlt",
  component: TwitterAlt,
} as ComponentMeta<typeof TwitterAlt>;

const Template: ComponentStory<typeof TwitterAlt> = (
  args: TwitterAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <TwitterAlt {...args} />
    <TwitterAlt {...args} fill="red.500" />
    <TwitterAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
