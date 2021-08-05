import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { TumblrAlt, TumblrAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/TumblrAlt",
  component: TumblrAlt,
} as ComponentMeta<typeof TumblrAlt>;

const Template: ComponentStory<typeof TumblrAlt> = (args: TumblrAltPropsI) => (
  <x.div display="flex" gap="20px">
    <TumblrAlt {...args} />
    <TumblrAlt {...args} fill="red.500" />
    <TumblrAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
