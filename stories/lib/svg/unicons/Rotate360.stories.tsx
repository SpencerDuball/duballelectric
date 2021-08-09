import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Rotate360, Rotate360PropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Rotate360",
  component: Rotate360,
} as ComponentMeta<typeof Rotate360>;

const Template: ComponentStory<typeof Rotate360> = (args: Rotate360PropsI) => (
  <x.div display="flex" gap="20px">
    <Rotate360 {...args} />
    <Rotate360 {...args} fill="red.500" />
    <Rotate360 {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
