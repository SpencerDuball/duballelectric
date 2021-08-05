import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ExpandArrowsAlt, ExpandArrowsAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ExpandArrowsAlt",
  component: ExpandArrowsAlt,
} as ComponentMeta<typeof ExpandArrowsAlt>;

const Template: ComponentStory<typeof ExpandArrowsAlt> = (
  args: ExpandArrowsAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <ExpandArrowsAlt {...args} />
    <ExpandArrowsAlt {...args} fill="red.500" />
    <ExpandArrowsAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
