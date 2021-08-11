import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { RssAlt, RssAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/RssAlt",
  component: RssAlt,
} as ComponentMeta<typeof RssAlt>;

const Template: ComponentStory<typeof RssAlt> = (args: RssAltPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <RssAlt {...args} />
    <RssAlt {...args} fill="red.500" />
    <RssAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
