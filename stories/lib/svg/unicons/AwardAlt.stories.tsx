import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { AwardAlt, AwardAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AwardAlt",
  component: AwardAlt,
} as ComponentMeta<typeof AwardAlt>;

const Template: ComponentStory<typeof AwardAlt> = (args: AwardAltPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <AwardAlt {...args} />
    <AwardAlt {...args} fill="red.500" />
    <AwardAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
