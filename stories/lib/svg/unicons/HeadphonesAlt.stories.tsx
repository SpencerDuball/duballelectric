import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { HeadphonesAlt, HeadphonesAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/HeadphonesAlt",
  component: HeadphonesAlt,
} as ComponentMeta<typeof HeadphonesAlt>;

const Template: ComponentStory<typeof HeadphonesAlt> = (
  args: HeadphonesAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <HeadphonesAlt {...args} />
    <HeadphonesAlt {...args} fill="red.500" />
    <HeadphonesAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
