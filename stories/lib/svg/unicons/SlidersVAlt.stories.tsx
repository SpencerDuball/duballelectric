import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SlidersVAlt, SlidersVAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SlidersVAlt",
  component: SlidersVAlt,
} as ComponentMeta<typeof SlidersVAlt>;

const Template: ComponentStory<typeof SlidersVAlt> = (
  args: SlidersVAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <SlidersVAlt {...args} />
    <SlidersVAlt {...args} fill="red.500" />
    <SlidersVAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
