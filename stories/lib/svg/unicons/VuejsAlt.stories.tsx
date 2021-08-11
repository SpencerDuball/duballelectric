import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { VuejsAlt, VuejsAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/VuejsAlt",
  component: VuejsAlt,
} as ComponentMeta<typeof VuejsAlt>;

const Template: ComponentStory<typeof VuejsAlt> = (args: VuejsAltPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <VuejsAlt {...args} />
    <VuejsAlt {...args} fill="red.500" />
    <VuejsAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
