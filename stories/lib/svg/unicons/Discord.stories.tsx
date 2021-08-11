import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Discord, DiscordPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Discord",
  component: Discord,
} as ComponentMeta<typeof Discord>;

const Template: ComponentStory<typeof Discord> = (args: DiscordPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Discord {...args} />
    <Discord {...args} fill="red.500" />
    <Discord {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
