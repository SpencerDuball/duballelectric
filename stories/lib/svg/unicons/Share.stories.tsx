import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Share, SharePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Share",
  component: Share,
} as ComponentMeta<typeof Share>;

const Template: ComponentStory<typeof Share> = (args: SharePropsI) => (
  <Box display="flex" gap="20px">
    <Share {...args} />
    <Share {...args} fill="red.500" />
    <Share {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
