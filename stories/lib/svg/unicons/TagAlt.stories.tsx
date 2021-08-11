import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { TagAlt, TagAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/TagAlt",
  component: TagAlt,
} as ComponentMeta<typeof TagAlt>;

const Template: ComponentStory<typeof TagAlt> = (args: TagAltPropsI) => (
  <Box display="flex" gap="20px">
    <TagAlt {...args} />
    <TagAlt {...args} fill="red.500" />
    <TagAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
