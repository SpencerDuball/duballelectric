import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { IntercomAlt, IntercomAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/IntercomAlt",
  component: IntercomAlt,
} as ComponentMeta<typeof IntercomAlt>;

const Template: ComponentStory<typeof IntercomAlt> = (
  args: IntercomAltPropsI
) => (
  <Box display="flex" gap="20px">
    <IntercomAlt {...args} />
    <IntercomAlt {...args} fill="red.500" />
    <IntercomAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
