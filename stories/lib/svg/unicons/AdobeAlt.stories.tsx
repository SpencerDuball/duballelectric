import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { AdobeAlt, AdobeAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AdobeAlt",
  component: AdobeAlt,
} as ComponentMeta<typeof AdobeAlt>;

const Template: ComponentStory<typeof AdobeAlt> = (args: AdobeAltPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <AdobeAlt {...args} />
    <AdobeAlt {...args} fill="red.500" />
    <AdobeAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
