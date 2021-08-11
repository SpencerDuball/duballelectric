import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ExposureAlt, ExposureAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ExposureAlt",
  component: ExposureAlt,
} as ComponentMeta<typeof ExposureAlt>;

const Template: ComponentStory<typeof ExposureAlt> = (
  args: ExposureAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ExposureAlt {...args} />
    <ExposureAlt {...args} fill="red.500" />
    <ExposureAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
