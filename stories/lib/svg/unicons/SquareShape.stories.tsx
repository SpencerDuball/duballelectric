import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SquareShape, SquareShapePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/SquareShape",
  component: SquareShape,
} as ComponentMeta<typeof SquareShape>;

const Template: ComponentStory<typeof SquareShape> = (
  args: SquareShapePropsI
) => (
  <x.div display="flex" gap="20px">
    <SquareShape {...args} />
    <SquareShape {...args} fill="red.500" />
    <SquareShape {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
