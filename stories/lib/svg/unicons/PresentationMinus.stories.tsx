import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { PresentationMinus, PresentationMinusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/PresentationMinus",
  component: PresentationMinus,
} as ComponentMeta<typeof PresentationMinus>;

const Template: ComponentStory<typeof PresentationMinus> = (
  args: PresentationMinusPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <PresentationMinus {...args} />
    <PresentationMinus {...args} fill="red.500" />
    <PresentationMinus {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
