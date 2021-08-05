import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FlipV, FlipVPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/FlipV",
  component: FlipV,
} as ComponentMeta<typeof FlipV>;

const Template: ComponentStory<typeof FlipV> = (args: FlipVPropsI) => (
  <x.div display="flex" gap="20px">
    <FlipV {...args} />
    <FlipV {...args} fill="red.500" />
    <FlipV {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
