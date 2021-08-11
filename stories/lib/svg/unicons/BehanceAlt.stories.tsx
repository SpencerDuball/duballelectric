import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BehanceAlt, BehanceAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BehanceAlt",
  component: BehanceAlt,
} as ComponentMeta<typeof BehanceAlt>;

const Template: ComponentStory<typeof BehanceAlt> = (
  args: BehanceAltPropsI
) => (
  <Box display="flex" gap="20px">
    <BehanceAlt {...args} />
    <BehanceAlt {...args} fill="red.500" />
    <BehanceAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
