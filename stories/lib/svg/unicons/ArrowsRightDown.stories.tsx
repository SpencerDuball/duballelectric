import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ArrowsRightDown, ArrowsRightDownPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowsRightDown",
  component: ArrowsRightDown,
} as ComponentMeta<typeof ArrowsRightDown>;

const Template: ComponentStory<typeof ArrowsRightDown> = (
  args: ArrowsRightDownPropsI
) => (
  <x.div display="flex" gap="20px">
    <ArrowsRightDown {...args} />
    <ArrowsRightDown {...args} fill="red.500" />
    <ArrowsRightDown {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
