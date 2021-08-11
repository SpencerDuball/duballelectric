import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { PresentationCheck, PresentationCheckPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/PresentationCheck",
  component: PresentationCheck,
} as ComponentMeta<typeof PresentationCheck>;

const Template: ComponentStory<typeof PresentationCheck> = (
  args: PresentationCheckPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <PresentationCheck {...args} />
    <PresentationCheck {...args} fill="red.500" />
    <PresentationCheck {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
