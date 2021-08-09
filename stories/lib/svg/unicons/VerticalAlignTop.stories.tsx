import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { VerticalAlignTop, VerticalAlignTopPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/VerticalAlignTop",
  component: VerticalAlignTop,
} as ComponentMeta<typeof VerticalAlignTop>;

const Template: ComponentStory<typeof VerticalAlignTop> = (
  args: VerticalAlignTopPropsI
) => (
  <x.div display="flex" gap="20px">
    <VerticalAlignTop {...args} />
    <VerticalAlignTop {...args} fill="red.500" />
    <VerticalAlignTop {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
