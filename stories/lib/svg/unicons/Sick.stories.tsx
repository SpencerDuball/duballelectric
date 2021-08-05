import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Sick, SickPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Sick",
  component: Sick,
} as ComponentMeta<typeof Sick>;

const Template: ComponentStory<typeof Sick> = (args: SickPropsI) => (
  <x.div display="flex" gap="20px">
    <Sick {...args} />
    <Sick {...args} fill="red.500" />
    <Sick {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
