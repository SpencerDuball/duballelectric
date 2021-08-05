import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Squint, SquintPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Squint",
  component: Squint,
} as ComponentMeta<typeof Squint>;

const Template: ComponentStory<typeof Squint> = (args: SquintPropsI) => (
  <x.div display="flex" gap="20px">
    <Squint {...args} />
    <Squint {...args} fill="red.500" />
    <Squint {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
