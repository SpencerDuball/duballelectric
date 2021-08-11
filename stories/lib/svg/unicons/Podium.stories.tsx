import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Podium, PodiumPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Podium",
  component: Podium,
} as ComponentMeta<typeof Podium>;

const Template: ComponentStory<typeof Podium> = (args: PodiumPropsI) => (
  <Box display="flex" gap="20px">
    <Podium {...args} />
    <Podium {...args} fill="red.500" />
    <Podium {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
