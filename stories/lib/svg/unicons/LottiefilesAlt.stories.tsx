import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { LottiefilesAlt, LottiefilesAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LottiefilesAlt",
  component: LottiefilesAlt,
} as ComponentMeta<typeof LottiefilesAlt>;

const Template: ComponentStory<typeof LottiefilesAlt> = (
  args: LottiefilesAltPropsI
) => (
  <Box display="flex" gap="20px">
    <LottiefilesAlt {...args} />
    <LottiefilesAlt {...args} fill="red.500" />
    <LottiefilesAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
