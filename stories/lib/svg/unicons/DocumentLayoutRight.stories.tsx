import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import {
  DocumentLayoutRight,
  DocumentLayoutRightPropsI,
} from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/DocumentLayoutRight",
  component: DocumentLayoutRight,
} as ComponentMeta<typeof DocumentLayoutRight>;

const Template: ComponentStory<typeof DocumentLayoutRight> = (
  args: DocumentLayoutRightPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <DocumentLayoutRight {...args} />
    <DocumentLayoutRight {...args} fill="red.500" />
    <DocumentLayoutRight {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
