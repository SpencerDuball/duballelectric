import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SpinnerAlt, SpinnerAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SpinnerAlt",
  component: SpinnerAlt,
} as ComponentMeta<typeof SpinnerAlt>;

const Template: ComponentStory<typeof SpinnerAlt> = (
  args: SpinnerAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <SpinnerAlt {...args} />
    <SpinnerAlt {...args} fill="red.500" />
    <SpinnerAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
