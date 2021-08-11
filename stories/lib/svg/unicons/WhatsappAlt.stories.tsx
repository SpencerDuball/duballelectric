import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { WhatsappAlt, WhatsappAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/WhatsappAlt",
  component: WhatsappAlt,
} as ComponentMeta<typeof WhatsappAlt>;

const Template: ComponentStory<typeof WhatsappAlt> = (
  args: WhatsappAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <WhatsappAlt {...args} />
    <WhatsappAlt {...args} fill="red.500" />
    <WhatsappAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
