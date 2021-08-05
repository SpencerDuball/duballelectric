import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { MinusSquareFull, MinusSquareFullPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/MinusSquareFull",
  component: MinusSquareFull,
} as ComponentMeta<typeof MinusSquareFull>;

const Template: ComponentStory<typeof MinusSquareFull> = (
  args: MinusSquareFullPropsI
) => (
  <x.div display="flex" gap="20px">
    <MinusSquareFull {...args} />
    <MinusSquareFull {...args} fill="red.500" />
    <MinusSquareFull {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
