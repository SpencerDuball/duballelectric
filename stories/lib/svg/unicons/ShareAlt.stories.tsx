import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ShareAlt, ShareAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ShareAlt",
  component: ShareAlt,
} as ComponentMeta<typeof ShareAlt>;

const Template: ComponentStory<typeof ShareAlt> = (args: ShareAltPropsI) => (
  <Box display="flex" gap="20px">
    <ShareAlt {...args} />
    <ShareAlt {...args} fill="red.500" />
    <ShareAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
