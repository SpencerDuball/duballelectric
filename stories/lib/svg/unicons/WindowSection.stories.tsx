import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { WindowSection, WindowSectionPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/WindowSection",
  component: WindowSection,
} as ComponentMeta<typeof WindowSection>;

const Template: ComponentStory<typeof WindowSection> = (
  args: WindowSectionPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <WindowSection {...args} />
    <WindowSection {...args} fill="red.500" />
    <WindowSection {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
