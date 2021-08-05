import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Windy, WindyPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Windy",
  component: Windy,
} as ComponentMeta<typeof Windy>;

const Template: ComponentStory<typeof Windy> = (args: WindyPropsI) => (
  <x.div display="flex" gap="20px">
    <Windy {...args} />
    <Windy {...args} fill="red.500" />
    <Windy {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
