import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ServerNetworkAlt, ServerNetworkAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ServerNetworkAlt",
  component: ServerNetworkAlt,
} as ComponentMeta<typeof ServerNetworkAlt>;

const Template: ComponentStory<typeof ServerNetworkAlt> = (
  args: ServerNetworkAltPropsI
) => (
  <Box display="flex" gap="20px">
    <ServerNetworkAlt {...args} />
    <ServerNetworkAlt {...args} fill="red.500" />
    <ServerNetworkAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
