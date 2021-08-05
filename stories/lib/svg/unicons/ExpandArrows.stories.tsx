import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ExpandArrows, ExpandArrowsPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ExpandArrows",
  component: ExpandArrows,
} as ComponentMeta<typeof ExpandArrows>;

const Template: ComponentStory<typeof ExpandArrows> = (
  args: ExpandArrowsPropsI
) => (
  <x.div display="flex" gap="20px">
    <ExpandArrows {...args} />
    <ExpandArrows {...args} fill="red.500" />
    <ExpandArrows {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
