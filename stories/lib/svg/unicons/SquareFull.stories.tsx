import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SquareFull, SquareFullPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SquareFull",
  component: SquareFull,
} as ComponentMeta<typeof SquareFull>;

const Template: ComponentStory<typeof SquareFull> = (
  args: SquareFullPropsI
) => (
  <x.div display="flex" gap="20px">
    <SquareFull {...args} />
    <SquareFull {...args} fill="red.500" />
    <SquareFull {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
