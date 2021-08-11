import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { PresentationLine, PresentationLinePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/PresentationLine",
  component: PresentationLine,
} as ComponentMeta<typeof PresentationLine>;

const Template: ComponentStory<typeof PresentationLine> = (
  args: PresentationLinePropsI
) => (
  <Box display="flex" gap="20px">
    <PresentationLine {...args} />
    <PresentationLine {...args} fill="red.500" />
    <PresentationLine {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
