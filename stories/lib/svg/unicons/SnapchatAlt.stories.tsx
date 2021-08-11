import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SnapchatAlt, SnapchatAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SnapchatAlt",
  component: SnapchatAlt,
} as ComponentMeta<typeof SnapchatAlt>;

const Template: ComponentStory<typeof SnapchatAlt> = (
  args: SnapchatAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <SnapchatAlt {...args} />
    <SnapchatAlt {...args} fill="red.500" />
    <SnapchatAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
