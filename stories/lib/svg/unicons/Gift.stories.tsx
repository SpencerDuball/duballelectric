import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Gift, GiftPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Gift",
  component: Gift,
} as ComponentMeta<typeof Gift>;

const Template: ComponentStory<typeof Gift> = (args: GiftPropsI) => (
  <x.div display="flex" gap="20px">
    <Gift {...args} />
    <Gift {...args} fill="red.500" />
    <Gift {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
