import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ChannelAdd, ChannelAddPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ChannelAdd",
  component: ChannelAdd,
} as ComponentMeta<typeof ChannelAdd>;

const Template: ComponentStory<typeof ChannelAdd> = (
  args: ChannelAddPropsI
) => (
  <x.div display="flex" gap="20px">
    <ChannelAdd {...args} />
    <ChannelAdd {...args} fill="red.500" />
    <ChannelAdd {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
