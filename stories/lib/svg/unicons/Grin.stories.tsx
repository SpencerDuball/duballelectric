import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Grin, GrinPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Grin",
  component: Grin,
} as ComponentMeta<typeof Grin>;

const Template: ComponentStory<typeof Grin> = (args: GrinPropsI) => (
  <x.div display="flex" gap="20px">
    <Grin {...args} />
    <Grin {...args} fill="red.500" />
    <Grin {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
