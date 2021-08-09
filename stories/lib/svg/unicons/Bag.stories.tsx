import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Bag, BagPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Bag",
  component: Bag,
} as ComponentMeta<typeof Bag>;

const Template: ComponentStory<typeof Bag> = (args: BagPropsI) => (
  <x.div display="flex" gap="20px">
    <Bag {...args} />
    <Bag {...args} fill="red.500" />
    <Bag {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
