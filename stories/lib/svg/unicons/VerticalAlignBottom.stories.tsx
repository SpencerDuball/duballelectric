import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { VerticalAlignBottom, VerticalAlignBottomPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/VerticalAlignBottom",
  component: VerticalAlignBottom,
} as ComponentMeta<typeof VerticalAlignBottom>;

const Template: ComponentStory<typeof VerticalAlignBottom> = (
  args: VerticalAlignBottomPropsI
) => (
  <x.div display="flex" gap="20px">
    <VerticalAlignBottom {...args} />
    <VerticalAlignBottom {...args} fill="red.500" />
    <VerticalAlignBottom {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
