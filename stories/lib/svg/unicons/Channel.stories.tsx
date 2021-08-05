import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Channel, ChannelPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Channel",
  component: Channel,
} as ComponentMeta<typeof Channel>;

const Template: ComponentStory<typeof Channel> = (args: ChannelPropsI) => (
  <x.div display="flex" gap="20px">
    <Channel {...args} />
    <Channel {...args} fill="red.500" />
    <Channel {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
