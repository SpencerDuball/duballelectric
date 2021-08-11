import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { EditAlt, EditAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/EditAlt",
  component: EditAlt,
} as ComponentMeta<typeof EditAlt>;

const Template: ComponentStory<typeof EditAlt> = (args: EditAltPropsI) => (
  <Box display="flex" gap="20px">
    <EditAlt {...args} />
    <EditAlt {...args} fill="red.500" />
    <EditAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
