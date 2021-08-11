import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { DatabaseAlt, DatabaseAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/DatabaseAlt",
  component: DatabaseAlt,
} as ComponentMeta<typeof DatabaseAlt>;

const Template: ComponentStory<typeof DatabaseAlt> = (
  args: DatabaseAltPropsI
) => (
  <Box display="flex" gap="20px">
    <DatabaseAlt {...args} />
    <DatabaseAlt {...args} fill="red.500" />
    <DatabaseAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
