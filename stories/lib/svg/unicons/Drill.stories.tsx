import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Drill, DrillPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Drill",
  component: Drill,
} as ComponentMeta<typeof Drill>;

const Template: ComponentStory<typeof Drill> = (args: DrillPropsI) => (
  <x.div display="flex" gap="20px">
    <Drill {...args} />
    <Drill {...args} fill="red.500" />
    <Drill {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
