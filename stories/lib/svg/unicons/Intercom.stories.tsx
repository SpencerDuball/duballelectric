import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Intercom, IntercomPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Intercom",
  component: Intercom,
} as ComponentMeta<typeof Intercom>;

const Template: ComponentStory<typeof Intercom> = (args: IntercomPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Intercom {...args} />
    <Intercom {...args} fill="red.500" />
    <Intercom {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
