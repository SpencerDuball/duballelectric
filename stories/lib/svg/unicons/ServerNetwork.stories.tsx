import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ServerNetwork, ServerNetworkPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ServerNetwork",
  component: ServerNetwork,
} as ComponentMeta<typeof ServerNetwork>;

const Template: ComponentStory<typeof ServerNetwork> = (
  args: ServerNetworkPropsI
) => (
  <Box display="flex" gap="20px">
    <ServerNetwork {...args} />
    <ServerNetwork {...args} fill="red.500" />
    <ServerNetwork {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
