import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ImageShield, ImageShieldPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ImageShield",
  component: ImageShield,
} as ComponentMeta<typeof ImageShield>;

const Template: ComponentStory<typeof ImageShield> = (
  args: ImageShieldPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ImageShield {...args} />
    <ImageShield {...args} fill="red.500" />
    <ImageShield {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
