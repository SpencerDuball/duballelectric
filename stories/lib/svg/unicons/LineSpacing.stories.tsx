import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { LineSpacing, LineSpacingPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LineSpacing",
  component: LineSpacing,
} as ComponentMeta<typeof LineSpacing>;

const Template: ComponentStory<typeof LineSpacing> = (
  args: LineSpacingPropsI
) => (
  <x.div display="flex" gap="20px">
    <LineSpacing {...args} />
    <LineSpacing {...args} fill="red.500" />
    <LineSpacing {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
