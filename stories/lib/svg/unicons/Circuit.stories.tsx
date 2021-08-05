import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Circuit, CircuitPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Circuit",
  component: Circuit,
} as ComponentMeta<typeof Circuit>;

const Template: ComponentStory<typeof Circuit> = (args: CircuitPropsI) => (
  <x.div display="flex" gap="20px">
    <Circuit {...args} />
    <Circuit {...args} fill="red.500" />
    <Circuit {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
