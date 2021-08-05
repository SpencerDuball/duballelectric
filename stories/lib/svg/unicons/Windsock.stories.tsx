import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Windsock, WindsockPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Windsock",
  component: Windsock,
} as ComponentMeta<typeof Windsock>;

const Template: ComponentStory<typeof Windsock> = (args: WindsockPropsI) => (
  <x.div display="flex" gap="20px">
    <Windsock {...args} />
    <Windsock {...args} fill="red.500" />
    <Windsock {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
