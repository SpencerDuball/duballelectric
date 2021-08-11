import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CornerUpLeftAlt, CornerUpLeftAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CornerUpLeftAlt",
  component: CornerUpLeftAlt,
} as ComponentMeta<typeof CornerUpLeftAlt>;

const Template: ComponentStory<typeof CornerUpLeftAlt> = (
  args: CornerUpLeftAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CornerUpLeftAlt {...args} />
    <CornerUpLeftAlt {...args} fill="red.500" />
    <CornerUpLeftAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
