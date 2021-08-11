import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { PresentationPlus, PresentationPlusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/PresentationPlus",
  component: PresentationPlus,
} as ComponentMeta<typeof PresentationPlus>;

const Template: ComponentStory<typeof PresentationPlus> = (
  args: PresentationPlusPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <PresentationPlus {...args} />
    <PresentationPlus {...args} fill="red.500" />
    <PresentationPlus {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
