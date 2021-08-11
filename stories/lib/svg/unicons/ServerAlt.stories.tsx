import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ServerAlt, ServerAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ServerAlt",
  component: ServerAlt,
} as ComponentMeta<typeof ServerAlt>;

const Template: ComponentStory<typeof ServerAlt> = (args: ServerAltPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <ServerAlt {...args} />
    <ServerAlt {...args} fill="red.500" />
    <ServerAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
