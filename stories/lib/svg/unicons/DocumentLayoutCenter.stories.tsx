import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import {
  DocumentLayoutCenter,
  DocumentLayoutCenterPropsI,
} from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/DocumentLayoutCenter",
  component: DocumentLayoutCenter,
} as ComponentMeta<typeof DocumentLayoutCenter>;

const Template: ComponentStory<typeof DocumentLayoutCenter> = (
  args: DocumentLayoutCenterPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <DocumentLayoutCenter {...args} />
    <DocumentLayoutCenter {...args} fill="red.500" />
    <DocumentLayoutCenter {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
