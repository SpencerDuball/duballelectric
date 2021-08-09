import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Pliers, PliersPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/unicons/Pliers",
  component: Pliers,
} as ComponentMeta<typeof Pliers>;

const Template: ComponentStory<typeof Pliers> = (args: PliersPropsI) => (
  <x.div display="flex" gap="20px">
    <Pliers {...args} />
    <Pliers {...args} fill="red.500" />
    <Pliers {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
