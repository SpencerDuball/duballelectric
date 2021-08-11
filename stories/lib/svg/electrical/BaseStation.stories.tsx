import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BaseStation, BaseStationPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/BaseStation",
  component: BaseStation,
} as ComponentMeta<typeof BaseStation>;

const Template: ComponentStory<typeof BaseStation> = (
  args: BaseStationPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <BaseStation {...args} />
    <BaseStation {...args} fill="red.500" />
    <BaseStation {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
