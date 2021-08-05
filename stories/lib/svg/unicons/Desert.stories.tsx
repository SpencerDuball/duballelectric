import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Desert, DesertPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Desert",
  component: Desert,
} as ComponentMeta<typeof Desert>;

const Template: ComponentStory<typeof Desert> = (args: DesertPropsI) => (
  <x.div display="flex" gap="20px">
    <Desert {...args} />
    <Desert {...args} fill="red.500" />
    <Desert {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
