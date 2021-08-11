import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { WheelchairAlt, WheelchairAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/WheelchairAlt",
  component: WheelchairAlt,
} as ComponentMeta<typeof WheelchairAlt>;

const Template: ComponentStory<typeof WheelchairAlt> = (
  args: WheelchairAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <WheelchairAlt {...args} />
    <WheelchairAlt {...args} fill="red.500" />
    <WheelchairAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
