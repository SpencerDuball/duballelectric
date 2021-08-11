import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { HoldScrewdriver, HoldScrewdriverPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/HoldScrewdriver",
  component: HoldScrewdriver,
} as ComponentMeta<typeof HoldScrewdriver>;

const Template: ComponentStory<typeof HoldScrewdriver> = (
  args: HoldScrewdriverPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <HoldScrewdriver {...args} />
    <HoldScrewdriver {...args} fill="red.500" />
    <HoldScrewdriver {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
