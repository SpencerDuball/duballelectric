import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { WindMoon, WindMoonPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/WindMoon",
  component: WindMoon,
} as ComponentMeta<typeof WindMoon>;

const Template: ComponentStory<typeof WindMoon> = (args: WindMoonPropsI) => (
  <x.div display="flex" gap="20px">
    <WindMoon {...args} />
    <WindMoon {...args} fill="red.500" />
    <WindMoon {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
