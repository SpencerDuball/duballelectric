import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Laughing, LaughingPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Laughing",
  component: Laughing,
} as ComponentMeta<typeof Laughing>;

const Template: ComponentStory<typeof Laughing> = (args: LaughingPropsI) => (
  <Box display="flex" gap="20px">
    <Laughing {...args} />
    <Laughing {...args} fill="red.500" />
    <Laughing {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
