import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ArchiveAlt, ArchiveAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArchiveAlt",
  component: ArchiveAlt,
} as ComponentMeta<typeof ArchiveAlt>;

const Template: ComponentStory<typeof ArchiveAlt> = (
  args: ArchiveAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ArchiveAlt {...args} />
    <ArchiveAlt {...args} fill="red.500" />
    <ArchiveAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
