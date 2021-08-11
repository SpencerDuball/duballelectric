import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Globe, GlobePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Globe",
  component: Globe,
} as ComponentMeta<typeof Globe>;

const Template: ComponentStory<typeof Globe> = (args: GlobePropsI) => (
  <Box display="flex" gap="20px">
    <Globe {...args} />
    <Globe {...args} fill="red.500" />
    <Globe {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
