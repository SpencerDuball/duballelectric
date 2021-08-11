import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Servers, ServersPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Servers",
  component: Servers,
} as ComponentMeta<typeof Servers>;

const Template: ComponentStory<typeof Servers> = (args: ServersPropsI) => (
  <Box display="flex" gap="20px">
    <Servers {...args} />
    <Servers {...args} fill="red.500" />
    <Servers {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
