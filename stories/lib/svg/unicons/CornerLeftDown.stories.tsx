import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CornerLeftDown, CornerLeftDownPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CornerLeftDown",
  component: CornerLeftDown,
} as ComponentMeta<typeof CornerLeftDown>;

const Template: ComponentStory<typeof CornerLeftDown> = (
  args: CornerLeftDownPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CornerLeftDown {...args} />
    <CornerLeftDown {...args} fill="red.500" />
    <CornerLeftDown {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
