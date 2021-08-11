import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CompressLines, CompressLinesPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CompressLines",
  component: CompressLines,
} as ComponentMeta<typeof CompressLines>;

const Template: ComponentStory<typeof CompressLines> = (
  args: CompressLinesPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CompressLines {...args} />
    <CompressLines {...args} fill="red.500" />
    <CompressLines {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
