import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Line, LinePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Line",
  component: Line,
} as ComponentMeta<typeof Line>;

const Template: ComponentStory<typeof Line> = (args: LinePropsI) => (
  <x.div display="flex" gap="20px">
    <Line {...args} />
    <Line {...args} fill="red.500" />
    <Line {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
