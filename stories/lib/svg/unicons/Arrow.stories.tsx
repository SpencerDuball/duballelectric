import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Arrow, ArrowPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Arrow",
  component: Arrow,
} as ComponentMeta<typeof Arrow>;

const Template: ComponentStory<typeof Arrow> = (args: ArrowPropsI) => (
  <x.div display="flex" gap="20px">
    <Arrow {...args} />
    <Arrow {...args} fill="red.500" />
    <Arrow {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
