import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CompressArrows, CompressArrowsPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CompressArrows",
  component: CompressArrows,
} as ComponentMeta<typeof CompressArrows>;

const Template: ComponentStory<typeof CompressArrows> = (
  args: CompressArrowsPropsI
) => (
  <Box display="flex" gap="20px">
    <CompressArrows {...args} />
    <CompressArrows {...args} fill="red.500" />
    <CompressArrows {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
