import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { OpenCircuit, OpenCircuitPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/OpenCircuit",
  component: OpenCircuit,
} as ComponentMeta<typeof OpenCircuit>;

const Template: ComponentStory<typeof OpenCircuit> = (
  args: OpenCircuitPropsI
) => (
  <x.div display="flex" gap="20px">
    <OpenCircuit {...args} />
    <OpenCircuit {...args} fill="red.500" />
    <OpenCircuit {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
