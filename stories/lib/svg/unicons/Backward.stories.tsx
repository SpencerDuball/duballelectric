import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Backward, BackwardPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Backward",
  component: Backward,
} as ComponentMeta<typeof Backward>;

const Template: ComponentStory<typeof Backward> = (args: BackwardPropsI) => (
  <x.div display="flex" gap="20px">
    <Backward {...args} />
    <Backward {...args} fill="red.500" />
    <Backward {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
