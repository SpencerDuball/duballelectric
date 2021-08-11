import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CornerUpRightAlt, CornerUpRightAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CornerUpRightAlt",
  component: CornerUpRightAlt,
} as ComponentMeta<typeof CornerUpRightAlt>;

const Template: ComponentStory<typeof CornerUpRightAlt> = (
  args: CornerUpRightAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CornerUpRightAlt {...args} />
    <CornerUpRightAlt {...args} fill="red.500" />
    <CornerUpRightAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
