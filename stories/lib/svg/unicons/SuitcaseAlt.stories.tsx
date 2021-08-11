import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SuitcaseAlt, SuitcaseAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SuitcaseAlt",
  component: SuitcaseAlt,
} as ComponentMeta<typeof SuitcaseAlt>;

const Template: ComponentStory<typeof SuitcaseAlt> = (
  args: SuitcaseAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <SuitcaseAlt {...args} />
    <SuitcaseAlt {...args} fill="red.500" />
    <SuitcaseAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
