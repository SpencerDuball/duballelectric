import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Channel, ChannelPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Channel",
  component: Channel,
} as ComponentMeta<typeof Channel>;

const Template: ComponentStory<typeof Channel> = (args: ChannelPropsI) => (
  <Box display="flex" gap="20px">
    <Channel {...args} />
    <Channel {...args} fill="red.500" />
    <Channel {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
