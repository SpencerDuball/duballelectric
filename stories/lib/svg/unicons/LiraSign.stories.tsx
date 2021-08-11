import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { LiraSign, LiraSignPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LiraSign",
  component: LiraSign,
} as ComponentMeta<typeof LiraSign>;

const Template: ComponentStory<typeof LiraSign> = (args: LiraSignPropsI) => (
  <Box display="flex" gap="20px">
    <LiraSign {...args} />
    <LiraSign {...args} fill="red.500" />
    <LiraSign {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
