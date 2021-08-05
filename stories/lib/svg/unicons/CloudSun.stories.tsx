import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CloudSun, CloudSunPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CloudSun",
  component: CloudSun,
} as ComponentMeta<typeof CloudSun>;

const Template: ComponentStory<typeof CloudSun> = (args: CloudSunPropsI) => (
  <x.div display="flex" gap="20px">
    <CloudSun {...args} />
    <CloudSun {...args} fill="red.500" />
    <CloudSun {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
