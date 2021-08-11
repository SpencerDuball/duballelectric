import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { LeftIndentAlt, LeftIndentAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LeftIndentAlt",
  component: LeftIndentAlt,
} as ComponentMeta<typeof LeftIndentAlt>;

const Template: ComponentStory<typeof LeftIndentAlt> = (
  args: LeftIndentAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <LeftIndentAlt {...args} />
    <LeftIndentAlt {...args} fill="red.500" />
    <LeftIndentAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
