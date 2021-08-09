import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Swimmer, SwimmerPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Swimmer",
  component: Swimmer,
} as ComponentMeta<typeof Swimmer>;

const Template: ComponentStory<typeof Swimmer> = (args: SwimmerPropsI) => (
  <x.div display="flex" gap="20px">
    <Swimmer {...args} />
    <Swimmer {...args} fill="red.500" />
    <Swimmer {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
