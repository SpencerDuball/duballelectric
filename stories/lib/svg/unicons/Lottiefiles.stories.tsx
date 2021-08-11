import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Lottiefiles, LottiefilesPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Lottiefiles",
  component: Lottiefiles,
} as ComponentMeta<typeof Lottiefiles>;

const Template: ComponentStory<typeof Lottiefiles> = (
  args: LottiefilesPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <Lottiefiles {...args} />
    <Lottiefiles {...args} fill="red.500" />
    <Lottiefiles {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
