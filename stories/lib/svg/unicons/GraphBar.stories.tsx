import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { GraphBar, GraphBarPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/GraphBar",
  component: GraphBar,
} as ComponentMeta<typeof GraphBar>;

const Template: ComponentStory<typeof GraphBar> = (args: GraphBarPropsI) => (
  <x.div display="flex" gap="20px">
    <GraphBar {...args} />
    <GraphBar {...args} fill="red.500" />
    <GraphBar {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
