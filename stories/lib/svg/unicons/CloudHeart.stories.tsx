import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CloudHeart, CloudHeartPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudHeart",
  component: CloudHeart,
} as ComponentMeta<typeof CloudHeart>;

const Template: ComponentStory<typeof CloudHeart> = (
  args: CloudHeartPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CloudHeart {...args} />
    <CloudHeart {...args} fill="red.500" />
    <CloudHeart {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
