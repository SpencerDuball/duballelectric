import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Paragraph, ParagraphPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Paragraph",
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args: ParagraphPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Paragraph {...args} />
    <Paragraph {...args} fill="red.500" />
    <Paragraph {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
