import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Sperms, SpermsPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Sperms",
  component: Sperms,
} as ComponentMeta<typeof Sperms>;

const Template: ComponentStory<typeof Sperms> = (args: SpermsPropsI) => (
  <x.div display="flex" gap="20px">
    <Sperms {...args} />
    <Sperms {...args} fill="red.500" />
    <Sperms {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
