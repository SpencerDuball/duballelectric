import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MehAlt, MehAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MehAlt",
  component: MehAlt,
} as ComponentMeta<typeof MehAlt>;

const Template: ComponentStory<typeof MehAlt> = (args: MehAltPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <MehAlt {...args} />
    <MehAlt {...args} fill="red.500" />
    <MehAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
