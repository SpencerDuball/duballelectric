import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Constructor, ConstructorPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Constructor",
  component: Constructor,
} as ComponentMeta<typeof Constructor>;

const Template: ComponentStory<typeof Constructor> = (
  args: ConstructorPropsI
) => (
  <x.div display="flex" gap="20px">
    <Constructor {...args} />
    <Constructor {...args} fill="red.500" />
    <Constructor {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
