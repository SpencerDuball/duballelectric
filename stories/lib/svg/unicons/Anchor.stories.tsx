import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Anchor, AnchorPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Anchor",
  component: Anchor,
} as ComponentMeta<typeof Anchor>;

const Template: ComponentStory<typeof Anchor> = (args: AnchorPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Anchor {...args} />
    <Anchor {...args} fill="red.500" />
    <Anchor {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
