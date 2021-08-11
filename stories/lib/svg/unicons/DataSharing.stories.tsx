import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { DataSharing, DataSharingPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/DataSharing",
  component: DataSharing,
} as ComponentMeta<typeof DataSharing>;

const Template: ComponentStory<typeof DataSharing> = (
  args: DataSharingPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <DataSharing {...args} />
    <DataSharing {...args} fill="red.500" />
    <DataSharing {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
