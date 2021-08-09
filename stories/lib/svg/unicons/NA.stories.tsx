import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { NA, NAPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/NA",
  component: NA,
} as ComponentMeta<typeof NA>;

const Template: ComponentStory<typeof NA> = (args: NAPropsI) => (
  <x.div display="flex" gap="20px">
    <NA {...args} />
    <NA {...args} fill="red.500" />
    <NA {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
