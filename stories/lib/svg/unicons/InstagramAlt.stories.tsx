import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { InstagramAlt, InstagramAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/InstagramAlt",
  component: InstagramAlt,
} as ComponentMeta<typeof InstagramAlt>;

const Template: ComponentStory<typeof InstagramAlt> = (
  args: InstagramAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <InstagramAlt {...args} />
    <InstagramAlt {...args} fill="red.500" />
    <InstagramAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
