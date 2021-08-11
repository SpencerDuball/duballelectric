import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { HeadphoneSlash, HeadphoneSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/HeadphoneSlash",
  component: HeadphoneSlash,
} as ComponentMeta<typeof HeadphoneSlash>;

const Template: ComponentStory<typeof HeadphoneSlash> = (
  args: HeadphoneSlashPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <HeadphoneSlash {...args} />
    <HeadphoneSlash {...args} fill="red.500" />
    <HeadphoneSlash {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
