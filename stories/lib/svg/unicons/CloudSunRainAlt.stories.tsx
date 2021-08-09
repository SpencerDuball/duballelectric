import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CloudSunRainAlt, CloudSunRainAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudSunRainAlt",
  component: CloudSunRainAlt,
} as ComponentMeta<typeof CloudSunRainAlt>;

const Template: ComponentStory<typeof CloudSunRainAlt> = (
  args: CloudSunRainAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <CloudSunRainAlt {...args} />
    <CloudSunRainAlt {...args} fill="red.500" />
    <CloudSunRainAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
