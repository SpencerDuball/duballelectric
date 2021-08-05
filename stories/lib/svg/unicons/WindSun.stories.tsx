import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { WindSun, WindSunPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/WindSun",
  component: WindSun,
} as ComponentMeta<typeof WindSun>;

const Template: ComponentStory<typeof WindSun> = (args: WindSunPropsI) => (
  <x.div display="flex" gap="20px">
    <WindSun {...args} />
    <WindSun {...args} fill="red.500" />
    <WindSun {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
