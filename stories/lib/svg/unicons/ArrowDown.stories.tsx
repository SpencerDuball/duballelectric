import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ArrowDown, ArrowDownPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowDown",
  component: ArrowDown,
} as ComponentMeta<typeof ArrowDown>;

const Template: ComponentStory<typeof ArrowDown> = (args: ArrowDownPropsI) => (
  <x.div display="flex" gap="20px">
    <ArrowDown {...args} />
    <ArrowDown {...args} fill="red.500" />
    <ArrowDown {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
