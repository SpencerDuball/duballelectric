import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { DocumentInfo, DocumentInfoPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/DocumentInfo",
  component: DocumentInfo,
} as ComponentMeta<typeof DocumentInfo>;

const Template: ComponentStory<typeof DocumentInfo> = (
  args: DocumentInfoPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <DocumentInfo {...args} />
    <DocumentInfo {...args} fill="red.500" />
    <DocumentInfo {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
