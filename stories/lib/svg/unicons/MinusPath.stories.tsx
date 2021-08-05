import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { MinusPath, MinusPathPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/MinusPath",
  component: MinusPath,
} as ComponentMeta<typeof MinusPath>;

const Template: ComponentStory<typeof MinusPath> = (args: MinusPathPropsI) => (
  <x.div display="flex" gap="20px">
    <MinusPath {...args} />
    <MinusPath {...args} fill="red.500" />
    <MinusPath {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
